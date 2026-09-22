import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import DiagnosticoContactModal from '../components/DiagnosticoContactModal'

// Fechas del diagnóstico
const FECHAS = '28 de septiembre – 1 de octubre de 2026'
const HORARIO = '19:00 – 21:00 h (hora CDMX)'
const CUPO = 12

const SESIONES = [
  {
    numero: 1,
    titulo: 'De la libreta al mapa',
    objetivo: 'Contexto mínimo + tu inventario personal de tareas repetitivas.',
    entregable: 'Tu lista de 5 tareas repetitivas con horas estimadas por semana.',
    highlight: 'Regla del activo: documentar tu proceso es lo que te permite escalar, delegar o vender el negocio.',
    actividades: [
      'Bienvenida: cómo opera una PyME hoy y el dueño como cuello de botella',
      'Marco express: de la libreta → nube → agentes, sin tecnicismos',
      'Actividad individual: escribe las 5 tareas que repites más veces por semana',
      'Clasificación en vivo: categorizamos 4-5 ejemplos de la sala',
      'Regla del activo: documentar no es burocracia, es activo',
    ],
  },
  {
    numero: 2,
    titulo: 'Esto es real',
    objetivo: 'Demostrar con casos ajenos. Calibrar expectativas. Marcar candidatos en tu lista.',
    entregable: 'Tus tareas marcadas como 🟢, 🟡 o 🔴 tras ver 3 demos reales.',
    highlight: '3 demos en vivo: médico, comercio e industrial. Con reality check incluido.',
    actividades: [
      'Calibración: ¿esto lo puede hacer un agente? 4-5 situaciones reales, sí/no en vivo',
      'Demo 1 — Médico: WhatsApp → agenda → recordatorio → resumen pre-consulta',
      'Demo 2 — Comercio: inventario en tiempo real + reactivación de leads dormidos',
      'Demo 3 — Industrial: cotización automática, alertas de precio y mantenimiento preventivo',
      'Tu cruce: marcas en tu lista qué se parece a los 3 casos',
    ],
  },
  {
    numero: 3,
    titulo: 'Tu giro, tus datos',
    objetivo: 'Procesar TU caso real. Construir tu Mapa de Automatización.',
    entregable: 'Tu Mapa de Automatización (1 página): 🟢 listo, 🟡 clarificar, 🔴 no es candidato.',
    highlight: 'El mapa es tuyo: se lo llevas y lo usas con o sin nosotros.',
    actividades: [
      'Taller: de tu tarea a tu proceso en 3 pasos concretos',
      'Entregable 1: tu Mapa de Automatización en vivo, revisado en pantalla',
      'Simulación con el método del caso: 1 participante, 5 fases, solución en vivo',
      'Lectura de tu mapa: identifica tu 🟢 de mayor impacto',
    ],
  },
  {
    numero: 4,
    titulo: 'Del análisis al plan',
    objetivo: 'Convertir tu mapa en un plan concreto y tomar una decisión informada.',
    entregable: 'Tu Plan de Implementación (1 página): qué, cuándo, cuánto cuesta no hacerlo, y qué camino eliges.',
    highlight: 'Los $3,000 del diagnóstico se descuentan 100% contra la implementación si contratas esta semana.',
    actividades: [
      'Los 3 caminos: (A) tú mismo, (B) con acompañamiento, (C) no por ahora',
      'Entregable 2: arma tu Plan de Implementación con plantilla de 1 página',
      'Evidencia del camino B: flujo real de principio a fin, 20 min, sin código',
      'El plan en números: alcance exacto, semanas, entregables, comparativa de costos',
      'La decisión: descuento 100% del diagnóstico + garantía de 15 días',
    ],
  },
]

const PRINCIPIOS = [
  { icono: 'install_desktop', titulo: 'Cero instalación', texto: 'No descargas, no configuras, no tocas nada técnico.' },
  { icono: 'terminal', titulo: 'Cero terminal', texto: 'No verás ni una línea de código en las 4 sesiones.' },
  { icono: 'api', titulo: 'Cero APIs', texto: 'Nosotros gestionamos toda la parte técnica detrás.' },
  { icono: 'description', titulo: 'Entregables tuyos', texto: 'Mapa y plan se usan con o sin nosotros.' },
  { icono: 'visibility', titulo: 'Demo > teoría', texto: 'Cada sesión tiene demostraciones en vivo con casos reales.' },
  { icono: 'healing', titulo: 'Dolor > característica', texto: 'No te interesa cómo funciona la IA, te interesa qué problema resuelve.' },
]

const FAQS = [
  {
    q: '¿Necesito conocimientos técnicos?',
    a: 'No. No instalarás nada ni tocarás una terminal. Solo necesitas tu celular o computadora y curiosidad. Toda la parte técnica la gestiona ExpGrowAI.',
  },
  {
    q: 'Mi negocio no es médico, comercio ni industrial. ¿Aún me sirve?',
    a: 'Sí. Las tres demos usan las mismas 4 capacidades base: atención multicanal, agenda y seguimiento, consulta de datos en tiempo real, y monitoreo con alertas. Casi todo negocio de servicios o de caja las toca en su operación diaria.',
  },
  {
    q: '¿Me van a vender algo durante las sesiones?',
    a: 'No. Las 4 sesiones son trabajo puro sobre tu negocio. La decisión de contratar se toma al final de la Sesión 4, sobre tu propio plan ya construido. Sin presión.',
  },
  {
    q: '¿Se graban las sesiones?',
    a: 'Sí. Si no puedes conectarte en vivo a alguna sesión, te enviamos la grabación a tu correo.',
  },
  {
    q: '¿Y si decido no contratar la implementación?',
    a: 'Te llevas tu Mapa de Automatización y tu Plan de Implementación. Son tuyos y usables sin nosotros. La regla de oro: todo lo que aprendas debe valer la pena aunque nunca nos contrates.',
  },
  {
    q: '¿Cuánto cuesta la implementación si decido contratar?',
    a: '$12,000 MXN llave en mano (3 flujos + pruebas + hosting 1er mes). Con el descuento del diagnóstico: $9,000 si contratas la semana de la Sesión 4. Soporte mensual: $5,000/mes.',
  },
]

export default function DiagnosticoAutomatizacion() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null)

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-200">
      <SEO
        title="Diagnóstico de Automatización Agéntica — 4 sesiones para mapear tu PYME | Exponential Grow AI"
        description="4 sesiones en vivo donde procesamos TU negocio con el método del caso. Sales con tu Mapa de Automatización y tu Plan de Implementación. Sin código, sin instalación, sin compromiso."
        canonicalPath="/diagnostico-automatizacion"
      />
      <Navbar />

      <main className="flex flex-col items-center w-full pt-24">
        {/* ===== HERO ===== */}
        <section className="w-full px-4 py-16 md:py-24 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-border-dark w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
              En vivo · Cupo limitado a {CUPO} dueños de PYME
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white mb-6">
            Diagnóstico de{' '}
            <span className="text-primary">Automatización Agéntica</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-6">
            No es un curso de IA. Son <strong className="text-white">4 sesiones de trabajo en vivo</strong> donde
            procesamos TU negocio con el método del caso — y sales con dos entregables concretos:
            tu <strong className="text-white">Mapa de Automatización</strong> y tu{' '}
            <strong className="text-white">Plan de Implementación</strong>.
          </p>
          <p className="text-base text-slate-500 max-w-2xl mx-auto mb-10">
            Sin código, sin instalación, sin compromiso. Todo lo que aprendas debe valer la pena{' '}
            <em>aunque nunca nos contrates</em>.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-dark border border-border-dark text-slate-300 text-sm font-medium">
              <span className="material-symbols-outlined text-primary">calendar_today</span>
              {FECHAS}
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-dark border border-border-dark text-slate-300 text-sm font-medium">
              <span className="material-symbols-outlined text-primary">schedule</span>
              {HORARIO} · 4 sesiones × 2 h
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-dark border border-border-dark text-slate-300 text-sm font-medium">
              <span className="material-symbols-outlined text-primary">videocam</span>
              Google Meet
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-sm font-bold">
              <span className="material-symbols-outlined">payments</span>
              $3,000 MXN
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full h-14 px-10 bg-primary text-white text-lg font-bold hover:bg-primary-dark transition-all shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:scale-105"
            >
              <span className="material-symbols-outlined">edit_calendar</span>
              Reservar mi lugar
            </button>
            <a
              href="#sesiones"
              className="inline-flex items-center justify-center gap-2 rounded-full h-14 px-8 border border-white/20 text-white font-bold hover:bg-white/10 transition-all"
            >
              <span className="material-symbols-outlined">schedule</span>
              Ver las 4 sesiones
            </a>
          </div>
        </section>

        {/* ===== NO ES UN CURSO ===== */}
        <section className="w-full py-16 md:py-20 bg-slate-900 dark:bg-slate-950">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              ¿Qué es esto (y por qué ya no lo llamamos "curso")?
            </h2>
            <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
              Un curso te enseña a usar una herramienta. Este diagnóstico trabaja en tu negocio y te entrega
              dos activos que puedes usar con o sin nosotros.
            </p>

            {/* Tabla comparativa clara */}
            <div className="rounded-2xl border border-border-dark overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-2 bg-surface-dark/80">
                <div className="p-4 md:p-5 border-r border-border-dark">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Un curso típico</span>
                </div>
                <div className="p-4 md:p-5">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Este diagnóstico</span>
                </div>
              </div>

              {/* Filas */}
              <div className="divide-y divide-border-dark">
                <div className="grid grid-cols-2">
                  <div className="p-4 md:p-5 border-r border-border-dark bg-surface-dark/30">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-slate-600 text-xl shrink-0">school</span>
                      <p className="text-slate-400 text-sm">El valor es la <strong>información</strong> que recibes</p>
                    </div>
                  </div>
                  <div className="p-4 md:p-5 bg-surface-dark">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl shrink-0">dashboard</span>
                      <p className="text-slate-300 text-sm">El valor es el <strong className="text-white">mapa y el plan</strong> que sales con ellos</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="p-4 md:p-5 border-r border-border-dark bg-surface-dark/30">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-slate-600 text-xl shrink-0">timer_off</span>
                      <p className="text-slate-400 text-sm">Termina cuando termina</p>
                    </div>
                  </div>
                  <div className="p-4 md:p-5 bg-surface-dark">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl shrink-0">trending_up</span>
                      <p className="text-slate-300 text-sm">El mapa lo usas para <strong className="text-white">delegar, capacitar o escalar</strong> — con o sin nosotros</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="p-4 md:p-5 border-r border-border-dark bg-surface-dark/30">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-slate-600 text-xl shrink-0">build</span>
                      <p className="text-slate-400 text-sm">Aprendes una herramienta que puede quedar obsoleta</p>
                    </div>
                  </div>
                  <div className="p-4 md:p-5 bg-surface-dark">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl shrink-0">business</span>
                      <p className="text-slate-300 text-sm">Procesamos <strong className="text-white">tu negocio en vivo</strong>, no teoría genérica</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="p-4 md:p-5 border-r border-border-dark bg-surface-dark/30">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-slate-600 text-xl shrink-0">campaign</span>
                      <p className="text-slate-400 text-sm">Al final hay una "presentación de venta"</p>
                    </div>
                  </div>
                  <div className="p-4 md:p-5 bg-surface-dark">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl shrink-0">rule</span>
                      <p className="text-slate-300 text-sm">Al final hay una <strong className="text-white">decisión informada</strong>, no una venta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Destacado inferior */}
            <div className="mt-8 p-5 rounded-xl bg-primary/10 border border-primary/20 text-center">
              <p className="text-slate-300 text-sm">
                <strong className="text-white">Regla de oro:</strong> todo lo que aprendas en las 4 sesiones debe valer la pena{' '}
                <em className="text-primary">aunque nunca nos contrates</em>.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SESIONES ===== */}
        <section id="sesiones" className="w-full px-4 py-16 md:py-24 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-4">
            Las 4 sesiones
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            8 horas de trabajo distribuidas en 4 noches. Cada sesión tiene un objetivo claro,
            un entregable concreto y demostraciones en vivo.
          </p>
          <div className="space-y-8">
            {SESIONES.map((s) => (
              <div
                key={s.numero}
                className="bg-surface-dark border border-border-dark rounded-2xl overflow-hidden"
              >
                <div className="p-6 md:p-8 border-b border-white/10 bg-gradient-to-r from-primary/10 to-transparent flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-white font-black text-lg">
                    {s.numero}
                  </span>
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      Sesión {s.numero} · 2 horas
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{s.titulo}</h3>
                  </div>
                </div>
                <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      <strong className="text-white">Objetivo:</strong> {s.objetivo}
                    </p>
                    <ul className="space-y-2">
                      {s.actividades.map((a, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                          <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                      <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">Entregable</p>
                      <p className="text-white text-sm font-medium">{s.entregable}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-dark border border-border-dark">
                      <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">Momento clave</p>
                      <p className="text-slate-300 text-sm">{s.highlight}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PRINCIPIOS ===== */}
        <section className="w-full py-16 md:py-20 bg-slate-900 dark:bg-slate-950">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Principios del programa
            </h2>
            <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
              Todo lo que diseñamos en estas 4 sesiones está regido por 6 reglas no negociables.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRINCIPIOS.map((p, i) => (
                <div key={i} className="p-6 rounded-2xl bg-surface-dark border border-border-dark flex flex-col">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4" aria-hidden>
                    {p.icono}
                  </span>
                  <h3 className="text-white font-bold mb-2">{p.titulo}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== INVERSIÓN ===== */}
        <section className="w-full px-4 py-16 md:py-24 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-4">
            Estructura de inversión
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Los $3,000 del diagnóstico no son un segundo producto: son el anticipo del proyecto.
            Si contratas la implementación esa semana, el diagnóstico te sale en $0.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-surface-dark border border-border-dark flex flex-col">
              <span className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-2">Paso 1</span>
              <h3 className="text-white font-bold text-lg mb-2">Diagnóstico de Automatización</h3>
              <p className="text-slate-400 text-sm mb-6 flex-1">
                4 sesiones × 2h en vivo. Tu Mapa y tu Plan. Se descuenta 100% contra implementación.
              </p>
              <p className="text-3xl font-black text-primary">$3,000 MXN</p>
            </div>
            <div className="p-8 rounded-2xl bg-surface-dark border border-primary/30 flex flex-col relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold">
                Si contratas la semana del diagnóstico
              </span>
              <span className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-2">Paso 2</span>
              <h3 className="text-white font-bold text-lg mb-2">Implementación llave en mano</h3>
              <p className="text-slate-400 text-sm mb-6 flex-1">
                Configuración + 3 flujos automatizados + pruebas + hosting 1er mes.
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-black text-primary">$9,000 MXN</p>
                <p className="text-sm text-slate-500 line-through">$12,000</p>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-surface-dark border border-border-dark flex flex-col">
              <span className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-2">Continuidad</span>
              <h3 className="text-white font-bold text-lg mb-2">Mejora y soporte mensual</h3>
              <p className="text-slate-400 text-sm mb-6 flex-1">
                Hosting, 1 mejora/semana, monitoreo 24/7, reporte mensual, soporte continuo.
              </p>
              <p className="text-3xl font-black text-primary">$5,000<span className="text-base font-medium text-slate-400">/mes</span></p>
            </div>
          </div>
          <div className="mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/20 max-w-5xl mx-auto">
            <p className="text-slate-300 text-sm text-center">
              <strong className="text-white">Comparativa:</strong> un asistente medio tiempo en CDMX cuesta $8,000–$12,000/mes + prestaciones.
              Un agente trabaja 24/7, no se enferma, no pide vacaciones, y cuesta una fracción.
            </p>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="w-full py-16 md:py-20 bg-slate-900 dark:bg-slate-950">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Preguntas frecuentes
            </h2>
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <div key={i} className="rounded-xl bg-surface-dark border border-border-dark overflow-hidden">
                  <button
                    onClick={() => setFaqAbierta(faqAbierta === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="text-white font-medium text-sm pr-4">{f.q}</span>
                    <span className="material-symbols-outlined text-slate-400 shrink-0 transition-transform">
                      {faqAbierta === i ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                  {faqAbierta === i && (
                    <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section className="w-full px-4 py-16 md:py-24 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Tu mapa y tu plan te esperan
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            4 noches de trabajo en tu negocio. 2 entregables que son tuyos para siempre.
            Sin código, sin instalación, sin compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-dark border border-border-dark text-slate-300 text-sm font-medium">
              <span className="material-symbols-outlined text-primary">calendar_today</span>
              {FECHAS}
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-dark border border-border-dark text-slate-300 text-sm font-medium">
              <span className="material-symbols-outlined text-primary">schedule</span>
              {HORARIO}
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-sm font-bold">
              <span className="material-symbols-outlined">payments</span>
              $3,000 MXN
            </span>
          </div>
          <button
            onClick={() => setIsContactOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-full h-14 px-10 bg-primary text-white text-lg font-bold hover:bg-primary-dark transition-all shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:scale-105"
          >
            <span className="material-symbols-outlined">edit_calendar</span>
            Reservar mi lugar
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Cupo limitado a {CUPO} personas · Se graba y te llega a tu correo
          </p>
        </section>
      </main>

      <Footer />

      <DiagnosticoContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}
