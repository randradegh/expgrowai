import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import HermesCourseContactModal from '../components/HermesCourseContactModal'

const SESIONES = [
  {
    numero: 1,
    titulo: 'Del chat al agente: entender e instalar Hermes',
    meta: 'Tener Hermes instalado, con un modelo conectado y una primera tarea resuelta.',
    temas: [
      'Chatbot, modelo y harness: qué aporta un agente con herramientas, memoria, skills, canales y tareas programadas.',
      'Hermes frente a OpenClaw, Claude Code y Codex.',
      'Demo en vivo: un agente investiga, escribe un archivo y recuerda una preferencia.',
      'Instalación guiada de Hermes Desktop y conexión de un modelo; diagnóstico básico de problemas.',
      'Primera práctica: crear una plantilla de briefing diario y pedir contexto antes de redactarla.',
    ],
  },
  {
    numero: 2,
    titulo: 'Que te conozca y te siga a todas partes',
    meta: 'Usar Hermes desde Telegram y configurar un perfil que aproveche lo que sabe de ti.',
    temas: [
      'Crear y conectar un bot de Telegram; organizar conversaciones con tópicos por área.',
      'Configurar personalidad y memoria: soul.md, user.md y memory.md.',
      'Entender por qué los agentes pueden “olvidar” y qué vale la pena guardar.',
      'Organizar conocimiento propio en una wiki de Markdown y conocer alternativas de memoria externa.',
      'Delegar una tarea desde el teléfono y comprobar cómo usa el contexto configurado.',
    ],
  },
  {
    numero: 3,
    titulo: 'Que trabaje sin ti: skills, herramientas y tareas programadas',
    meta: 'Crear una skill propia, conectar una herramienta con permisos mínimos y programar un trabajo útil.',
    temas: [
      'Convertir una tarea repetitiva en una skill y conocer el ciclo de mejora de Hermes.',
      'Conectar herramientas como archivos, web, correo o calendario con permisos de solo lectura para la práctica.',
      'Seguridad práctica: acceso mínimo, aprobación humana para acciones irreversibles e instrucciones ocultas.',
      'Diseñar un briefing matutino programado que priorice decisiones y evite avisos sin novedades.',
    ],
  },
  {
    numero: 4,
    titulo: 'De un agente a un equipo: subagentes, perfiles y costos',
    meta: 'Diseñar un pequeño equipo de agentes y salir con un plan de crecimiento de 30 días.',
    temas: [
      'Coordinar subagentes y perfiles especializados para investigar, redactar y orquestar tareas.',
      'Verificar el trabajo de cada agente y decidir qué modelo conviene según costo y dificultad.',
      'Diseñar roles, modelos, herramientas y permisos para un caso propio; crear el primer perfil.',
      'Conocer opciones para ejecutar varias instancias aisladas y errores comunes de principiantes.',
      'Cerrar con un plan personal de 30 días y recursos para continuar aprendiendo.',
    ],
  },
]

const RESULTADOS = [
  { icono: 'smart_toy', titulo: 'Tu agente instalado', texto: 'Hermes configurado en tu computadora y conectado a un modelo.' },
  { icono: 'send_to_mobile', titulo: 'Acceso desde Telegram', texto: 'Habla con tu agente desde el teléfono y separa temas con tópicos.' },
  { icono: 'psychology', titulo: 'Personalidad y memoria', texto: 'Una base para que Hermes entienda cómo trabajas y qué contexto conservar.' },
  { icono: 'auto_awesome', titulo: 'Una skill propia', texto: 'Una tarea repetitiva convertida en una capacidad reutilizable.' },
  { icono: 'schedule', titulo: 'Un trabajo programado', texto: 'Un cron pensado para entregar información útil, no ruido.' },
  { icono: 'groups', titulo: 'Plan para crecer', texto: 'Un diseño inicial de equipo de agentes y próximos pasos para 30 días.' },
]

const REQUISITOS = [
  'Computadora propia (Mac, Windows o Linux) con permisos para instalar software; dos pantallas o una pantalla grande ayudan para seguir Meet y practicar.',
  'Acceso a un proveedor de modelos. OpenRouter es la opción recomendada en el programa; también se explican alternativas como suscripción de ChatGPT/Codex o Nous Portal.',
  'Cuenta de Telegram disponible en el teléfono para practicar la conexión con el agente.',
  'Para la sesión de herramientas, una cuenta de correo o calendario de prueba, no la cuenta principal.',
]

export default function CursoHermesAgent() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-200">
      <SEO
        title="Hermes Agent para Principiantes — Curso práctico en vivo | Exponential Grow AI"
        description="Pasa de usar IA en el chat a operar tu propio agente Hermes. Curso en vivo de 4 sesiones con práctica guiada, Telegram, memoria, skills, automatización y seguridad."
        canonicalPath="/curso-hermes-agent"
      />
      <Navbar />

      <main className="flex flex-col items-center w-full pt-24">
        <section className="w-full px-4 py-12 md:py-20 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-10 lg:gap-14">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-border-dark mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">Del 30 de noviembre al 3 de diciembre de 2026</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-[1.08] tracking-tight text-white mb-6">
                Hermes Agent <span className="text-primary">para Principiantes</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-5">
                Pasa de usar la IA en una ventana de chat a tener tu propio agente, conectado a tu teléfono y preparado para hacer trabajo útil contigo.
              </p>
              <p className="text-base md:text-lg text-slate-400 mb-9">
                Aprende paso a paso, con demostraciones y práctica en tu computadora. No necesitas saber programar ni haber instalado un agente antes.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-9">
                {[
                  ['videocam', 'Vía Google Meet'],
                  ['schedule', '19:00–21:00 h'],
                  ['event', '4 sesiones · 2 horas cada una'],
                  ['terminal', 'Principiantes, sin experiencia técnica previa'],
                ].map(([icono, texto]) => (
                  <span key={texto} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-dark border border-border-dark text-slate-300 text-sm">
                    <span className="material-symbols-outlined text-primary text-lg" aria-hidden>{icono}</span>{texto}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full h-14 px-8 bg-primary text-white font-bold hover:bg-primary-dark transition-all shadow-[0_0_25px_rgba(99,102,241,0.35)]"
                >
                  <span className="material-symbols-outlined">mail</span>
                  Solicitar información
                </button>
                <a href="#programa" className="inline-flex items-center justify-center gap-2 rounded-full h-14 px-8 border border-white/20 text-white font-bold hover:bg-white/10 transition-all">
                  Ver el programa <span className="material-symbols-outlined">arrow_downward</span>
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-4 rounded-[2rem] bg-primary/20 blur-2xl" aria-hidden="true" />
              <img
                src="/hermes/hermes-agent-marketing_v1_mensajera.png"
                alt="Ilustración de una mensajera junto a una esfera luminosa, símbolo de un agente conectado y listo para ayudar"
                className="relative mx-auto max-h-[680px] w-full rounded-3xl object-contain shadow-2xl"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>


        <section className="w-full py-16 md:py-20 bg-slate-900 dark:bg-slate-950">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">El resultado</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Termina con algo funcionando, no solo con apuntes</h2>
              <p className="text-slate-400">Cada sesión combina una idea, una demostración y práctica guiada para dejar una parte de tu agente instalada o configurada.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {RESULTADOS.map((resultado) => (
                <article key={resultado.titulo} className="p-6 rounded-2xl bg-surface-dark border border-border-dark">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4" aria-hidden>{resultado.icono}</span>
                  <h3 className="text-white font-bold mb-2">{resultado.titulo}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{resultado.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full px-4 py-16 md:py-20 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">Primero, entenderlo</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-5">No es otro chatbot</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Hermes Agent es un agente de código abierto creado por Nous Research. Un modelo de lenguaje genera respuestas; Hermes le da herramientas, memoria persistente, skills, tareas programadas y canales para trabajar contigo.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Piensa en el modelo como el motor y en Hermes como el resto del automóvil. En el curso aprenderás qué hace cada parte y cómo configurarla con criterio, en lugar de tratar al agente como una caja negra.
              </p>
            </div>
            <div className="p-7 md:p-9 rounded-3xl bg-gradient-to-br from-primary/20 to-surface-dark border border-primary/20">
              <span className="material-symbols-outlined text-primary text-4xl mb-5" aria-hidden>shield_lock</span>
              <h3 className="text-2xl font-bold text-white mb-4">La seguridad empieza el primer día</h3>
              <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-lg">check_circle</span><span>Dar a cada herramienta solo los permisos que necesita.</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-lg">check_circle</span><span>Pedir aprobación humana antes de acciones irreversibles.</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-lg">check_circle</span><span>Reconocer instrucciones maliciosas u ocultas en correos y páginas web.</span></li>
                <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-lg">check_circle</span><span>Conectar cuentas de prueba y comenzar con acceso de solo lectura.</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section id="programa" className="w-full px-4 py-16 md:py-24 bg-slate-100 dark:bg-[#0d1210] scroll-mt-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">El recorrido</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Cuatro sesiones, de tu primer agente a un equipo</h2>
              <p className="text-slate-500 dark:text-slate-400">Del 30 de noviembre al 3 de diciembre de 2026 · 19:00–21:00 h · Vía Google Meet · Demostraciones en vivo y práctica guiada</p>
            </div>
            <div className="space-y-5">
              {SESIONES.map((sesion) => (
                <article key={sesion.numero} className="bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-border-dark overflow-hidden shadow-lg">
                  <div className="p-6 md:p-7 border-b border-gray-200 dark:border-border-dark bg-gradient-to-r from-primary/10 to-transparent">
                    <div className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary text-white font-black shrink-0">{sesion.numero}</span>
                      <div>
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Sesión {sesion.numero} · 2 horas</p>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{sesion.titulo}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">{sesion.meta}</p>
                      </div>
                    </div>
                  </div>
                  <ul className="p-6 md:p-7 grid md:grid-cols-2 gap-x-8 gap-y-3">
                    {sesion.temas.map((tema) => (
                      <li key={tema} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0" aria-hidden>arrow_forward</span>{tema}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="datos-curso" className="w-full px-4 py-14 max-w-6xl mx-auto">
          <div className="rounded-3xl bg-surface-dark border border-border-dark p-6 md:p-8">
            <div className="mb-6">
              <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Próxima edición</p>
              <h2 id="datos-curso" className="text-2xl md:text-3xl font-black text-white">Información completa del curso</h2>
            </div>
            <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                ['calendar_month', 'Fechas', '30 de noviembre al 3 de diciembre de 2026'],
                ['schedule', 'Horario', '19:00–21:00 h'],
                ['videocam', 'Modalidad', 'En vivo vía Google Meet'],
                ['event', 'Duración', '4 sesiones de 2 horas · 8 horas en total'],
              ].map(([icono, etiqueta, valor]) => (
                <div key={etiqueta} className="rounded-2xl bg-background-dark/70 border border-white/5 p-5">
                  <dt className="flex items-center gap-2 text-sm font-semibold text-slate-400 mb-3">
                    <span className="material-symbols-outlined text-primary" aria-hidden>{icono}</span>{etiqueta}
                  </dt>
                  <dd className="text-white font-bold leading-relaxed">{valor}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="w-full py-16 md:py-20 bg-slate-900 dark:bg-slate-950">
          <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">Para empezar</p>
              <h2 className="text-3xl font-black text-white mb-5">¿Es para ti?</h2>
              <p className="text-slate-400 leading-relaxed mb-6">Está pensado para personas que ya usan ChatGPT, Claude o Gemini en el chat, sienten curiosidad por los agentes, pero todavía no se han animado a instalar uno.</p>
              <div className="p-5 rounded-2xl bg-surface-dark border border-border-dark">
                <p className="text-white font-bold mb-2">No necesitas saber programar</p>
                <p className="text-slate-400 text-sm leading-relaxed">La parte técnica se explica paso a paso y habrá un plan alternativo para que una dificultad de instalación no te deje fuera de la práctica.</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-5">Lo que necesitas tener a mano</h3>
              <ul className="space-y-4">
                {REQUISITOS.map((requisito, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <span className="material-symbols-outlined text-primary text-xl shrink-0">check_circle</span>{requisito}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full px-4 py-16 md:py-24 max-w-4xl mx-auto text-center">
          <span className="material-symbols-outlined text-primary text-5xl mb-4" aria-hidden>rocket_launch</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Empieza a construir tu propio agente</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">Escríbenos para recibir información actualizada sobre fechas, inversión y preparación para la primera sesión.</p>
          <button
            onClick={() => setIsContactOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-full h-14 px-8 bg-primary text-white font-bold hover:bg-primary-dark transition-all shadow-[0_0_25px_rgba(99,102,241,0.35)]"
          >
            <span className="material-symbols-outlined">mail</span>
            Solicitar información del curso
          </button>
        </section>
      </main>

      <Footer showContactCta={false} />
      <HermesCourseContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}
