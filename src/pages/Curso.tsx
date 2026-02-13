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
        {/* Hero */}
        <section className="w-full px-4 py-16 md:py-24 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-border-dark w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
              Nivel Intermedio
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-6">
            Curso <span className="text-primary">Prompt Engineering</span>
            <br />
            <span className="text-2xl md:text-3xl font-bold text-slate-600 dark:text-gray-300 mt-2 block">
              10 horas · 5 sesiones
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Meta-prompting, comparativa de plataformas, ecosistema Gemini, NotebookLM y workflows multi-plataforma. 100% práctico con ejercicios y plantillas listas para usar.
          </p>

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
