import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 pt-24">
          <div className="layout-container flex flex-col">
            <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="@container">
                  <div className="flex flex-col gap-8 px-4 md:flex-row md:items-start">
                    {/* Foto a la izquierda */}
                    <div className="w-[220px] h-[220px] relative rounded-2xl overflow-hidden border border-border-dark shadow-2xl shadow-primary/10 flex-shrink-0 mx-auto md:mx-0">
                      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
                      <div
                        className="w-full h-full bg-center bg-cover bg-no-repeat grayscale hover:grayscale-0 transition-all duration-700"
                        style={{
                          backgroundImage: "url('/raf_nbp_2025.png')",
                        }}
                      ></div>
                    </div>
                    {/* Bloque de texto a la derecha */}
                    <div className="flex flex-col gap-6 flex-1">
                      <div className="flex flex-col gap-4 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-border-dark w-fit">
                          <span className="material-symbols-outlined text-primary text-[18px]">terminal</span>
                          <span className="text-xs font-medium text-primary tracking-wide uppercase">
                            Consultor Estratégico
                          </span>
                        </div>
                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                          Arquitectura del Pensamiento <span className="text-primary">+</span> <br />
                          IA Generativa
                        </h1>
                        <h2 className="text-gray-300 text-base md:text-lg font-normal leading-relaxed max-w-[600px]">
                          No se trata de saber escribir prompts. Se trata de saber pensar el problema. Transformo la educación y el marketing integrando inteligencia artificial en el flujo de trabajo real.
                        </h2>
                      </div>
                      <div className="flex gap-4 pt-2">
                        <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal hover:bg-primary-dark transition-colors">
                          Ver mi trayectoria
                        </button>
                        <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-gray-600 text-white text-base font-medium leading-normal hover:border-primary hover:text-primary transition-colors">
                          Mis servicios
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats & Creds */}
        <section className="py-10 border-y border-border-dark bg-surface-dark/30">
          <div className="px-4 md:px-10 lg:px-40 flex justify-center">
            <div className="max-w-[960px] w-full grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
              <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                <h3 className="text-4xl font-black text-primary">50+</h3>
                <p className="text-sm font-medium text-gray-400">Proyectos Implementados</p>
              </div>
              <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                <h3 className="text-4xl font-black text-white">10k</h3>
                <p className="text-sm font-medium text-gray-400">Alumnos Formados</p>
              </div>
              <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                <h3 className="text-4xl font-black text-white">40+</h3>
                <p className="text-sm font-medium text-gray-400">Charlas Internacionales</p>
              </div>
              <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                <h3 className="text-4xl font-black text-primary">100%</h3>
                <p className="text-sm font-medium text-gray-400">Enfoque a Resultados</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Story & Path */}
        <section className="py-16">
          <div className="layout-container flex flex-col">
            <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <h2 className="text-white text-3xl font-bold leading-tight tracking-tight px-4 pb-10">
                  Mi Historia: <span className="text-gray-400 font-normal">Del Negocio a la Frontera de la IA</span>
                </h2>
                <div className="grid grid-cols-[60px_1fr] gap-x-6 px-4">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center pt-2">
                    <div className="size-12 rounded-full bg-border-dark flex items-center justify-center text-primary z-10 border-4 border-background-dark">
                      <span className="material-symbols-outlined">code</span>
                    </div>
                    <div className="w-[2px] bg-gradient-to-b from-border-dark to-border-dark h-full grow min-h-[100px]"></div>
                  </div>
                  <div className="flex flex-col pb-12 pt-2">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h3 className="text-white text-xl font-bold">Background Técnico y de Negocio</h3>
                      <span className="text-primary bg-primary/10 px-3 py-1 rounded text-sm font-bold w-fit">
                        2016 - 2025
                      </span>
                    </div>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Profesor de las asignaturas de Comercialización y Sistemas de Información Gerencial en la Maestría en Alta Dirección en la UNAM.
                    </p>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Mi experiencia como administrador de bases de dato relacionales y de analista de datos me ha permitido entender la importancia de la calidad de los datos y el manejo eficiente de la estrategia de la información.
                    </p>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="flex flex-col items-center">
                    <div className="w-[2px] bg-border-dark h-6"></div>
                    <div className="size-12 rounded-full bg-border-dark flex items-center justify-center text-white z-10 border-4 border-background-dark shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                      <span className="material-symbols-outlined">smart_toy</span>
                    </div>
                    <div className="w-[2px] bg-gradient-to-b from-border-dark to-primary h-full grow min-h-[100px]"></div>
                  </div>
                  <div className="flex flex-col pb-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h3 className="text-white text-xl font-bold">El Pivote a la IA Generativa</h3>
                      <span className="text-primary bg-primary/10 px-3 py-1 rounded text-sm font-bold w-fit">
                        2022 - 2024
                      </span>
                    </div>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Con la llegada de los primeros LLMs, vi el potencial disruptivo. No me quedé en la superficie; profundicé en la{" "}
                      <span className="italic">ingeniería de prompts</span>, que prefiero llamar{" "}
                      <span className="italic">diseño profesional de peticiones</span>, y el{" "}
                      <span className="italic">fine-tuning</span>, entendiendo cómo{" "}
                      <span className="italic">hablar</span> con los modelos para obtener resultados consistentes, no aleatorios.
                    </p>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="flex flex-col items-center pb-2">
                    <div className="w-[2px] bg-primary h-6"></div>
                    <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white z-10 border-4 border-background-dark">
                      <span className="material-symbols-outlined font-bold">school</span>
                    </div>
                  </div>
                  <div className="flex flex-col pb-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h3 className="text-white text-xl font-bold">
                        Consultoría y <span className="italic">Enseñar a Pensar</span>
                      </h3>
                      <span className="text-primary bg-primary/10 px-3 py-1 rounded text-sm font-bold w-fit">
                        Actualidad
                      </span>
                    </div>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Hoy, además de atender a empresas apoyo a estudiantes y profesores de universidades a integrar la IA. Mi enfoque es único: enseño la lógica detrás de la herramienta. Si sabes cómo piensa la IA, puedes usar con éxito cualquier modelo actual y futuro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tech Stack Grid */}
        <section className="py-12 bg-[#1a2915]">
          <div className="layout-container flex flex-col">
            <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <h2 className="text-white text-2xl font-bold px-4 mb-8">Plataformas Dominadas</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
                  {/* Card 1 */}
                  <div className="flex flex-col items-center justify-center p-6 bg-background-dark rounded-xl border border-border-dark hover:border-primary transition-colors group cursor-default">
                    <span className="material-symbols-outlined text-4xl text-gray-400 group-hover:text-primary mb-3">
                      chat_bubble
                    </span>
                    <h4 className="text-white font-bold">Text Generation</h4>
                    <p className="text-xs text-gray-500 mt-1">ChatGPT, Claude, Gemini, Perplexity, LMArena</p>
                  </div>

                  {/* Card 2 */}
                  <div className="flex flex-col items-center justify-center p-6 bg-background-dark rounded-xl border border-border-dark hover:border-primary transition-colors group cursor-default">
                    <span className="material-symbols-outlined text-4xl text-gray-400 group-hover:text-primary mb-3">
                      search
                    </span>
                    <h4 className="text-white font-bold">Deep Research</h4>
                    <p className="text-xs text-gray-500 mt-1">Perplexity, Claude</p>
                  </div>
                  
                  {/* Card 3 */}
                  <div className="flex flex-col items-center justify-center p-6 bg-background-dark rounded-xl border border-border-dark hover:border-primary transition-colors group cursor-default">
                    <span className="material-symbols-outlined text-4xl text-gray-400 group-hover:text-primary mb-3">
                      image
                    </span>
                    <h4 className="text-white font-bold">Image Gen</h4>
                    <p className="text-xs text-gray-500 mt-1">Nano Banana, ChatGPT, Stable Diff.</p>
                  </div>
                  
                                    
                  {/* Card 4 */}
                  <div className="flex flex-col items-center justify-center p-6 bg-background-dark rounded-xl border border-border-dark hover:border-primary transition-colors group cursor-default">
                    <span className="material-symbols-outlined text-4xl text-gray-400 group-hover:text-primary mb-3">
                      query_stats
                    </span>
                    <h4 className="text-white font-bold">Data Analysis</h4>
                    <p className="text-xs text-gray-500 mt-1">Python, Power BI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Manifesto Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="layout-container flex flex-col">
            <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
              <div className="layout-content-container flex flex-col max-w-[800px] flex-1">
                <div className="relative bg-gradient-to-br from-surface-dark to-background-dark border border-primary/30 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_-10px_rgba(99,102,241,0.1)]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center">
                    Manifiesto <span className="text-primary">IA Responsable</span>
                  </h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="mt-1 min-w-[24px] text-primary">
                        <span className="material-symbols-outlined">check_circle</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Estrategia sobre Velocidad</h4>
                        <p className="text-gray-400 mt-1">
                          La IA puede generar contenido rápido, pero solo la estrategia humana genera impacto. No busco llenar internet de ruido, busco relevancia.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 min-w-[24px] text-primary">
                        <span className="material-symbols-outlined">psychology</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Pensamiento Crítico "Human-in-the-Loop"</h4>
                        <p className="text-gray-400 mt-1">
                          La automatización total es un mito peligroso. La supervisión humana experta es lo que convierte un output genérico en una pieza de conversión.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="mt-1 min-w-[24px] text-primary">
                        <span className="material-symbols-outlined">verified_user</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Ética y Transparencia</h4>
                        <p className="text-gray-400 mt-1">
                          Utilizamos la IA para potenciar capacidades, no para engañar. El uso responsable es la única vía para un crecimiento sostenible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Footer */}
        <section className="py-16 border-t border-border-dark bg-[#0f190c]">
          <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
            <div className="max-w-[960px] flex flex-col items-center text-center gap-6">
              <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
                ¿Listo para transformar tu flujo de trabajo?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                Agenda una sesión estratégica de 15 minutos para evaluar cómo podemos integrar IA generativa en tu educación o marketing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center">
                <button className="flex items-center justify-center gap-2 rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold leading-normal hover:bg-primary-dark hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                  <span className="material-symbols-outlined">calendar_month</span>
                  Reservar Sesión
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg h-14 px-8 bg-surface-dark border border-border-dark text-white text-lg font-bold leading-normal hover:bg-border-dark transition-colors w-full sm:w-auto">
                  Ver Casos de Éxito
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  )
}

