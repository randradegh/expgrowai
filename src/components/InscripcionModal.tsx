interface InscripcionModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function InscripcionModal({ isOpen, onClose }: InscripcionModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-surface-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10 flex-shrink-0">
          <h2 className="text-2xl font-black text-white">Inscripción</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            aria-label="Cerrar"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm md:text-base">
          <p className="text-gray-400">
            Para realizar tu inscripción debes enviar los siguientes datos por correo:
          </p>

          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-xl flex-shrink-0" aria-hidden>person</span>
              Nombre completo
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-xl flex-shrink-0" aria-hidden>school</span>
              Grado máximo de estudios
            </li>
            
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-xl flex-shrink-0" aria-hidden>phone</span>
              Teléfono (opcional)
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-xl flex-shrink-0" aria-hidden>mail</span>
              Dirección de correo electrónico
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-xl flex-shrink-0" aria-hidden>location_on</span>
              Ciudad y país de residencia
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-xl flex-shrink-0" aria-hidden>psychology</span>
              Experiencia en el manejo de la inteligencia artificial generativa
            </li>
          </ul>

          <div className="pt-2">
            <h3 className="text-lg font-bold text-white mb-3">Pago e Inscripción</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Depositar <strong className="text-white">$1,700</strong> a la siguiente cuenta:</li>
              <li className="pl-4">Roberto Andrade Fonseca</li>
              <li className="pl-4">Banco: Banorte</li>
              <li className="pl-4">Cuenta: 0015014967</li>
              <li className="pl-4">CLABE: 072 180 00015014967 5</li>
            </ul>
          </div>

          <p className="text-gray-400">
            Si requieres factura debes enviar los datos de facturación y se agregará el 16% de IVA al precio del evento.
          </p>

          <p className="text-gray-400">
            Envía una imagen clara del depósito o transferencia a:
          </p>
          <p className="text-primary font-bold break-all">randradedev@gmail.com</p>
          <p className="text-gray-400">
            poniendo en el título del mensaje su nombre y el texto <strong className="text-white">Pago del curso de GenAI en educación</strong>.
          </p>
          <p className="text-gray-400">
            Una vez verificado el pago se enviará un mensaje acreditando el mismo.
          </p>
          <p className="text-gray-400">
            Posteriormente se enviará un correo con los datos para la conexión a la sesión de Meet y algunas indicaciones adicionales sobre el curso.
          </p>

          <p className="text-lg font-bold text-white pt-2">
            ¡Te esperamos para explorar juntos cómo la Inteligencia Artificial puede revolucionar tu enseñanza!
          </p>
        </div>
      </div>
    </div>
  )
}
