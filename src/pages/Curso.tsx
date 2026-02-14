import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactModal from '../components/ContactModal'

const SESSIONES = [
  {
    num: 1,
    titulo: 'Meta-prompting - Prompts que crean prompts',
    duracion: '2h',
    items: [
      { tiempo: '15 min', texto: 'Repaso express: Zero-shot, few-shot, chain-of-thought, role-playing' },
      { tiempo: '45 min', texto: 'Técnica central: Cómo hacer que el LLM diseñe la petición óptima por ti' },
      { tiempo: '30 min', texto: 'Plantillas listas para usar: Frameworks para análisis, creatividad y resolución de problemas' },
      { tiempo: '30 min', texto: 'Práctica: Genera tus propios meta-prompts' },
    ],
  },
  {
    num: 2,
    titulo: 'Comparativa de plataformas - ¿Cuál usar y cuándo?',
    duracion: '2h',
    items: [
      { tiempo: '30 min', texto: 'Tour rápido: OpenAI, Gemini, Claude, Perplexity, Llama - fortalezas de cada uno' },
      { tiempo: '30 min', texto: 'LMArena en vivo: Pruebas A/B ciegas para descubrir diferencias reales' },
      { tiempo: '1h', texto: 'Ejercicio práctico: Mismo prompt en 3 plataformas, compara y elige ganador' },
    ],
  },
  {
    num: 3,
    titulo: 'Domina el ecosistema Gemini',
    duracion: '2h',
    items: [
      { tiempo: '30 min', texto: 'Mapa completo: Chat, AI Studio, integración con Google Workspace' },
      { tiempo: '30 min', texto: 'Modelos y casos de uso: Flash vs. Pro - cuándo usar cada uno' },
      { tiempo: '1h', texto: 'Manos a la obra: Procesa documentos de Drive, aprovecha la ventana de contexto extensa' },
    ],
  },
  {
    num: 4,
    titulo: 'NotebookLM - Tu centro de investigación',
    duracion: '2h',
    items: [
      { tiempo: '30 min', texto: 'Mini-proyecto de investigación: Carga de fuentes y exploración' },
      { tiempo: '1h', texto: 'Outputs poderosos: Genera podcast, resúmenes, FAQs y briefings personalizados' },
      { tiempo: '30 min', texto: 'Técnicas de interrogación: Preguntas que extraen insights ocultos de tus fuentes' },
    ],
  },
  {
    num: 5,
    titulo: 'Workflows multi-plataforma',
    duracion: '2h',
    items: [
      { tiempo: '30 min', texto: 'Metodología de 5 pasos: Ideación → Investigación → Ejecución → Visualización → Refinamiento' },
      { tiempo: '1h', texto: 'Caso práctico integrador: Crear contenido editorial, análisis competitivo o material educativo' },
      { tiempo: '30 min', texto: 'Cierre: Tips de gestión de assets y próximos pasos' },
    ],
  },
]

export default function Curso() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-200">
      <Navbar />

      <main className="flex flex-col items-center w-full pt-24">
        {/* Mensaje principal con imagen */}
        <section className="w-full px-4 py-12 md:py-16 max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white text-center mb-10 md:mb-14 leading-tight">
            Pasa del 20% al 99%: domina ChatGPT, Gemini, Claude y más...
          </h1>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="flex-1 min-w-0 space-y-8 text-center md:text-left order-2 md:order-1">
            <p className="flex items-start gap-3 justify-center md:justify-start text-lg md:text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
              <span className="material-symbols-outlined text-primary flex-shrink-0 text-2xl" aria-hidden>insights</span>
              Si ya usas ChatGPT pero sientes que solo aprovechas el 20% de su potencial...
            </p>
            <p className="flex items-start gap-3 justify-center md:justify-start text-lg md:text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
              <span className="material-symbols-outlined text-primary flex-shrink-0 text-2xl" aria-hidden>apps</span>
              Si has escuchado de Gemini, Claude, Perplexity pero no sabes cuándo usar cada uno...
            </p>
            <p className="flex items-start gap-3 justify-center md:justify-start text-lg md:text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
              <span className="material-symbols-outlined text-primary flex-shrink-0 text-2xl" aria-hidden>tune</span>
              Si tus prompts funcionan &quot;a veces&quot; pero no tienes un método consistente...
            </p>
            <p className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
              Este curso es para ti.
            </p>

            <div className="space-y-8">
            <div>
              <h2 className="flex items-center justify-center md:justify-start gap-2 text-xl font-bold text-slate-900 dark:text-white mb-4">
                <span className="material-symbols-outlined text-primary">target</span>
                Qué vas a lograr
              </h2>
              <ul className="space-y-3 text-slate-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">→</span>
                  <span>Crear prompts que funcionan a la primera (usando meta-prompting)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">→</span>
                  <span>Elegir la herramienta correcta para cada tarea (y por qué importa)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">→</span>
                  <span>Convertir investigación de 3 horas en 20 minutos con NotebookLM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">→</span>
                  <span>Combinar plataformas en workflows que multiplican resultados</span>
                </li>
              </ul>
            </div>

            <div className="bg-surface-dark/50 dark:bg-surface-dark/50 rounded-2xl p-6 md:p-8 border border-border-dark">
              <h2 className="flex items-center justify-center md:justify-start gap-2 text-xl font-bold text-slate-900 dark:text-white mb-4">
                <span className="material-symbols-outlined text-primary">menu_book</span>
                Programa (10 horas · 5 sesiones)
              </h2>
              <ol className="space-y-2 text-slate-600 dark:text-gray-300 text-center md:text-left">
                <li><strong className="text-slate-900 dark:text-white">Sesión 1:</strong> Prompts que crean prompts</li>
                <li><strong className="text-slate-900 dark:text-white">Sesión 2:</strong> ChatGPT vs Gemini vs Claude vs Perplexity</li>
                <li><strong className="text-slate-900 dark:text-white">Sesión 3:</strong> Domina el ecosistema Gemini</li>
                <li><strong className="text-slate-900 dark:text-white">Sesión 4:</strong> NotebookLM como centro de investigación</li>
                <li><strong className="text-slate-900 dark:text-white">Sesión 5:</strong> Workflows multi-plataforma</li>
              </ol>
            </div>

            <div>
              <h2 className="flex items-center justify-center md:justify-start gap-2 text-xl font-bold text-slate-900 dark:text-white mb-4">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                Incluye
              </h2>
              <ul className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-slate-600 dark:text-gray-300">
                <li className="px-4 py-2 rounded-full bg-surface-dark border border-border-dark">Ejercicios prácticos con casos reales</li>
                <li className="px-4 py-2 rounded-full bg-surface-dark border border-border-dark">Templates de prompts probados</li>
                <li className="px-4 py-2 rounded-full bg-surface-dark border border-border-dark">Proyecto integrador final</li>
                <li className="px-4 py-2 rounded-full bg-surface-dark border border-border-dark">Grupo de práctica post-curso</li>
              </ul>
            </div>
            </div>
          </div>
            <div className="flex-shrink-0 w-full md:w-2/5 lg:w-2/5 order-1 md:order-2">
              <img
                src="/hero_image_02.png"
                alt="Advanced Prompting Flow: integración de ChatGPT, Gemini, Claude, Perplexity, NotebookLM y workflows"
                className="w-full rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Hero / Inversión */}
        <section className="w-full px-4 py-12 md:py-20 max-w-5xl mx-auto text-center border-t border-gray-200 dark:border-border-dark">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-border-dark w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
              Nivel Intermedio
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-6">
            Curso <span className="text-primary">Prompt Engineering</span>
            <span className="text-xl md:text-2xl font-bold text-slate-600 dark:text-gray-300 mt-2 block">
              10 horas · 5 sesiones
            </span>
          </h2>

          {/* Características e inversión */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-dark border border-border-dark text-sm text-gray-300">
              <span className="material-symbols-outlined text-primary text-lg">target</span>
              100% práctico · Ejercicios con casos reales · Templates incluidos
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-dark border border-border-dark text-sm text-gray-300">
              <span className="material-symbols-outlined text-primary text-lg">calendar_today</span>
              2, 3, 6, 9 y 10 marzo
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-dark border border-border-dark text-sm text-gray-300">
              <span className="material-symbols-outlined text-primary text-lg">schedule</span>
              10 horas · 5 sesiones
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-dark border border-border-dark text-sm text-gray-300">
              <span className="material-symbols-outlined text-primary text-lg">computer</span>
              Online · Google Meet
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary font-bold text-sm">
              <span className="material-symbols-outlined text-lg">payments</span>
              Inversión: $1,700 MX · Cupos limitados
            </span>
          </div>

          <button
            onClick={() => setIsContactModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-full h-14 px-10 bg-primary text-white text-lg font-bold hover:bg-primary-dark transition-all shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:scale-105"
          >
            <span className="material-symbols-outlined">edit_calendar</span>
            Quiero inscribirme
          </button>
        </section>

        {/* Programa */}
        <section className="w-full px-4 py-12 md:py-20 bg-slate-100 dark:bg-[#0d1210]" id="programa">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white text-center mb-4">
              Programa
            </h2>
            <p className="text-center text-slate-600 dark:text-gray-400 mb-12 max-w-xl mx-auto">
              Nivel Intermedio · 10 horas totales
            </p>

            <div className="space-y-6">
              {SESSIONES.map((sesion) => (
                <div
                  key={sesion.num}
                  className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-border-dark overflow-hidden shadow-lg"
                >
                  <div className="p-6 md:p-8 border-b border-gray-200 dark:border-border-dark bg-gradient-to-r from-primary/5 to-transparent dark:from-primary/10">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-sm">
                        {sesion.num}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-background-dark text-xs font-bold text-slate-700 dark:text-gray-300">
                        {sesion.duracion}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-3">
                      Sesión {sesion.num}: {sesion.titulo}
                    </h3>
                  </div>
                  <ul className="p-6 md:p-8 space-y-4">
                    {sesion.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="flex-shrink-0 text-primary font-mono text-sm">
                          {item.tiempo}
                        </span>
                        <span className="text-slate-600 dark:text-gray-300 text-sm md:text-base">
                          {item.texto}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="w-full px-4 py-20 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
            Cupos limitados
          </h2>
          <p className="text-slate-600 dark:text-gray-400 mb-8">
            Reserva tu lugar escribiendo y te respondo con los detalles de pago e inscripción.
          </p>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-full h-14 px-10 bg-primary text-white text-lg font-bold hover:bg-primary-dark transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)]"
          >
            <span className="material-symbols-outlined">mail</span>
            Envíame un mensaje para inscribirme
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
