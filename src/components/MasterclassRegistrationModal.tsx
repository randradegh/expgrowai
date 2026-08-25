import { useState, FormEvent } from 'react'

interface MasterclassRegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

const FALLBACK_EMAIL = 'randrade@expgrowai.mx'

const GIROS = [
  'Clínica / médico',
  'Comercio / retail',
  'Automatización / industrial',
  'Servicios profesionales',
  'Otro',
]

type Step = 'form' | 'email_sent' | 'email_error'

export default function MasterclassRegistrationModal({ isOpen, onClose }: MasterclassRegistrationModalProps) {
  const [step, setStep] = useState<Step>('form')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    giro: GIROS[0],
    ciudad: '',
  })
  const [isSending, setIsSending] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  if (!isOpen) return null

  const reset = () => {
    setStep('form')
    setFormData({ name: '', email: '', whatsapp: '', giro: GIROS[0], ciudad: '' })
    setIsSending(false)
    setErrorMessage('')
    onClose()
  }

  const handleEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSending(true)
    setErrorMessage('')
    const lines = [
      'Hola Roberto, quiero reservar mi lugar en la master class gratuita "Automatiza tu PYME con Agentes de IA".',
      '',
      `Nombre: ${formData.name}`,
      `Email: ${formData.email}`,
      `Giro: ${formData.giro}`,
      `Ciudad: ${formData.ciudad}`,
    ]
    if (formData.whatsapp.trim()) {
      lines.splice(4, 0, `WhatsApp: ${formData.whatsapp}`)
    }
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: [
            lines.join('\n'),
            '',
            '(Registrado desde la página de la master class)',
          ].join('\n'),
        }),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || data.error || 'No se pudo registrar tu lugar.')
      }
      setStep('email_sent')
    } catch (error) {
      setStep('email_error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'No se pudo registrar tu lugar. Escríbeme directamente a randrade@expgrowai.mx con tu nombre y giro.',
      )
    } finally {
      setIsSending(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white placeholder:text-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={reset}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-surface-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10 flex-shrink-0">
          <h2 className="text-2xl font-black text-white">
            {step === 'form' && 'Reserva tu lugar'}
            {step === 'email_sent' && '¡Lugar reservado!'}
            {step === 'email_error' && 'Hubo un problema'}
          </h2>
          <button
            onClick={reset}
            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            aria-label="Cerrar"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          {step === 'form' && (
            <>
              <p className="text-gray-400 text-sm">
                Cupo limitado a 30 personas. Regístrate y te confirmo por email (o por WhatsApp si
                nos lo dejas) con el link de Google Meet.
              </p>
              <form onSubmit={handleEmail} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="mc-name" className="block text-sm font-bold text-white mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="mc-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="mc-email" className="block text-sm font-bold text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="mc-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="mc-whatsapp" className="block text-sm font-bold text-white mb-2">
                      WhatsApp <span className="font-normal text-gray-500">(opcional, para confirmación)</span>
                    </label>
                    <input
                      type="tel"
                      id="mc-whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="55 1234 5678"
                    />
                  </div>
                  <div>
                    <label htmlFor="mc-ciudad" className="block text-sm font-bold text-white mb-2">
                      Ciudad <span className="font-normal text-gray-500">(opcional)</span>
                    </label>
                    <input
                      type="text"
                      id="mc-ciudad"
                      name="ciudad"
                      value={formData.ciudad}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Ciudad de México"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="mc-giro" className="block text-sm font-bold text-white mb-2">
                    ¿A qué se dedica tu negocio? *
                  </label>
                  <select
                    id="mc-giro"
                    name="giro"
                    value={formData.giro}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    {GIROS.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full px-6 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSending ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      'Reservar mi lugar'
                    )}
                  </button>
                </div>
              </form>
            </>
          )}

          {step === 'email_sent' && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">¡Lugar reservado!</h3>
              <p className="text-gray-400">
                Te llegarán a tu correo la confirmación, el link de Google Meet y el horario exacto
                de la master class.
              </p>
            </div>
          )}

          {step === 'email_error' && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-red-400 text-4xl">error_outline</span>
              </div>
              <h3 className="text-xl font-bold text-white">No pudo enviarse tu registro</h3>
              <p className="text-red-400 text-sm">{errorMessage}</p>
              <p className="text-xs text-gray-500">
                Si persiste, escríbeme directamente a{' '}
                <a href={`mailto:${FALLBACK_EMAIL}`} className="text-primary font-bold">
                  {FALLBACK_EMAIL}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}