export default function Footer() {
  return (
    <footer className="relative py-32 bg-background-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50"></div>
      <div className="max-w-[720px] mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          El futuro es hoy. <br />
          <span className="text-primary">¿Empezamos?</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          No dejes que tu competencia te supere por velocidad. Agenda una llamada de 15 minutos para ver si podemos trabajar juntos.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 h-14 bg-primary hover:bg-primary-dark text-white text-lg font-bold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] hover:-translate-y-1">
            Agendar mi sesión ahora
          </button>
          <button className="w-full sm:w-auto px-8 h-14 border border-white/20 hover:border-white text-white font-bold rounded-full transition-all duration-300 hover:bg-white/5">
            Envíame un email
          </button>
        </div>
      </div>
      <div className="absolute bottom-6 w-full text-center">
        <p className="text-gray-600 text-xs">
          © 2024 Exponential Grow AI - Roberto Andrade F. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

