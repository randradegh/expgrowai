import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactModal from '../components/ContactModal'
import SEO from '../components/SEO'

const MODULOS = [
  {
    num: 1,
    titulo: '¿Qué es esto que llaman IA?',
    items: [
      'Desmitificación de la inteligencia artificial: qué es, qué no es y por qué importa ahora.',
      'Historia express del campo, mapa del ecosistema actual (ChatGPT, Gemini, Claude y más).',
      'Cómo funciona un modelo de lenguaje y qué son las "alucinaciones".',
      'Primera práctica en vivo con ChatGPT y Arena AI: el mismo prompt respondido por dos modelos al mismo tiempo.',
    ],
  },
  {
    num: 2,
    titulo: 'Hablarle bien a la IA: Prompt Engineering sin código',
    items: [
      'Anatomía de un buen prompt (rol, tarea, contexto, formato, restricciones).',
      'Técnicas prácticas: role prompting, formato de salida, few-shot e iteración.',
      'Errores comunes que arruinan los resultados.',
      'Taller: cada participante construye su propia biblioteca de 3 prompts listos para usar en su trabajo.',
    ],
  },
  {
    num: 3,
    titulo: 'IA en tu trabajo del día a día',
    items: [
      'Aplicaciones concretas por área: redacción y mejora de correos, reportes y actas con Gemini.',
      'Análisis de documentos extensos y generación de resúmenes con NotebookLM.',
      'Diseño de presentaciones e imágenes con Canva AI.',
      'Transcripción automática de reuniones con Google Meet. Demo en vivo: del problema al entregable en menos de 5 minutos.',
    ],
  },
  {
    num: 4,
    titulo: 'Uso responsable: lo que necesitas saber',
    items: [
      'Qué información nunca debes subir a una IA pública.',
      'Cómo identificar y verificar alucinaciones. Sesgo algorítmico y sus efectos en decisiones de negocio.',
      'Deepfakes, derechos de autor y ética del uso profesional.',
      'Marco legal básico en México (LGPDPPP). Dinámica grupal: ¿verdadero, falso o inventado?',
    ],
  },
  {
    num: 5,
    titulo: 'El futuro que ya llegó: perspectiva y plan personal',
    items: [
      'Qué es la IA agéntica y hacia dónde vamos.',
      'Impacto específico por área profesional: diseño, administración y ventas.',
      'Cómo seguir aprendiendo en un campo que cambia cada 6 meses.',
      'Taller de cierre: canvas personal de adopción de IA + compromisos para los próximos 30 días.',
    ],
  },
]

const HERRAMIENTAS = [
  { nombre: 'ChatGPT (OpenAI)', uso: 'Asistente general de texto' },
  { nombre: 'Gemini (Google)', uso: 'IA integrada en Gmail, Docs y Sheets' },
  { nombre: 'Google NotebookLM', uso: 'Análisis y resumen de documentos' },
  { nombre: 'Canva AI', uso: 'Diseño, presentaciones e imágenes' },
  { nombre: 'Arena AI', uso: 'Comparar modelos de IA en un solo lugar' },
  { nombre: 'Perplexity AI', uso: 'Búsqueda con fuentes verificadas' },
  { nombre: 'Google Meet', uso: 'Transcripción automática de reuniones' },
]

const DETALLES_EDICION: [string, string][] = [
  ['Modalidad', 'En línea, sesiones en vivo por Google Meet'],
  ['Horario', 'Lunes a viernes · 19:00 a 21:00 h (hora Ciudad de México)'],
  ['Duración', '5 sesiones · 2 horas cada una · Total: 10 horas'],
  ['Fechas', 'Inicio el 27 de julio o 31 de julio de 2026'],
  ['Inversión', '$2,000 MXN por persona'],
  ['Pago', 'Transferencia bancaria · Se envían datos al confirmar registro'],
  ['Constancia', 'Se otorga constancia de participación al asistir al 80% de las sesiones (4 de 5)'],
  ['Grupo', 'Cupo limitado para garantizar atención personalizada'],
]

export default function CursoProfesionistas() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-200">
      <SEO
        title="Inteligencia Artificial para Profesionistas — Curso Práctico 10h | Exponential Grow AI"
        description="Curso práctico de IA para profesionistas sin conocimientos técnicos. 5 sesiones en vivo, herramientas gratuitas, prompt engineering y uso responsable. Inicia 27 o 31 de julio 2026."
        canonicalPath="/curso-profesionistas"
      />
      <Navbar />

      <main className="flex flex-col items-center w-full pt-24">
        {/* ===== HERO ===== */}
        <section className="w-full px-4 py-16 md:py-24 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-border-dark w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                Curso Práctico · 10 horas
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white mb-4">
              Inteligencia Artificial{' '}
              <span className="text-primary">para Profesionistas</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed">
              Curso práctico de 10 horas · Sin conocimientos técnicos requeridos
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              La inteligencia artificial ya está transformando la forma en que trabajamos, y no hace falta ser programador para aprovecharla. Este curso está diseñado para profesionistas en activo que quieren entender qué es realmente la IA, cómo funciona y, sobre todo, cómo usarla hoy mismo en su trabajo diario.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              En 5 sesiones aprenderás a usar las herramientas de IA más útiles del momento —todas gratuitas— con ejemplos reales y práctica desde la primera sesión.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full h-14 px-10 bg-primary text-white text-lg font-bold hover:bg-primary-dark transition-all shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:scale-105"
              >
                <span className="material-symbols-outlined">edit_calendar</span>
                Quiero inscribirme
              </button>
            </div>
          </div>
        </section>

        {/* ===== OBJETIVOS ===== */}
        <section className="w-full px-4 py-16 md:py-20 bg-slate-900 dark:bg-slate-950">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Objetivos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Comprender qué es la inteligencia artificial y cómo funciona, sin tecnicismos innecesarios.',
                'Conocer el ecosistema actual de herramientas de IA y saber cuál usar para cada tarea.',
                'Aprender a formular instrucciones efectivas (prompts) para obtener resultados profesionales.',
                'Aplicar la IA a tareas concretas: redacción, análisis de documentos, diseño y organización.',
                'Desarrollar criterio crítico para verificar, cuestionar y usar la IA de forma responsable.',
                'Construir un plan personal de adopción para los 30 días siguientes al curso.',
              ].map((obj, i) => (
                <div key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-surface-dark border border-border-dark">
                  <span className="material-symbols-outlined text-primary flex-shrink-0 text-2xl" aria-hidden>
                    target
                  </span>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ¿A QUIÉN VA DIRIGIDO? ===== */}
        <section className="w-full px-4 py-16 md:py-20 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            ¿A quién va dirigido?
          </h2>
          <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto">
            A cualquier profesionista en activo que quiera incorporar la IA a su trabajo, sin importar su área o generación. No se requieren conocimientos de programación ni experiencia previa con herramientas de IA.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Administración',
              'Diseño Gráfico',
              'Área Comercial',
              'Recursos Humanos',
              'Finanzas',
              'Comunicación',
              'Atención a Clientes',
              'Cualquier rol con información y documentos',
            ].map((perfil, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-surface-dark border border-border-dark text-slate-300 text-sm font-medium"
              >
                {perfil}
              </span>
            ))}
          </div>
        </section>

        {/* ===== ALCANCES ===== */}
        <section className="w-full px-4 py-16 md:py-20 bg-slate-100 dark:bg-[#0d1210]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Alcances del curso
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Fundamentos conceptuales de la IA explicados con analogías cotidianas',
                'Uso práctico de herramientas gratuitas desde la primera sesión',
                'Técnicas de prompt engineering aplicadas a casos de trabajo reales',
                'Manejo responsable: privacidad, alucinaciones, límites y ética del uso',
                'Materiales de apoyo descargables por módulo',
                'Constancia de participación al completar el 80% de las sesiones',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark">
                  <span className="material-symbols-outlined text-primary flex-shrink-0 text-xl" aria-hidden>
                    check_circle
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== REQUISITOS ===== */}
        <section className="w-full px-4 py-16 md:py-20 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Requisitos
          </h2>
          <div className="space-y-4">
            {[
              { icon: 'laptop', text: 'Computadora o laptop con conexión a internet estable' },
              { icon: 'mail', text: 'Cuenta de Google (Gmail) — gratuita' },
              { icon: 'chat', text: 'Registro previo en ChatGPT (chat.openai.com) — gratuito, sin pago' },
              { icon: 'psychology', text: 'Disposición para experimentar, equivocarse y aprender en equipo' },
            ].map((req, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-surface-dark border border-border-dark">
                <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0" aria-hidden>
                  {req.icon}
                </span>
                <p className="text-slate-300 text-base">{req.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PROGRAMA ===== */}
        <section className="w-full px-4 py-16 md:py-20 bg-slate-100 dark:bg-[#0d1210]" id="programa">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white text-center mb-4">
              Programa
            </h2>
            <p className="text-center text-slate-500 dark:text-slate-400 mb-12">
              5 módulos · 10 horas totales
            </p>

            <div className="space-y-6">
              {MODULOS.map((mod) => (
                <div
                  key={mod.num}
                  className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-border-dark overflow-hidden shadow-lg"
                >
                  <div className="p-6 md:p-8 border-b border-gray-200 dark:border-border-dark bg-gradient-to-r from-primary/5 to-transparent dark:from-primary/10">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-sm">
                        {mod.num}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-background-dark text-xs font-bold text-slate-700 dark:text-slate-300">
                        2 horas
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-3">
                      Módulo {mod.num} — {mod.titulo}
                    </h3>
                  </div>
                  <ul className="p-6 md:p-8 space-y-3">
                    {mod.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary flex-shrink-0 text-lg" aria-hidden>
                          arrow_forward_ios
                        </span>
                        <span className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== HERRAMIENTAS ===== */}
        <section className="w-full px-4 py-16 md:py-20 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Herramientas que usaremos
          </h2>
          <p className="text-center text-slate-400 mb-10">
            Todas gratuitas, sin necesidad de tarjeta de crédito
          </p>
          <div className="overflow-hidden rounded-2xl border border-border-dark">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-dark border-b border-border-dark">
                  <th className="px-6 py-4 text-white font-bold text-sm uppercase tracking-wider">Herramienta</th>
                  <th className="px-6 py-4 text-white font-bold text-sm uppercase tracking-wider">Para qué la usamos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-dark">
                {HERRAMIENTAS.map((h, i) => (
                  <tr key={i} className="bg-background-dark hover:bg-surface-dark/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">{h.nombre}</td>
                    <td className="px-6 py-4 text-slate-400">{h.uso}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== DETALLES DE LA EDICIÓN ===== */}
        <section className="w-full px-4 py-16 md:py-20 bg-slate-100 dark:bg-[#0d1210]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Detalles de la edición
            </h2>
            <div className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-border-dark overflow-hidden shadow-lg">
              <dl className="divide-y divide-gray-200 dark:divide-border-dark">
                {DETALLES_EDICION.map(([label, value], i) => (
                  <div key={i} className="px-6 py-5 grid grid-cols-[140px_1fr] gap-4">
                    <dt className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {label}
                    </dt>
                    <dd className="text-sm md:text-base text-slate-900 dark:text-white">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ===== CÓMO INSCRIBIRSE + CTA ===== */}
        <section className="w-full px-4 py-20 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            ¿Cómo me inscribo?
          </h2>
          <ol className="text-left max-w-lg mx-auto space-y-4 mb-10">
            {[
              'Escríbenos para confirmar tu lugar y la fecha de inicio de tu preferencia.',
              'Recibirás los datos para realizar la transferencia.',
              'Al confirmar tu pago, recibirás el enlace de Google Meet y los materiales de bienvenida.',
            ].map((paso, i) => (
              <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-surface-dark border border-border-dark">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm flex-shrink-0">
                  {i + 1}
                </span>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">{paso}</p>
              </li>
            ))}
          </ol>

          <button
            onClick={() => setIsContactModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-full h-14 px-10 bg-primary text-white text-lg font-bold hover:bg-primary-dark transition-all shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:scale-105"
          >
            <span className="material-symbols-outlined">edit_calendar</span>
            Quiero inscribirme
          </button>
        </section>
      </main>

      <Footer />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  )
}