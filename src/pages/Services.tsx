import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-200">
      <Navbar />
      
      <main className="flex flex-col items-center w-full pt-24">
        {/* ===== HERO ===== */}
        <section className="w-full px-4 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-border-dark w-fit">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Soluciones Escalables
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                IA Generativa que{' '}
                <span className="text-primary">Escala tu Marketing</span>
                {' '}y tu Educación
              </h1>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-xl leading-relaxed">
                Transformamos la experimentación aislada con IA en sistemas rentables y repetibles que generan resultados tangibles. Ya no se trata de usar ChatGPT ocasionalmente y esperar resultados milagrosos.
              </p>
              <p className="text-lg text-slate-600 dark:text-gray-300 max-w-xl leading-relaxed">
                Nuestros servicios están diseñados para equipos profesionales de <strong>Marketing</strong> y <strong>Educación</strong> que buscan escalar su impacto sin aumentar proporcionalmente su carga de trabajo.
              </p>
              <p className="text-base text-slate-600 dark:text-gray-300 max-w-xl leading-relaxed mt-4">
                Cada proyecto que desarrollamos está fundamentado en metodologías probadas de Ingeniería de Prompts, diseño de sistemas de contenido y análisis de resultados. No vendemos herramientas ni promesas vacías: construimos procesos que tu equipo puede replicar, medir y optimizar de forma independiente. Desde workshops intensivos que transforman cómo tu equipo interactúa con modelos de IA, hasta implementaciones completas que automatizan flujos críticos de producción, cada solución está diseñada para generar retorno de inversión medible en menos de 6 meses.
              </p>
            </div>
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border-dark bg-surface-dark group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50"></div>
              <div
                className="w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage: "url('/servicios_01.png')",
                }}
              ></div>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-background-dark/90 backdrop-blur-md rounded-2xl border border-border-dark transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary">auto_graph</span>
                  <span className="font-bold text-white">Impacto Promedio</span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-3xl font-bold text-white">+40%</p>
                    <p className="text-xs text-text-secondary">Eficiencia Operativa</p>
                  </div>
                  <div className="h-8 w-px bg-border-dark"></div>
                  <div>
                    <p className="text-3xl font-bold text-white">3.5x</p>
                    <p className="text-xs text-text-secondary">ROI en 6 meses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SERVICE 1 — MARKETING (primero) ===== */}
        <section className="w-full px-4 py-20 bg-slate-100 dark:bg-[#111c0e]" id="service-1">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-4 max-w-2xl mb-12">
              <span className="text-primary font-bold tracking-wider text-sm uppercase">Servicio 01</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                IA Generativa para <span className="text-primary">Marketing</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-text-secondary">
                De contenido genérico a mensajes únicos de marca. Ayudamos a agencias y departamentos de marketing a construir "Cerebros de Marca" — modelos entrenados con tus mejores casos de éxito para que la IA escriba como tu mejor copywriter, no como un robot.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Main Marketing Service Card */}
              <div className="bg-white dark:bg-surface-dark rounded-[2rem] border border-gray-200 dark:border-border-dark overflow-hidden shadow-lg">
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-2xl">campaign</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">Brand Brain</h3>
                      <p className="text-sm text-slate-500 dark:text-text-secondary">Base de conocimiento centralizada</p>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">Automatización de contenido multicanal</p>
                        <p className="text-sm text-slate-600 dark:text-text-secondary">Emails, posts, guiones, landing pages — todo con tu voz de marca.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">Optimización de campañas con IA</p>
                        <p className="text-sm text-slate-600 dark:text-text-secondary">Segmentación, A/B testing y análisis predictivo para maximizar conversión.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">Embudos de venta automatizados</p>
                        <p className="text-sm text-slate-600 dark:text-text-secondary">Secuencias de emails y nurturing impulsados por IA que convierten leads.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">Análisis de tendencias y competencia</p>
                        <p className="text-sm text-slate-600 dark:text-text-secondary">Monitoreo inteligente de mercado con reportes generados por IA.</p>
                      </div>
                    </li>
                  </ul>
                  <Link
                    to="/contacto"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full h-12 px-8 bg-primary text-white font-bold hover:bg-primary-dark transition-colors"
                  >
                    Solicitar cotización
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
              {/* Mini Case Study: Marketing */}
              <div className="bg-surface-dark rounded-[2rem] border border-border-dark overflow-hidden shadow-lg relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined text-9xl text-white">campaign</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-between h-full relative z-10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 w-fit mb-6">
                      <span className="text-xs font-bold text-primary uppercase">Caso de Éxito</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Agencia de Contenido: 10x su producción
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-[#241f1f] border border-red-900/30 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2 text-red-400">
                          <span className="material-symbols-outlined text-sm">cancel</span>
                          <span className="text-xs font-bold uppercase">Antes</span>
                        </div>
                        <p className="text-gray-400 text-sm italic">
                          Una persona escribiendo 1 post por hora, sin consistencia de marca ni capacidad de escalar campañas.
                        </p>
                      </div>
                      <div className="flex justify-center -my-2">
                        <div className="bg-surface-dark rounded-full p-1 border border-border-dark">
                          <span className="material-symbols-outlined text-primary">keyboard_double_arrow_down</span>
                        </div>
                      </div>
                      <div className="bg-[#1a2c15] border border-primary/30 rounded-xl p-4 shadow-lg shadow-primary/5">
                        <div className="flex items-center gap-2 mb-2 text-primary">
                          <span className="material-symbols-outlined text-sm">check_circle</span>
                          <span className="text-xs font-bold uppercase">Después</span>
                        </div>
                        <p className="text-gray-300 text-sm italic">
                          Sistema de contenido automatizado: 10+ piezas por hora, brand voice consistente, campañas optimizadas por datos. El equipo se enfoca en estrategia, no en redacción mecánica.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-3xl font-bold text-primary">10x</p>
                        <p className="text-xs text-text-secondary">Producción de contenido</p>
                      </div>
                      <div className="h-10 w-px bg-border-dark"></div>
                      <div>
                        <p className="text-3xl font-bold text-primary">+45%</p>
                        <p className="text-xs text-text-secondary">Tasa de conversión</p>
                      </div>
                      <div className="h-10 w-px bg-border-dark"></div>
                      <div>
                        <p className="text-3xl font-bold text-primary">80%</p>
                        <p className="text-xs text-text-secondary">Menos tiempo operativo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SERVICE 2 — FORMACIÓN EN PROMPT ENGINEERING ===== */}
        <section className="w-full px-4 py-20 max-w-6xl mx-auto" id="service-2">
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-primary font-bold tracking-wider text-sm uppercase">Servicio 02</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Formación en <span className="text-primary">Prompt Engineering</span> de Alto Impacto
            </h2>
            <p className="text-lg text-slate-600 dark:text-text-secondary max-w-2xl">
              Dejá de obtener respuestas genéricas. Enseñamos a tu equipo a hablar el idioma de los modelos para obtener resultados precisos y alineados a tu marca.
            </p>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-[2rem] border border-gray-200 dark:border-border-dark overflow-hidden shadow-lg">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-between gap-8 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-border-dark">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-border-dark text-xs font-bold text-slate-700 dark:text-white">
                      Equipos de Marketing
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-border-dark text-xs font-bold text-slate-700 dark:text-white">
                      Equipos Creativos
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-border-dark text-xs font-bold text-slate-700 dark:text-white">
                      Docentes
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-border-dark text-xs font-bold text-slate-700 dark:text-white">
                      Copywriters
                    </span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">Reducción del 40%</p>
                        <p className="text-sm text-slate-600 dark:text-text-secondary">
                          En tiempo de producción operativa de textos y materiales.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">Metodología Probada</p>
                        <p className="text-sm text-slate-600 dark:text-text-secondary">
                          Framework basado en técnicas de Prompt Engineering avaladas por la industria.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">Capacitación Práctica</p>
                        <p className="text-sm text-slate-600 dark:text-text-secondary">
                          Ejercicios hands-on con casos reales de tu industria. Aplicación inmediata.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">Formatos Flexibles</p>
                        <p className="text-sm text-slate-600 dark:text-text-secondary">
                          Workshop presencial, Curso online o Training in-company adaptado a tus horarios.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">Materiales y Recursos</p>
                        <p className="text-sm text-slate-600 dark:text-text-secondary">
                          Biblioteca de templates, guías de referencia y acceso a comunidad de práctica.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/curso"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full h-12 px-8 bg-primary text-white font-bold hover:bg-primary-dark transition-colors mt-4"
                >
                  Ver temario del workshop
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
              {/* Mini Case Study: Prompt Engineering */}
              <div className="bg-[#111c0e] p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined text-9xl text-white">compare_arrows</span>
                </div>
                <h3 className="text-white text-lg font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span> Mini-Caso: Email de Ventas
                </h3>
                <div className="space-y-4 relative z-10">
                  {/* Before */}
                  <div className="bg-[#241f1f] border border-red-900/30 rounded-xl p-4 opacity-70">
                    <div className="flex items-center gap-2 mb-2 text-red-400">
                      <span className="material-symbols-outlined text-sm">cancel</span>
                      <span className="text-xs font-bold uppercase">Antes: Prompt Genérico</span>
                    </div>
                    <p className="text-gray-400 text-sm italic">"Escribe un email para vender nuestro curso."</p>
                    <div className="mt-2 text-xs text-gray-500 border-t border-white/10 pt-2">
                      Resultado: Texto vago, "spammy", sin conexión emocional.
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="flex justify-center -my-2 relative z-20">
                    <div className="bg-surface-dark rounded-full p-1 border border-border-dark">
                      <span className="material-symbols-outlined text-primary">keyboard_double_arrow_down</span>
                    </div>
                  </div>
                  {/* After */}
                  <div className="bg-[#1a2c15] border border-primary/30 rounded-xl p-4 shadow-lg shadow-primary/5">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      <span className="text-xs font-bold uppercase">Después: Ingeniería de Prompts</span>
                    </div>
                    <p className="text-gray-300 text-sm italic">
                      "Actúa como un copywriter profesional especializado en ventas por email. Antes de escribir, analiza a detalle el producto y el perfil del cliente objetivo. Utiliza el framework PAS (Problema-Agitación-Solución) para captar la atención desde la primera frase, profundiza en las frustraciones y necesidades del lector, y plantea la solución de forma concreta y persuasiva. Mantén un tono humano, cercano y evita lenguaje genérico; emplea ejemplos y llamados a la acción claros. El objetivo es lograr un mensaje que convierta leads en clientes, inspire confianza e impulse el deseo de saber más. No imites tono 'spam'; prioriza la relevancia y la empatía en cada párrafo. Si hay datos o testimonios disponibles, intégralos en la narrativa."
                    </p>
                    <div className="mt-2 text-xs text-text-secondary border-t border-primary/20 pt-2 font-medium">
                      Resultado: Alta conversión, tono de marca preciso.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SERVICE 3 — EDUCACIÓN ===== */}
        <section className="w-full px-4 py-20 bg-slate-100 dark:bg-[#111c0e]" id="service-3">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-4 max-w-2xl mb-12">
              <span className="text-primary font-bold tracking-wider text-sm uppercase">Servicio 03</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                IA Generativa para <span className="text-primary">Educación</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-text-secondary">
                Transformamos la carga académico-administrativa que genera la docencia universitaria en tiempo de calidad con el alumno. De la experimentación personal a procesos institucionales repetibles.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Feature Card */}
              <div className="bg-white dark:bg-surface-dark rounded-3xl p-8 border border-gray-200 dark:border-border-dark hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <span className="material-symbols-outlined">menu_book</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Diseño Curricular Asistido por IA
                </h3>
                <p className="text-slate-600 dark:text-text-secondary mb-6">
                  Su personal académico, una vez capacitado en nuestros talleres, podrá:
                  <ul className="list-disc ml-6 mt-1 space-y-1">
                    <li>Generar rúbricas y criterios de evaluación precisos en minutos.</li>
                    <li>Diseñar programas académicos alineados con objetivos institucionales.</li>
                    <li>Crear materiales de evaluación adaptados al perfil de sus alumnos.</li>
                    <li>Automatizar la elaboración de exámenes y cuestionarios personalizados.</li>
                    <li>Optimizar la carga administrativa para dedicar más tiempo al acompañamiento del alumnado.</li>
                    <li>Actualizar y adaptar contenidos para mantener la relevancia académica.</li>
                  </ul>
                </p>
                <div className="bg-background-light dark:bg-background-dark rounded-xl p-4 border border-gray-200 dark:border-border-dark">
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-slate-500 dark:text-gray-400">Creación manual de programa académico</span>
                    <span className="line-through text-red-400 font-medium">4 horas</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 mb-4">
                    <div className="bg-red-400 h-2 rounded-full w-3/4"></div>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-slate-900 dark:text-white font-bold">Asistida por IA</span>
                    <span className="text-primary font-bold">15 min</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[10%]"></div>
                  </div>
                </div>
              </div>
              {/* Case Study: Education */}
              <div className="relative bg-surface-dark rounded-3xl overflow-hidden min-h-[400px] border border-border-dark group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNLuUN6LQ3Yjg0u3uH6VGjGk-Vr7jwY45GCGu3fzFkGWi5QVjQSOGWPpjZuXTl20QkkFJuA3KQlmtp7gjHDc_1q7Rgt5vwd0gai-NlykZTEv-4kBk9uWRs79YAWvk4G-I-erUHDqrxJLU0OOhCzNKdezbhOpbQM0Z7dQRQ5drYol8UdMst5yE8bG84ZQ_vHghKtI8zI32hqkyrUET-twdIgkEYjZfr_r9gdYqxptFpamVORRJVVUaqSuRy6nmaXQeG0TwBr0AedA3E')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-background-dark/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                <div className="absolute bottom-0 p-8 flex flex-col gap-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 w-fit">
                    <span className="text-xs font-bold text-primary">Caso de Éxito</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    Implementación en el Bachillerato de la UNAM
                  </h3>
                  <p className="text-gray-300 text-sm">
                    En 2024 y 2025 capacitamos a 40 profesores de la Escuela Nacional Preparatoria y del Colegio de Ciencias y Humanidades por medio de un curso llamado «Uso de la Inteligencia Artificial Generativa en la Enseñanza de la Química», con resultados óptimos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section className="w-full px-4 py-24 bg-background-light dark:bg-background-dark">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              ¿Listo para escalar?
            </h2>
            <p className="text-lg text-slate-600 dark:text-text-secondary max-w-2xl">
              No dejes que tu competencia te gane en la carrera de la IA. Empezá hoy a transformar tu operación con resultados tangibles.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}