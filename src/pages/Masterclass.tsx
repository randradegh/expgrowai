import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import MasterclassRegistrationModal from '../components/MasterclassRegistrationModal'

// Fecha y hora confirmadas de la master class (miércoles 23-sep-2026, 19:00 CDMX).
const MASTERCLASS_FECHA = 'Miércoles 23 de septiembre de 2026'
const MASTERCLASS_HORA = '19:00 h (hora CDMX)'
const CUPO = 30

const AGENDA = [
  { tiempo: '0–5 min', titulo: 'Apertura', texto: 'Cómo una PyME pasa de la libreta de papel a un asistente digital que trabaja 24/7.' },
  { tiempo: '5–10 min', titulo: 'Concepto express', texto: 'Un agente no es un chatbot: es un asistente que lee, escribe, decide y actúa. Sin tecnicismos.' },
  { tiempo: '10–30 min', titulo: 'Demo 1 · Médico 🏥', texto: 'Citas por WhatsApp, recordatorios automáticos y resumen del paciente antes de la consulta.' },
  { tiempo: '30–50 min', titulo: 'Demo 2 · Comercio 🏪', texto: 'Atención inmediata, inventario en tiempo real y reactivación de leads dormidos.' },
  { tiempo: '50–70 min', titulo: 'Demo 3 · Industrial 🏭', texto: 'Cotización de proyectos con comparativa de proveedores, reporte matutino de precios, alertas de variación y mantenimiento preventivo de equipos.' },
  { tiempo: '70–90 min', titulo: 'Cierre + Q&A', texto: 'Cómo funciona el diagnóstico de 8 horas, la oferta para asistentes y preguntas en vivo.' },
]

const CASOS = [
  {
    icono: 'medical_information',
    etiqueta: 'Demo 1 · Médico',
    titulo: 'Dr. Alejandro García Torres',
    dolor: 'Pasa 2 horas al día agendando citas, enviando recordatorios y respondiendo las mismas dudas por WhatsApp.',
    momentos: [
      'Paciente nuevo pide cita → el agente consulta la agenda, propone horarios reales, confirma y envía dirección + indicaciones de llegada',
      '24 h antes → recordatorio automático con confirmación de asistencia',
      '"¿A qué hora era mi cita?" → responde al instante con nombre, hora y dirección, sin que el paciente repita nada',
      'Antes de la consulta → entrega al doctor un resumen del historial del paciente por email',
    ],
    reality: 'El agente elimina el trámite, no la decisión clínica. No diagnostica, no receta, no da indicaciones médicas.',
    canal: 'WhatsApp · Telegram · Email',
  },
  {
    icono: 'storefront',
    etiqueta: 'Demo 2 · Comercio',
    titulo: 'Laura Mendoza — Ferretería La Esquina del Tecnico',
    dolor: 'Vende por Instagram y WhatsApp y pierde ventas porque no da abasto para responder. Recibe ~40 mensajes diarios, contesta ~12. El resto se va con la competencia.',
    momentos: [
      'Cliente nuevo pregunta por esmeril angular → el agente busca en el inventario, responde con precio exacto, stock disponible y envío',
      'Cliente confirma compra → genera la orden (ORD-2026-XXXX), reserva stock y notifica a Laura',
      'Lead dormido de 4 días ("lo veo y te digo") → reactivación con mensaje personalizado basado en la consulta exacta del cliente',
      'Laura aprueba una promoción de pintura → el agente la envía solo a clientes con interés en esa categoría, sin spam',
    ],
    reality: 'María lee el inventario y da seguimiento, pero no inventa promociones sin autorización de Laura. No acepta pagos: genera la orden y Laura completa el pago. No negocia descuentos.',
    canal: 'Telegram',
  },
  {
    icono: 'precision_manufacturing',
    etiqueta: 'Demo 3 · Industrial',
    titulo: 'Auren — Automatización y Control',
    dolor: 'El equipo pierde 2-3 horas por cotización armando desgloses manuales entre catálogos de proveedores. Los proveedores cambian precios sin avisar. Y los mantenimientos preventivos de equipos críticos se registran en papel o Excel desactualizado.',
    momentos: [
      'Cliente pide cotización de proyecto → el agente busca precios en 3 catálogos de proveedores, arma desglose comparativo, genera número de cotización y envía',
      'Cada mañana → resumen comparativo de precios por categoría, destacando el mejor proveedor',
      'Proveedor sube precio más del 5% → alerta inmediata con alternativas de otros proveedores',
      'Equipo alcanza horas de mantenimiento → alerta con 25 horas de anticipación, sugiere técnico y refacciones',
    ],
    reality: 'El agente no lee medidores por arte de magia: trabaja con los datos que le das (catálogos, registro de horas). No decide cuándo comprar ni cuánto: eso lo define el dueño.',
    canal: 'Telegram',
  },
]

const DOLARES = [
  { icono: 'medical_information', titulo: '¿Sigues contestando WhatsApp a las 11 pm para agendar citas?', texto: 'Tu trabajo es atender a pacientes, no ser recepcionista las 24 horas.' },
  { icono: 'storefront', titulo: '¿Cuántas ventas perdiste hoy por no alcanzar a responder?', texto: 'Tus clientes preguntan a todas horas. Un agente responde al instante y da seguimiento por ti.' },
  { icono: 'precision_manufacturing', titulo: '¿Aún haces cotizaciones a mano mientras el proyecto espera?', texto: 'Una cotización manual te roba 2-3 horas entre catálogos, copy-paste y formatos. Y luego el proveedor sube precio sin avisar.' },
]

const FAQS = [
  { q: '¿Necesito conocimientos técnicos?', a: 'No. No instalarás nada ni tocarás una terminal. Solo necesitas tu celular o computadora y curiosidad. Toda la parte técnica la gestiona ExpGrowAI.' },
  { q: 'Mi negocio no es de los tres casos que mencionas. ¿Aún me sirve?', a: 'Sí. Las tres demos usan las mismas capacidades base: atención al cliente multicanal, agenda y seguimiento, consulta de datos en tiempo real, y monitoreo con alertas. Casi todo negocio de servicios o de caja las toca en su operación diaria.' },
  { q: '¿Me van a vender algo durante la llamada?', a: 'La master class es 100% gratuita y sin compromiso. Al final te presentamos el diagnóstico de 8 horas sobre tu propio negocio y decides tú. Sin presión.' },
  { q: '¿Se graba la master class?', a: 'Sí, se graba. Si no puedes conectarte en vivo, te enviamos la grabación a tu correo después del evento.' },
  { q: '¿Desde dónde puedo conectarme?', a: 'Desde cualquier lugar con internet (México, LATAM o Estados Unidos). La sesión es por Google Meet y también se transmite por YouTube Live.' },
]

export default function Masterclass() {
  const [isRegistroOpen, setIsRegistroOpen] = useState(false)

  const fechaTexto = MASTERCLASS_FECHA ?? 'Fecha por confirmar'
  const horaTexto = MASTERCLASS_HORA ?? 'Horario por confirmar (hora CDMX)'
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-200">
      <SEO
        title="Master Class Gratuita — Automatiza tu PYME con Agentes de IA | Exponential Grow AI"
        description="En 90 minutos verás a un agente de IA atendiendo WhatsApp, agendando, enviando recordatorios y generando cotizaciones — en 3 casos reales: un médico, una comerciante y una empresa de automatización industrial. Gratuita, en vivo, cupo limitado."
        canonicalPath="/masterclass"
      />
      <Navbar />

      <main className="flex flex-col items-center w-full pt-24">
        {/* ===== HERO ===== */}
        <section className="w-full px-4 py-16 md:py-24 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-border-dark w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
              Master Class Gratuita · En vivo · Cupo limitado a {CUPO} personas
            </span>
          </div>

          {/* Aviso de nueva fecha — estrella */}
          <div className="relative mx-auto mb-6 w-[240px] h-[240px]">
            <img
              src="/estrella_fondo_transparente.png"
              alt="¡Nueva Fecha!"
              className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(255,165,0,0.7)]"
            />
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white mb-6">
            Pasa de la libreta de papel a un{' '}
            <span className="text-primary">asistente digital que trabaja 24/7</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            En 90 minutos verás a un agente de IA atendiendo WhatsApp, agendando citas, enviando
            recordatorios y generando cotizaciones — en tres casos reales: un médico, una
            comerciante y una empresa de automatización industrial.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-dark border border-border-dark text-slate-300 text-sm font-medium">
              <span className="material-symbols-outlined text-primary">calendar_today</span>
              {fechaTexto}
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-dark border border-border-dark text-slate-300 text-sm font-medium">
              <span className="material-symbols-outlined text-primary">schedule</span>
              {horaTexto} · 90 min
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-dark border border-border-dark text-slate-300 text-sm font-medium">
              <span className="material-symbols-outlined text-primary">videocam</span>
              Google Meet + YouTube Live
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-sm font-bold">
              <span className="material-symbols-outlined">free</span>
              100% gratuita
            </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsRegistroOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full h-14 px-10 bg-primary text-white text-lg font-bold hover:bg-primary-dark transition-all shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:scale-105"
            >
              <span className="material-symbols-outlined">edit_calendar</span>
              Reservar mi lugar gratuito
            </button>
            <a
              href="#agenda"
              className="inline-flex items-center justify-center gap-2 rounded-full h-14 px-8 border border-white/20 text-white font-bold hover:bg-white/10 transition-all"
            >
              <span className="material-symbols-outlined">schedule</span>
              Agenda de la Master Class
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Sin conocimientos técnicos · No instalarás nada · Se graba y te llega a tu correo
          </p>
        </section>

        {/* ===== DOLOR ===== */}
        <section className="w-full py-16 md:py-20 bg-slate-900 dark:bg-slate-950">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              ¿Te suena familiar?
            </h2>
            <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
              Si tu negocio vive del teléfono y de tu atención personal, este es el momento de ver
              cómo se resuelve con un agente.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DOLARES.map((d, i) => (
                <div key={i} className="p-6 rounded-2xl bg-surface-dark border border-border-dark flex flex-col">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4" aria-hidden>
                    {d.icono}
                  </span>
                  <h3 className="text-white font-bold mb-3 leading-snug">{d.titulo}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{d.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== LAS 3 DEMOS ===== */}
        <section id="demo" className="w-full px-4 py-16 md:py-24 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-4">
            Lo que verás en vivo
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Tres demos reales, una por vertical. Cada una termina con un <em>reality check</em>:
            qué puede hacer un agente y qué no. Sin humo.
          </p>
          <div className="space-y-8">
            {CASOS.map((caso) => (
              <div
                key={caso.titulo}
                className="bg-surface-dark border border-border-dark rounded-2xl overflow-hidden"
              >
                <div className="p-6 md:p-8 border-b border-white/10 bg-gradient-to-r from-primary/10 to-transparent flex flex-wrap items-center gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary" aria-hidden>
                    <span className="material-symbols-outlined text-3xl">{caso.icono}</span>
                  </span>
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {caso.etiqueta}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{caso.titulo}</h3>
                  </div>
                  <span className="ml-auto text-xs font-medium text-slate-400 px-3 py-1.5 rounded-full border border-border-dark">
                    {caso.canal}
                  </span>
                </div>
                <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-4">
                      <strong className="text-white">Problema:</strong> {caso.dolor}
                    </p>
                    <div className="bg-background-dark/60 border border-border-dark rounded-xl p-5">
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                        El reality check
                      </p>
                      <p className="text-slate-300 text-sm leading-relaxed">{caso.reality}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {caso.momentos.map((m, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                        <span className="material-symbols-outlined text-primary flex-shrink-0 text-xl" aria-hidden>
                          check_circle
                        </span>
                        <span className="text-slate-300">{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* ===== AGENDA 90 MIN ===== */}
        <section id="agenda" className="w-full py-16 md:py-20 bg-slate-900 dark:bg-slate-950">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              En 90 minutos tu visión cambiará...
            </h2>
            <p className="text-center text-slate-400 mb-12 max-w-xl mx-auto">
              En concreto: 10 minutos de contexto, 60 de demos y 20 de cierre.
            </p>
            <div className="space-y-3">
              {AGENDA.map((item) => (
                <div
                  key={item.tiempo}
                  className="flex items-start gap-4 p-4 md:p-5 rounded-xl bg-surface-dark border border-border-dark"
                >
                  <span className="flex-shrink-0 font-mono text-xs md:text-sm text-primary font-bold pt-0.5 w-24">
                    {item.tiempo}
                  </span>
                  <div>
                    <p className="text-white font-bold">{item.titulo}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ¿Y DESPUÉS? PUENTE AL DIAGNÓSTICO ===== */}
        <section className="w-full px-4 py-16 md:py-24 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-4">
            ¿Y después de la Master Class?
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            La master class es gratuita y sin compromiso. El siguiente paso no es un curso: es un
            <em> diagnóstico de 8 horas sobre tu propio negocio</em> — y decides tú.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              { titulo: 'Sesión 1 · De la libreta al mapa', texto: 'Haces tu inventario de tareas repetitivas: lo que te quita horas cada semana, y cuántas.' },
              { titulo: 'Sesión 2 · Esto es real', texto: 'Deep-dive de las demos de tu giro y calibras qué sí puede hacer un agente y qué no. Sin humo.' },
              { titulo: 'Sesión 3 · Tu giro, tus datos', texto: 'Traes tu caso real, lo procesamos en vivo y sales con tu Mapa de Automatización — tuyo, para usarlo con o sin nosotros.' },
              { titulo: 'Sesión 4 · Del análisis al plan', texto: 'Tu mapa se convierte en Plan de Implementación, con los 3 caminos posibles y 20 minutos de evidencia de cómo se ve en la práctica. Ahí decides, sin presión.' },
            ].map((s) => (
              <div key={s.titulo} className="p-5 rounded-2xl bg-surface-dark border border-border-dark">
                <h3 className="text-white font-bold mb-2">{s.titulo}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.texto}</p>
              </div>
            ))}
          </div>
          <div className="text-center p-6 md:p-8 rounded-2xl border border-primary/40 bg-primary/10">
            <p className="text-lg md:text-xl text-white font-bold mb-2">
              Diagnóstico de Automatización (4 sesiones × 2 h, en vivo) · $3,000 MXN
            </p>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto">
              Con el <em>método del caso de Harvard</em> — no teoría sobre IA, sino tu negocio en
              sesión de trabajo. Cohorte de máximo 15 dueños para procesar casos en vivo. Si
              después contratas la implementación, el costo del diagnóstico se descuenta 100%.
              Si decides no contratarla, te llevas tu mapa y tu plan de todos modos.
            </p>
          </div>
        </section>

        {/* ===== SOBRE ROBERTO ===== */}
        <section className="w-full px-4 py-16 md:py-20 max-w-4xl mx-auto">
          <div className="p-6 md:p-10 rounded-2xl bg-surface-dark border border-border-dark text-center">
            <img
              src="/raf_nbp_2025.png"
              alt="Roberto Andrade Fonseca"
              className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-2 border-primary/40"
            />
            <h2 className="text-2xl font-bold text-white mb-2">Roberto Andrade Fonseca</h2>
            <p className="text-primary font-semibold text-sm mb-4">Director · Exponential Grow AI</p>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Consultor estratégico de IA aplicada a negocios. Trabaja con dueños de PyMEs que
              quieren recuperar las horas que pierden en tareas repetitivas — y en esta master
              class te muestra, en vivo y sin editar, lo que un agente de IA hace hoy.
            </p>
            <a
              href="/sobre-mi"
              className="inline-flex items-center gap-1 text-primary font-bold text-sm mt-4 hover:underline"
            >
              Conocer mi trayectoria
              <span className="material-symbols-outlined text-base" aria-hidden>arrow_forward</span>
            </a>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="w-full px-4 py-16 md:py-20 bg-slate-900 dark:bg-slate-950">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
              Preguntas frecuentes
            </h2>
            <div className="space-y-3">
              {FAQS.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl bg-surface-dark border border-border-dark overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none text-white font-bold text-sm md:text-base">
                    {f.q}
                    <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-45" aria-hidden>
                      add
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section className="w-full px-4 py-20 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            ¿Tus tareas repetitivas podrían hacerlas otro?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            En 90 minutos verás con qué datos, qué canales y qué límites funciona un agente real.
            Cupo limitado a {CUPO} personas — cuando se llenan, se llenan.
          </p>
          <button
            onClick={() => setIsRegistroOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-full h-14 px-10 bg-primary text-white text-lg font-bold hover:bg-primary-dark transition-all shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:scale-105"
          >
            <span className="material-symbols-outlined">edit_calendar</span>
            Reservar mi lugar gratuito
          </button>
          <p className="text-sm text-gray-500 mt-4">{fechaTexto} · {horaTexto}</p>
        </section>
      </main>

      <Footer />
      <MasterclassRegistrationModal isOpen={isRegistroOpen} onClose={() => setIsRegistroOpen(false)} />
    </div>
  )
}
