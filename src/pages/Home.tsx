import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#152211] dark:text-white overflow-x-hidden w-full">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-24">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-border-dark/30 rounded-full blur-[100px] pointer-events-none translate-y-1/4 -translate-x-1/4"></div>
        
        <div className="layout-container w-full px-6 md:px-12 lg:px-20 xl:px-40 py-12 md:py-24 max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Hero Content */}
            <div className="flex-1 flex flex-col gap-8 max-w-[640px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-primary text-xs font-bold tracking-wide uppercase">
                  Disponible para nuevos proyectos
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight text-white">
                Escala tu impacto{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                  educativo y de marketing
                </span>{' '}
                con IA Generativa
              </h1>
              
              <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-[540px]">
                Consultoría estratégica y formación avanzada en Diseño de Peticiones Profesionales para Modelos de AI (<span className="text-primary">Prompt Engineering</span>). Transforma procesos manuales en sistemas automatizados que generan resultados tangibles.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button className="flex items-center justify-center gap-2 h-14 px-8 bg-primary hover:bg-primary-dark text-white text-base font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-105">
                  <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                  Agenda una sesión exploratoria
                </button>
                <button className="flex items-center justify-center gap-2 h-14 px-8 border border-gray-600 hover:border-white text-white hover:bg-white/5 text-base font-bold rounded-full transition-all duration-300">
                  Ver programas de formación
                </button>
              </div>
              
              <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
                <div className="flex -space-x-2">
                  <div
                    className="w-8 h-8 rounded-full border-2 border-background-dark bg-gray-700 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDd_z6OQy6XY7oa9mP-7eOLYvy_nt2rhJpo61Wxl16wRwubiLCo-C8J6tuIMWG6NoB_011_UVunflrRZ8z-Eaku-0EP9Mw6CdG3d1-A90m2aAvqOv8xKUsVAaBF28S4Yrgderj4kLqiXZ9A7SVGrq1VJJs4PJ1lRre7U8f7Jn7NRPBx3a3YKw9Am3ALC3VbPWvgiH6qxIhUvU25tLlC45B18Dstc08mhJC7aTNNVCTo0kyC_UptcSR9spTJ3xadlpDowch6ReWvsGWX')",
                    }}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full border-2 border-background-dark bg-gray-700 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCSzlXZtirNde7ldPvJNCgG_nXveSniPChhE8z1ykRbF2vSArNYfTGsjaqFtZwg193rRZipmVdcL3ggNbo_ZRU1f163FHroUdg7uSVgxvulkLr7-GCf5Aq3wQKwIyIET4ParCpOIrvNMimjPgib-fnEpTpEilPcVLYj9sC_IDBhq3qAmTZlYFO7jXX32fwrg_ofuqBQVTcTpvau1k5PN4XbkQTrYkgSnuyttmi8kiRIXnhlEbHoyWWl21KWmmwd-pP8tleLHAOMi0Pp')",
                    }}
                  ></div>
                  <div
                    className="w-8 h-8 rounded-full border-2 border-background-dark bg-gray-700 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuALn1lSQQklsQun0V5Dd4bWltt9R3T454oS8qJ8L2aXbZg9fXOwBj6Zg7d6EHQ-JAS-vtktCNjKfcp02n9CopAoN23lJJX5WOg8ZJfKNTXZIdr-rDEK_E32fSG-N4OwWOSgCEranBQ71HDFgAfC2jNbFf1Cu7UPEYKBSLkVVnOaDNBmxo1zyzc4WiC-Nfcdp7FFPJBRSu9m3op9__zPkbBTNayhDJJRAwGhAx21xAPGX39PNAHbTBubD6fmtRMErXXx6x4j6fZMq0ax')",
                    }}
                  ></div>
                </div>
                <p>+100 profesionales formados este año</p>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="flex-1 w-full lg:w-auto relative group">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#1a2b15]">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
                <div
                  className="w-full h-full bg-cover bg-center opacity-80"
                  style={{
                    backgroundImage: "url('/hero_image_01.png')",
                  }}
                ></div>
                {/* Floating Cards Overlay */}
                <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col gap-3">
                  <div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-[float_4s_ease-in-out_infinite]">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">auto_awesome</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Generación de contenido</p>
                      <p className="text-primary text-xs">+300% eficiencia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Problems Section */}
      <section className="py-24 bg-background-dark relative" id="servicios">
        <div className="max-w-[960px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
              Problemas que resuelves
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Deja de perder tiempo en procesos manuales
            </h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Identificamos y eliminamos los cuellos de botella en tu flujo de trabajo creativo y educativo mediante IA.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group bg-surface-dark border border-white/5 p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-surface-dark rounded-full flex items-center justify-center border border-white/10 mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">schedule</span>
              </div>
              <h4 className="text-white text-xl font-bold mb-3">Creación lenta</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Horas perdidas redactando emails, posts y materiales genéricos que no convierten.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="group bg-surface-dark border border-white/5 p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-surface-dark rounded-full flex items-center justify-center border border-white/10 mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">psychology_alt</span>
              </div>
              <h4 className="text-white text-xl font-bold mb-3">Bloqueo creativo</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Dificultad constante para generar nuevas ideas de campañas o estructuras de cursos.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="group bg-surface-dark border border-white/5 p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-surface-dark rounded-full flex items-center justify-center border border-white/10 mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">group_off</span>
              </div>
              <h4 className="text-white text-xl font-bold mb-3">Falta de personalización</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Imposibilidad de adaptar materiales a cada alumno o cliente por falta de recursos.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Audience/Segment Section */}
      <section className="py-24 bg-[#111c0d] relative overflow-hidden" id="quien-soy">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3 sticky top-24">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">¿A quién ayudo?</h2>
              <p className="text-gray-400 mb-8">
                Mi enfoque híbrido combina la estrategia de negocio con la técnica de la ingeniería de prompts. No solo enseño herramientas, diseño sistemas.
              </p>
              <a className="inline-flex items-center text-primary font-bold hover:text-white transition-colors" href="#">
                Conoce más sobre mi trayectoria
                <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </a>
            </div>
            
            <div className="w-full md:w-2/3 flex flex-col gap-6">
              {/* Segment 1 */}
              <div className="flex gap-6 p-8 rounded-3xl bg-surface-dark border border-white/5 hover:border-primary/30 transition-all">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-border-dark flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-3xl">school</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Educadores y Formadores</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Transforma tu manera de enseñar. Crea tutores personalizados, genera rúbricas en segundos y adapta el contenido a diferentes estilos de aprendizaje.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                      Creación de planes de estudio con IA
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                      Feedback automatizado y personalizado
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Segment 2 */}
              <div className="flex gap-6 p-8 rounded-3xl bg-surface-dark border border-white/5 hover:border-primary/30 transition-all">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-border-dark flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-3xl">campaign</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Marketing y Negocios</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Escala tu producción de contenido sin perder calidad. Implementa workflows que combinan creatividad humana con velocidad artificial.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                      Sistemas de contenido infinito
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                      Análisis de mercado y tendencias con IA
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Services */}
      <section className="py-24 bg-background-dark">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Servicios Destacados</h2>
            <p className="text-gray-400 max-w-2xl">
              Soluciones adaptadas a tu nivel de madurez tecnológica.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="relative group overflow-hidden rounded-[2rem]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDd7iaKTtYAhQ1mx3bmLbdtSWn-PjHAt2vuyKoR3G0N_sPO_nIXcUDMUArUZZKopjXHsNeatQZcLmwki-IhDsWWti_mxcYYcShpETbIkb6f-l2b9UR5RX9EvCZeIL09v-9a3eMnhVzsgezgvQNHDomid5UTwNhqeAge-v6r6lqNTqibF_9oVq9u5qPz-_JLokWBd7l-MaZtfMKx0RIZpd9Z6OaxQ_7izF7o3mbfKgwgPDJtScekjcZaxRZUDx8LlUM6qNGy44GRxtYA')",
                }}
              ></div>
              <div className="absolute inset-0 bg-background-dark/90 group-hover:bg-background-dark/80 transition-colors"></div>
              <div className="relative p-10 h-full flex flex-col items-start min-h-[400px]">
                <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-3xl">terminal</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Formación en <span className="text-primary">Prompt Engineering</span></h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Aprende a comunicarte efectivamente con los LLMs (GPT-4, Claude, Gemini, Perplexity). Desde técnicas básicas de zero-shot hasta cadenas de pensamiento complejas.
                </p>
                <div className="mt-auto">
                  <button className="px-6 py-3 rounded-full border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
                    Ver temario
                  </button>
                </div>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="relative group overflow-hidden rounded-[2rem]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCe4eZUeHUTdsB7IkJ5HVznK7Ys5PRC5wsSjYacYbBu91mRjgbbpJ_srK_AxXqu2DXJ27TX4HusVGRLDXis98uTzAy9rP_LQwV0_jIrtZ2d-bwpxmwnHJ5BeGe3pRzdAnrWt75Mz8FvEBICSit_HKbMUKvT4KperJAkWVs0cabfI5_dRNaDGLI9WsKvHEvAVqFuVRgboruXc9g200blGYwz5x0pJX8zCsVeNjThQUw2cjqcc76D23AG-ReSI6J2IO-xiYkbZPoUKXYA')",
                }}
              ></div>
              <div className="absolute inset-0 bg-background-dark/90 group-hover:bg-background-dark/80 transition-colors"></div>
              <div className="relative p-10 h-full flex flex-col items-start min-h-[400px]">
                <div className="w-14 h-14 bg-white text-background-dark rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">account_tree</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Diseño de Sistemas de Contenido</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  No solo prompts sueltos. Construimos flujos de trabajo completos que integran IA en tu Sistema de Gestión de Contenidos, automatizando la investigación, redacción y distribución.
                </p>
                <div className="mt-auto">
                  <button className="px-6 py-3 rounded-full border border-white text-white font-bold hover:bg-white hover:text-background-dark transition-all">
                    Consultar servicio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 bg-[#1a2915]" id="testimonios">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl font-black text-white mb-12 text-center">Lo que dicen mis clientes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-surface-dark p-8 rounded-2xl border border-white/5 relative">
              <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-4 right-4">format_quote</span>
              <p className="text-gray-300 mb-6 relative z-10 italic">
                "La formación transformó por completo cómo nuestro equipo de marketing aborda la creación de campañas. Ahorramos 20 horas a la semana."
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-gray-600 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjul9xG85mMR-wd0O6lCjE1Fh-m6ulYuVf9mCoGgHL6cTrllatkcKuxpok0rg59Ao3yVqsu__wHBGVDeHJ6aosWI_5bl4Fr0pm-63iUMM64VDztIudsrbOC2ykvqhY2CFqLkVMNcRd5D0gifBykOyyFQFKSjY90PyHGAk0wa90K1Bl1by1ahMqIprOI_6TnYWcRpNEA6RuEz4Eb6DjyP41FEa4AKeuhSoN5C6WTvCtlLyahWiIC2xHIiUyrDutcKFI04u6iuTzx_sc')",
                  }}
                ></div>
                <div>
                  <h5 className="text-white font-bold text-sm">Elena R.</h5>
                  <p className="text-primary text-xs">CMO, TechStart</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-surface-dark p-8 rounded-2xl border border-white/5 relative">
              <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-4 right-4">format_quote</span>
              <p className="text-gray-300 mb-6 relative z-10 italic">
                "Como director de escuela, necesitaba herramientas prácticas, no teoría. Este consultor entiende las necesidades reales del aula."
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-gray-600 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtVsnbIFoY4fnCQ0QhpgOdq6t1sZVsUvQIbtFfqUxJqir8j1CkhlmdTb7ivu9akDPkiMBkh0VfsPZ01tVBOTphsJol8gBoITBsmPS-qTD-1Lnn9V_Ro3MmHAQwj5hG7pNduOeggZHHVTNFEA7odsqcHAIaAhFv4PCl7GMgQBZ4V77EjZuYrDUKqNeghUZGWccvQhcbB3u7EefSromZ4JgLCf-YkfgbFjFhw7HDrVtDRIw7vPBct0_dNNtQN65nX-HrqJInHz8fRDpJ')",
                  }}
                ></div>
                <div>
                  <h5 className="text-white font-bold text-sm">Carlos M.</h5>
                  <p className="text-primary text-xs">Director Académico</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-surface-dark p-8 rounded-2xl border border-white/5 relative">
              <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-4 right-4">format_quote</span>
              <p className="text-gray-300 mb-6 relative z-10 italic">
                "Increíble claridad para explicar conceptos complejos de IA. Ahora usamos GPT-4 como un verdadero asistente estratégico."
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-gray-600 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAy6K2Avw1pB02s4mPCYwnxiwt3qf59TkDq_qtqxIdhhun4WwAVz7II9Z-Armc2LFv_7uaeo5KX4BZftm431ev0Bh32RQqm7ydWOj9lL6YBuHpihgiyMtIre0I1nAxgtnnEjDnAsccSZeQscr2eQ2Q7ldYlrjgnp43sNbpWFjUPdUNodviAYl60PI3cCgifWz_O5DHesuhNd2qWUReuMNQsFI0ZJfyWXp8_uCqpERZbwHgVPnLO_z5PE4OJj5tu2O1pWRU4RgHua5BS')",
                  }}
                ></div>
                <div>
                  <h5 className="text-white font-bold text-sm">Sofia L.</h5>
                  <p className="text-primary text-xs">Content Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

