import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Blog() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-black">
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10 pt-24">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            {/* Page Heading & Search */}
            <div className="flex flex-col gap-6 pb-10">
              <div className="flex flex-wrap justify-between items-end gap-6">
                <div className="flex max-w-2xl flex-col gap-3">
                  <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                    Inteligencia Artificial para <span className="text-primary">Resultados Reales</span>
                  </h1>
                  <p className="text-text-muted text-lg font-normal leading-normal">
                    Estrategias de IA generativa aplicadas a la educación y el marketing. Sin humo, solo impacto.
                  </p>
                </div>
                {/* Search Bar */}
                <div className="w-full max-w-md">
                  <label className="flex flex-col h-12 w-full group">
                    <div className="flex w-full flex-1 items-stretch rounded-full h-full border border-border-dark group-focus-within:border-primary transition-colors">
                      <div className="text-text-muted flex bg-surface-dark items-center justify-center pl-4 rounded-l-full border-r-0">
                        <span className="material-symbols-outlined">search</span>
                      </div>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-full text-white focus:outline-0 focus:ring-0 border-none bg-surface-dark focus:border-none h-full placeholder:text-text-muted/70 px-4 pl-2 text-base font-normal leading-normal"
                        placeholder="Buscar artículos, guías o temas..."
                        type="search"
                      />
                    </div>
                  </label>
                </div>
              </div>
              {/* Filter Chips */}
              <div className="flex gap-3 flex-wrap pt-4">
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 transition-transform hover:scale-105">
                  <p className="text-sm font-bold leading-normal">Todos</p>
                </button>
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-dark border border-border-dark hover:border-primary text-white px-5 transition-all hover:text-primary">
                  <p className="text-sm font-medium leading-normal">Casos de Estudio</p>
                </button>
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-dark border border-border-dark hover:border-primary text-white px-5 transition-all hover:text-primary">
                  <p className="text-sm font-medium leading-normal">Prompt Engineering</p>
                </button>
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-dark border border-border-dark hover:border-primary text-white px-5 transition-all hover:text-primary">
                  <p className="text-sm font-medium leading-normal">Automatización</p>
                </button>
                <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-dark border border-border-dark hover:border-primary text-white px-5 transition-all hover:text-primary">
                  <p className="text-sm font-medium leading-normal">Educación Futura</p>
                </button>
              </div>
            </div>
            
            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Content */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                {/* Featured Article (Large Card) */}
                <div className="group relative overflow-hidden rounded-xl bg-surface-dark border border-border-dark hover:border-primary/50 transition-all duration-300">
                  <div className="absolute top-0 right-0 p-4 z-10">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Destacado
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFaJ7k8jUdKRntJjDVYEOxUcmQdbT8dBHksJaMa4g3RdWo12QPuqbkL3RWiJFkeACnuyiRgfcdRw77xfdENeo-IJ8YaDmTR1oWv4o1O9qrKOVgWAAAajXfUxKj7n0zqeCtodeq8uSn2GIL28CDM2E__yD9YiJnF6-CX29cmCeU5Bj2tBbFlFxjT5Y05hXpicVwWcYDF5iO0AB41orICR1qZIzEb1RNQtW0GGbIG2Dek_7NU9qFJPwdNp8-Mm9p_c5AUGYB1w_cKcjv')",
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-dark md:bg-gradient-to-r md:from-transparent md:to-surface-dark/20"></div>
                    </div>
                    <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center gap-4">
                      <div className="flex items-center gap-2 text-text-muted text-sm font-medium">
                        <span className="material-symbols-outlined text-[18px]">school</span>
                        <span>Educación Futura</span>
                        <span className="w-1 h-1 rounded-full bg-text-muted"></span>
                        <span>5 min lectura</span>
                      </div>
                      <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight group-hover:text-primary transition-colors">
                        El Futuro de la Educación con IA Generativa
                      </h3>
                      <p className="text-text-muted text-base font-normal leading-relaxed line-clamp-3">
                        Descubre cómo las instituciones están transformando el aprendizaje con herramientas personalizadas y tutores virtuales que se adaptan a cada estudiante.
                      </p>
                      <div className="pt-2">
                        <button className="flex items-center gap-2 text-white font-bold text-sm hover:text-primary transition-colors group/btn">
                          Leer artículo completo
                          <span className="material-symbols-outlined text-[18px] transition-transform group-hover/btn:translate-x-1">
                            arrow_forward
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Article Grid (2 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card 1 */}
                  <article className="flex flex-col rounded-xl bg-surface-dark border border-border-dark overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-primary/10">
                    <div className="h-48 overflow-hidden relative">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAG19WIhNCyozIhgzsSNb8ZZ4lOfQJ3gaOF42k4hXgAWP7IaB5bGeOtLdeUriTSPRf8Pdw_e2SCoW0eRoT4UNraBzw2LQCs8EikrGTGq6k0biDhmKcVcEPMcTPlrOs-lXo7Y1TEL8q-_mv2y4e193b3eT5WlWUOI4ty-XtzGbOzkKmdJ5VxtLabniExehVfmMDIE2fm6BGp7DAq8wFJrHPLIgjtV5vqEXWK6NxRtaC263Qt6tGYBfOPLtnJSv8xwMM5Aa5Vcp_aeAEw')",
                        }}
                      ></div>
                    </div>
                    <div className="flex flex-col flex-1 p-5 gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-primary text-xs font-bold uppercase tracking-wider">
                          Prompt Engineering
                        </span>
                        <span className="text-text-muted text-xs">Hace 2 días</span>
                      </div>
                      <h4 className="text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                        Domina el Contexto: Guía Avanzada de Prompting
                      </h4>
                      <p className="text-text-muted text-sm leading-relaxed line-clamp-3 mb-2">
                        Aprende a estructurar tus prompts para obtener respuestas precisas y evitar alucinaciones en modelos LLM.
                      </p>
                      <div className="mt-auto pt-2 border-t border-white/5 flex items-center justify-between">
                        <span className="text-text-muted text-xs font-medium">8 min lectura</span>
                        <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">
                          arrow_outward
                        </span>
                      </div>
                    </div>
                  </article>
                  
                  {/* Card 2 */}
                  <article className="flex flex-col rounded-xl bg-surface-dark border border-border-dark overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-primary/10">
                    <div className="h-48 overflow-hidden relative">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBghIFKLKoORNmiM9XHIrrcYDVCEA1pkidwkliBdBlfrpPynURpFUNVrZxZjKFTJDXAHU5yiCvBQXIHXTD9Wzjsny9BJEEoZmrPvpMVE3WgVJxtxl92YGhS1QeP4s-OMbyZNEcukIc1b75ar19bYymmTWknVv-oMzVIzZw5JxZL6w0-RaKcs2wIhGwZKcGEIPr8NB_2ofKJjEJDTbqONGwM-7_pnFWgBLXfo1N2Vf8VFUW9qOOwryBQrRei6U8SlgE1udENZmtq_5m')",
                        }}
                      ></div>
                    </div>
                    <div className="flex flex-col flex-1 p-5 gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-primary text-xs font-bold uppercase tracking-wider">Marketing</span>
                        <span className="text-text-muted text-xs">Hace 5 días</span>
                      </div>
                      <h4 className="text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                        Automatizando el SEO con Agentes de IA
                      </h4>
                      <p className="text-text-muted text-sm leading-relaxed line-clamp-3 mb-2">
                        Cómo configurar un flujo de trabajo que investiga keywords, redacta borradores y optimiza meta-tags automáticamente.
                      </p>
                      <div className="mt-auto pt-2 border-t border-white/5 flex items-center justify-between">
                        <span className="text-text-muted text-xs font-medium">6 min lectura</span>
                        <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">
                          arrow_outward
                        </span>
                      </div>
                    </div>
                  </article>
                  
                  {/* Card 3 */}
                  <article className="flex flex-col rounded-xl bg-surface-dark border border-border-dark overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-primary/10">
                    <div className="h-48 overflow-hidden relative">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCcyttgE1qcs8upct8IXWcCandjfR11d8OafDwkmllRWg2ZmgG48iG-1OYgwy-xzACGPp93XKdTNEahGDBdBUTNHvA6l9YFsDYj3Bd4zVFwo2r2rGHjp7R2SiYHCs_Fp3mbKdfM5iX7ly3YJe7kgsiB_zQoV30P890lsHJ_0daaS5Gl3oNSiWVQHCzYWJgJE9Ym_6b9c0J_Z6nAJQ2oehvsYKJbUrGFGKsIjoPhBds8EkuyMCYaaI--I35R-Kp1bQ_PO3KIuURqqOca')",
                        }}
                      ></div>
                    </div>
                    <div className="flex flex-col flex-1 p-5 gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-primary text-xs font-bold uppercase tracking-wider">
                          Casos de Estudio
                        </span>
                        <span className="text-text-muted text-xs">Hace 1 semana</span>
                      </div>
                      <h4 className="text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                        Caso TechEd: +40% de Retención Estudiantil
                      </h4>
                      <p className="text-text-muted text-sm leading-relaxed line-clamp-3 mb-2">
                        Analizamos cómo una plataforma online integró tutores personalizados basados en GPT-4 para mejorar el engagement.
                      </p>
                      <div className="mt-auto pt-2 border-t border-white/5 flex items-center justify-between">
                        <span className="text-text-muted text-xs font-medium">10 min lectura</span>
                        <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">
                          arrow_outward
                        </span>
                      </div>
                    </div>
                  </article>
                  
                  {/* Card 4 */}
                  <article className="flex flex-col rounded-xl bg-surface-dark border border-border-dark overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-primary/10">
                    <div className="h-48 overflow-hidden relative">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD27TXSQXHGd9mY1xm9vWqgPy7HdiY5LNjIM2BFYFka-e_PRMcRiZ9Vgv_y4ery4ZbEMU3J6kKzaWi6afPkcpMrfrFARN-9yrIANY0VB5B3MQuHHJHH-w1yekuVbzHrYO9XOdLqtIITW_-yMR4d3L6QoTVT-MTEaLaL93H0I3sYw7e4c79_xvAWUh1WjLWXX7oP__2xNqGVoQ9-kD4U4lvsLA2OJSSiSYedHseBpFL9elHRxPzDXdulU8nMCfA6MRqMb8HPnCL4Vrdc')",
                        }}
                      ></div>
                    </div>
                    <div className="flex flex-col flex-1 p-5 gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-primary text-xs font-bold uppercase tracking-wider">
                          Automatización
                        </span>
                        <span className="text-text-muted text-xs">Hace 2 semanas</span>
                      </div>
                      <h4 className="text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                        Ética y Privacidad en la Implementación de IA
                      </h4>
                      <p className="text-text-muted text-sm leading-relaxed line-clamp-3 mb-2">
                        Guía práctica para directivos: cómo asegurar que tus datos y los de tus clientes estén protegidos al usar APIs de terceros.
                      </p>
                      <div className="mt-auto pt-2 border-t border-white/5 flex items-center justify-between">
                        <span className="text-text-muted text-xs font-medium">7 min lectura</span>
                        <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">
                          arrow_outward
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
                
                {/* Pagination / Load More */}
                <div className="flex justify-center pt-8">
                  <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-border-dark text-white hover:bg-surface-dark hover:border-primary hover:text-primary transition-all font-medium">
                    <span className="material-symbols-outlined">refresh</span>
                    Cargar más artículos
                  </button>
                </div>
                
                {/* Newsletter Section (Inline) */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-dark to-background-dark border border-border-dark p-8 md:p-12 mt-8">
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-md">
                      <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
                        <span className="material-symbols-outlined text-sm">mail</span>
                        Newsletter
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-2">
                        Un prompt semanal de alto impacto.
                      </h3>
                      <p className="text-text-muted">
                        Recibe cada martes una estrategia de IA lista para copiar y pegar que te ahorrará horas de trabajo.
                      </p>
                    </div>
                    <div className="w-full md:w-auto flex-1 max-w-sm">
                      <form className="flex flex-col gap-3">
                        <input
                          className="w-full px-4 py-3 rounded-xl bg-[#0f180c] border border-border-dark text-white placeholder:text-text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                          placeholder="tu@email.com"
                          type="email"
                        />
                        <button
                          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-primary/20"
                          type="button"
                        >
                          Suscribirme Gratis
                        </button>
                        <p className="text-center text-xs text-text-muted/60">Sin spam. Date de baja cuando quieras.</p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column: Sidebar (Sticky) */}
              <aside className="lg:col-span-4 space-y-8">
                <div className="sticky top-24 space-y-8">
                  {/* About Card */}
                  <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
                    <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">person</span>
                      Sobre el Autor
                    </h4>
                    <div className="flex items-start gap-4">
                      <div
                        className="w-16 h-16 rounded-full bg-cover bg-center shrink-0 border-2 border-primary/30"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCD4ABCNcbO2oLPDnPWgspGH1OdwL8DqhHxuntpIN_J3gMsuDBUt6wnauU_dlflutz5rHHspPO6XPSallo9Bcx7CVRwxGuFYC78Tf3-SptRQ_dkkCep0jMW6C974PHwNw50-BZKWaU8Mo6pl4zE23Cnc_8ogwGt8A0ZwfOpBF4U2sLPiLPHHwUR5ci7pXR7ITASkPg1Xhm3Z1FMUJI5SD_AN6XWpoqM8037Q5BWr-AkYbheJvhr2hJrNtbzUJgRmayAMzVFlBF33cn6')",
                        }}
                      ></div>
                      <div>
                        <p className="text-white font-bold text-sm">Roberto Andrade F.</p>
                        <p className="text-text-muted text-xs mb-2">Exponential Grow AI & Prompt Engineer</p>
                        <p className="text-text-muted text-sm leading-relaxed">
                          Ayudo a empresas y universidades a integrar IA sin fricción. <a className="text-primary hover:underline" href="#">
                            Leer más
                          </a>.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <a
                        className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg bg-border-dark hover:bg-[#36562c] text-white text-sm font-medium transition-colors"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-[16px]">link</span> LinkedIn
                      </a>
                      <a
                        className="flex-1 flex items-center justify-center gap-2 h-9 rounded-lg bg-border-dark hover:bg-[#36562c] text-white text-sm font-medium transition-colors"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-[16px]">alternate_email</span> Twitter
                      </a>
                    </div>
                  </div>
                  
                  {/* Popular/Top Reads */}
                  <div className="bg-surface-dark border border-border-dark rounded-xl p-6">
                    <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">trending_up</span>
                      Más Leídos
                    </h4>
                    <div className="flex flex-col gap-4">
                      <a className="group flex gap-3 items-start" href="#">
                        <span className="text-primary font-bold text-lg opacity-50 group-hover:opacity-100">01</span>
                        <div>
                          <h5 className="text-white text-sm font-medium leading-snug group-hover:text-primary transition-colors">
                            Los 5 errores comunes al implementar ChatGPT en el aula
                          </h5>
                          <span className="text-xs text-text-muted block mt-1">3.2k vistas</span>
                        </div>
                      </a>
                      <div className="h-px w-full bg-white/5"></div>
                      <a className="group flex gap-3 items-start" href="#">
                        <span className="text-primary font-bold text-lg opacity-50 group-hover:opacity-100">02</span>
                        <div>
                          <h5 className="text-white text-sm font-medium leading-snug group-hover:text-primary transition-colors">
                            Midjourney v6 para creativos: Guía de parámetros
                          </h5>
                          <span className="text-xs text-text-muted block mt-1">2.8k vistas</span>
                        </div>
                      </a>
                      <div className="h-px w-full bg-white/5"></div>
                      <a className="group flex gap-3 items-start" href="#">
                        <span className="text-primary font-bold text-lg opacity-50 group-hover:opacity-100">03</span>
                        <div>
                          <h5 className="text-white text-sm font-medium leading-snug group-hover:text-primary transition-colors">
                            La pila tecnológica ideal para agencias de marketing en 2024
                          </h5>
                          <span className="text-xs text-text-muted block mt-1">2.1k vistas</span>
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* CTA Box */}
                  <div className="relative overflow-hidden rounded-xl bg-primary text-white p-6 shadow-lg shadow-primary/20">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                    <h4 className="font-bold text-xl leading-tight mb-2 relative z-10">
                      ¿Necesitas acelerar tu implementación?
                    </h4>
                    <p className="text-sm font-medium mb-4 opacity-90 relative z-10">
                      Agenda una sesión de diagnóstico gratuita de 15 minutos.
                    </p>
                    <button className="w-full bg-background-dark text-white hover:bg-white hover:text-background-dark font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 relative z-10">
                      <span>Reservar Ahora</span>
                      <span className="material-symbols-outlined text-sm">calendar_month</span>
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  )
}

