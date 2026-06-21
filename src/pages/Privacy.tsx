import Navbar from '../components/Navbar'
import SEO from '../components/SEO'

export default function Privacy() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
      <SEO
        title="Aviso de Privacidad | Exponential Grow AI"
        description="Aviso de privacidad de Exponential Grow AI — Roberto Andrade Fonseca. Conoce cómo protegemos y tratamos tus datos personales conforme a la LFPDPPP."
        canonicalPath="/aviso-de-privacidad"
      />
      <div className="relative flex min-h-screen w-full flex-col">
        <Navbar />
        
        <main className="flex-1 pt-24">
          <section className="py-16 md:py-24">
            <div className="px-4 md:px-10 lg:px-40 flex justify-center">
              <div className="max-w-[800px] w-full">
                {/* Header */}
                <div className="mb-12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-border-dark w-fit mb-6">
                    <span className="text-xs font-medium text-primary tracking-wide uppercase">
                      Legal
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4">
                    Aviso de Privacidad
                  </h1>
                  <p className="text-gray-400 text-base">
                    Última actualización: 21 de junio de 2026
                  </p>
                </div>

                <div className="prose prose-invert max-w-none space-y-8 text-gray-300 text-base leading-relaxed">
                  {/* Quiénes somos */}
                  <section>
                    <h2 className="text-white text-xl font-bold mb-3">1. Identidad y domicilio del responsable</h2>
                    <p>
                      <strong>Exponential Grow AI</strong> es una consultoría de inteligencia artificial generativa para 
                      marketing y educación, operada por <strong>Roberto Andrade Fonseca</strong> (en adelante, 
                      "el Responsable"), con domicilio en la Ciudad de México, México.
                    </p>
                    <p className="mt-3">
                      Para efectos del presente aviso de privacidad, el Responsable se compromete a tratar sus datos 
                      personales en cumplimiento con lo dispuesto por la <strong>Ley Federal de Protección de Datos 
                      Personales en Posesión de los Particulares</strong> (LFPDPPP) y su Reglamento.
                    </p>
                    <p className="mt-3">
                      Contacto: <a href="mailto:randradedev@gmail.com" className="text-primary hover:text-primary-light transition-colors">randradedev@gmail.com</a> | Tel: 55 25765962
                    </p>
                  </section>

                  {/* Datos recopilados */}
                  <section>
                    <h2 className="text-white text-xl font-bold mb-3">2. Datos personales que recabamos</h2>
                    <p>Podemos recabar los siguientes datos personales a través de los formularios de contacto, correo electrónico o llamadas telefónicas:</p>
                    <ul className="list-disc pl-6 mt-3 space-y-2">
                      <li>Nombre completo</li>
                      <li>Correo electrónico</li>
                      <li>Número de teléfono</li>
                      <li>Nombre de la empresa o institución</li>
                      <li>Cargo o puesto</li>
                      <li>Información de contacto proporcionada voluntariamente en comunicaciones directas</li>
                    </ul>
                    <p className="mt-3">
                      No recabamos ni tratamos datos personales sensibles (aquellos que revelen origen racial o étnico, 
                      estado de salud presente o futuro, información genética, creencias religiosas, filosóficas o morales, 
                      afiliación sindical, opiniones políticas o preferencia sexual).
                    </p>
                  </section>

                  {/* Finalidad */}
                  <section>
                    <h2 className="text-white text-xl font-bold mb-3">3. Finalidades del tratamiento de datos</h2>
                    <p className="font-bold text-white mb-2">Finalidades primarias (necesarias para la relación con usted):</p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li>Atender solicitudes de información sobre nuestros servicios de consultoría y capacitación.</li>
                      <li>Contactarle para dar seguimiento a sus consultas y cotizaciones.</li>
                      <li>Prestar los servicios contratados de consultoría, formación y asesoría en IA generativa.</li>
                      <li>Facturación y cumplimiento de obligaciones fiscales.</li>
                    </ul>
                    <p className="font-bold text-white mb-2">Finalidades secundarias (no necesarias, puede oponerse):</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Envío de información promocional sobre nuevos servicios, cursos o eventos.</li>
                      <li>Invitarle a participar en encuestas de satisfacción y mejora de servicios.</li>
                      <li>Generar estadísticas internas anonimizadas sobre el perfil de nuestros clientes.</li>
                    </ul>
                  </section>

                  {/* Transferencias */}
                  <section>
                    <h2 className="text-white text-xl font-bold mb-3">4. Transferencia de datos personales</h2>
                    <p>
                      No compartimos ni transferimos sus datos personales a terceros sin su consentimiento, salvo 
                      las excepciones previstas en el artículo 37 de la LFPDPPP (obligación legal, autoridades 
                      competentes, etc.).
                    </p>
                    <p className="mt-3">
                      Para la prestación de nuestros servicios, podemos compartir información con:
                    </p>
                    <ul className="list-disc pl-6 mt-3 space-y-2">
                      <li>Plataformas de pago y facturación electrónica (únicamente datos fiscales).</li>
                      <li>Servicios de correo electrónico y almacenamiento en la nube.</li>
                    </ul>
                    <p className="mt-3">
                      En estos casos, los terceros cuentan con medidas de seguridad y confidencialidad equivalentes 
                      a las nuestras.
                    </p>
                  </section>

                  {/* Derechos ARCO */}
                  <section>
                    <h2 className="text-white text-xl font-bold mb-3">5. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)</h2>
                    <p>
                      Usted o su representante legal pueden ejercer sus derechos ARCO en cualquier momento. Esto 
                      significa que puede:
                    </p>
                    <ul className="list-disc pl-6 mt-3 space-y-2">
                      <li><strong>Acceso:</strong> Conocer qué datos personales tenemos, para qué los usamos y las condiciones del tratamiento.</li>
                      <li><strong>Rectificación:</strong> Solicitar la corrección de sus datos si son inexactos o incompletos.</li>
                      <li><strong>Cancelación:</strong> Solicitar que eliminemos sus datos de nuestras bases.</li>
                      <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos para fines específicos.</li>
                    </ul>
                    <p className="mt-3">
                      Para ejercer sus derechos ARCO, envíe una solicitud por escrito a{' '}
                      <a href="mailto:randradedev@gmail.com" className="text-primary hover:text-primary-light transition-colors">randradedev@gmail.com</a>{' '}
                      indicando su nombre, los derechos que desea ejercer y una descripción clara de su solicitud. 
                      Le responderemos en un plazo máximo de 20 días hábiles.
                    </p>
                  </section>

                  {/* Limitación de uso */}
                  <section>
                    <h2 className="text-white text-xl font-bold mb-3">6. Limitación del uso y divulgación de datos</h2>
                    <p>
                      Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger sus datos 
                      personales contra daño, pérdida, alteración, destrucción o uso no autorizado. Entre ellas:
                    </p>
                    <ul className="list-disc pl-6 mt-3 space-y-2">
                      <li>Almacenamiento en plataformas con cifrado (SSL/TLS) y autenticación de dos factores.</li>
                      <li>Acceso restringido solo al personal que necesita la información para brindar el servicio.</li>
                      <li>Políticas internas de confidencialidad y tratamiento de datos.</li>
                    </ul>
                  </section>

                  {/* Cookies */}
                  <section>
                    <h2 className="text-white text-xl font-bold mb-3">7. Uso de cookies y tecnologías similares</h2>
                    <p>
                      Este sitio web puede utilizar cookies y tecnologías de rastreo para mejorar la experiencia de 
                      navegación y recopilar información estadística anónima sobre el uso del sitio. Las cookies 
                      utilizadas son exclusivamente técnicas y de análisis interno.
                    </p>
                    <p className="mt-3">
                      Usted puede deshabilitar el uso de cookies en la configuración de su navegador. Sin embargo, 
                      algunas funcionalidades del sitio podrían verse afectadas.
                    </p>
                  </section>

                  {/* Cambios */}
                  <section>
                    <h2 className="text-white text-xl font-bold mb-3">8. Modificaciones al aviso de privacidad</h2>
                    <p>
                      Nos reservamos el derecho de modificar o actualizar este aviso de privacidad en cualquier 
                      momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en 
                      esta página.
                    </p>
                    <p className="mt-3">
                      Le recomendamos revisar periódicamente esta página para mantenerse informado sobre cómo 
                      protegemos sus datos personales. Cuando se realicen cambios sustanciales, se lo notificaremos 
                      a través de un aviso visible en nuestro sitio web o por correo electrónico.
                    </p>
                  </section>

                  {/* Consentimiento */}
                  <section>
                    <h2 className="text-white text-xl font-bold mb-3">9. Consentimiento</h2>
                    <p>
                      Al proporcionarnos sus datos personales a través de cualquier medio (formulario de contacto, 
                      correo electrónico, llamada telefónica), usted acepta los términos del presente aviso de 
                      privacidad y otorga su consentimiento para el tratamiento de sus datos conforme a las 
                      finalidades descritas.
                    </p>
                    <p className="mt-3">
                      Si no está de acuerdo con este aviso de privacidad, por favor no proporcione sus datos 
                      personales y contacte con nosotros directamente para任何 aclaración.
                    </p>
                  </section>

                  {/* Autoridad */}
                  <section className="border-t border-border-dark pt-8 mt-8">
                    <h2 className="text-white text-xl font-bold mb-3">10. Autoridad competente</h2>
                    <p>
                      Si considera que su derecho a la protección de datos personales ha sido vulnerado, puede 
                      acudir al <strong>Instituto Nacional de Transparencia, Acceso a la Información y Protección 
                      de Datos Personales (INAI)</strong>:
                    </p>
                    <p className="mt-3 text-sm">
                      INAI — Insurgentes Sur No. 3211, Col. Insurgentes Cuicuilco, Alcaldía Coyoacán, C.P. 04530, 
                      Ciudad de México.<br />
                      Teléfono: 55 5002 2400<br />
                      Sitio web: <a href="https://www.inai.org.mx" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors">www.inai.org.mx</a>
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Simple footer with copyright */}
        <footer className="py-8 border-t border-border-dark bg-surface-dark/30">
          <div className="px-4 md:px-10 lg:px-40 flex justify-center">
            <p className="text-gray-600 text-xs text-center">
              © 2026 Exponential Grow AI — Roberto Andrade Fonseca. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
