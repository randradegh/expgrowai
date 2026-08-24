#!/usr/bin/env python3
"""
Servidor de desarrollo local para ExpGrowAI.
Sirve el build de producción (dist/) y maneja el endpoint /api/contact
usando Resend (misma lógica que la función serverless de Vercel).

Uso:
  python3 serve.py [--port 8080] [--dir dist]

Variables de entorno (opcional):
  RESEND_API_KEY    - API key de Resend (si no se provee, simula el envío)
  CONTACT_EMAIL     - Destinatario (default: randrade@expgrowai.mx)
  RESEND_FROM_EMAIL - Remitente (default: contacto@expgrowai.mx)
"""

import json
import os
import re
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

CONTACT_EMAIL = os.environ.get('CONTACT_EMAIL', 'randrade@expgrowai.mx')
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
RESEND_FROM_EMAIL = os.environ.get('RESEND_FROM_EMAIL', 'contacto@expgrowai.mx')


class ExpGrowAIHandler(SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/api/contact':
            self.handle_contact()
        else:
            self.send_error(404, 'Not found')

    def do_OPTIONS(self):
        self.send_cors_headers()
        self.end_headers()

    def send_cors_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

    def handle_contact(self):
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length)

        try:
            data = json.loads(body)
        except json.JSONDecodeError:
            self.send_json(400, {'error': 'Invalid JSON'})
            return

        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        message = data.get('message', '').strip()

        if not name or not email or not message:
            self.send_json(400, {'error': 'Todos los campos son requeridos'})
            return

        email_regex = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
        if not re.match(email_regex, email):
            self.send_json(400, {'error': 'Email inválido'})
            return

        if RESEND_API_KEY:
            try:
                import resend
                resend.api_key = RESEND_API_KEY

                from_email = RESEND_FROM_EMAIL
                if '@gmail.com' in from_email or '@googlemail.com' in from_email:
                    from_email = 'onboarding@resend.dev'

                if '<' not in from_email:
                    from_email = f'Exponential Grow AI <{from_email}>'

                params = {
                    'from': from_email,
                    'to': [CONTACT_EMAIL],
                    'reply_to': email,
                    'subject': f'Nuevo mensaje de contacto de {name}',
                    'html': f'''
                        <h2>Nuevo mensaje de contacto</h2>
                        <p><strong>Nombre:</strong> {name}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Mensaje:</strong></p>
                        <p>{message}</p>
                    ''',
                }

                r = resend.Emails.send(params)
                print(f'✅ Email enviado: {r["id"]}')
                self.send_json(200, {'success': True, 'message': 'Mensaje enviado correctamente'})
                return
            except Exception as e:
                print(f'❌ Error con Resend: {e}')
                self.send_json(500, {'error': 'Error al enviar el mensaje', 'message': str(e)})
                return

        # Sin API key: simular envío
        print(f'📧 [SIMULADO] Nuevo mensaje de {name} <{email}>: {message[:100]}...')
        print('💡 Configura RESEND_API_KEY en .env.local para envíos reales')
        self.send_json(200, {
            'success': True,
            'message': 'Mensaje enviado correctamente (modo simulado)',
        })

    def send_json(self, status, data):
        body = json.dumps(data).encode('utf-8')
        self.send_response(status)
        self.send_cors_headers()
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        # SPA routing: si no es un archivo real, servir index.html
        parsed = urlparse(self.path)
        file_path = self.translate_path(self.path)

        if not os.path.exists(file_path) or os.path.isdir(file_path):
            self.path = '/index.html'

        return super().do_GET()


def main():
    port = int(sys.argv[sys.argv.index('--port') + 1]) if '--port' in sys.argv else 8080
    directory = sys.argv[sys.argv.index('--dir') + 1] if '--dir' in sys.argv else 'dist'

    os.chdir(directory)
    server = HTTPServer(('0.0.0.0', port), ExpGrowAIHandler)
    print(f'🚀 Sirviendo http://0.0.0.0:{port} desde {os.path.abspath(".")}')
    print(f'📬 POST /api/contact {"(Resend real)" if RESEND_API_KEY else "(modo simulado)"}')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\n🛑 Servidor detenido')
        server.server_close()


if __name__ == '__main__':
    main()