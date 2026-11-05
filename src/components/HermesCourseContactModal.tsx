import { useState, type ChangeEvent, type FormEvent } from 'react'

interface HermesCourseContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function HermesCourseContactModal({ isOpen, onClose }: HermesCourseContactModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', companyProfession: '', aiExperience: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: [
            'Solicitud de información — Curso Hermes Agent para Principiantes',
            '',
            `Tipo de empresa o profesión: ${formData.companyProfession}`,
            `Experiencia en el uso de IA Generativa: ${formData.aiExperience}`,
          ].join('\n'),
        }),
      })
      const contentType = response.headers.get('content-type')
      if (!contentType?.includes('application/json')) throw new Error('El servidor no respondió correctamente. Intenta de nuevo más tarde.')

      const data = await response.json()
      if (!response.ok) throw new Error(data.message || data.error || 'No se pudo enviar el mensaje.')

      setSubmitStatus('success')
      setFormData({ name: '', email: '', companyProfession: '', aiExperience: '' })
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Error al enviar el mensaje. Inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-xl bg-surface-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-wider">Hermes Agent para Principiantes</p>
            <h2 className="text-xl md:text-2xl font-black text-white mt-1">Solicita información del curso</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors" aria-label="Cerrar">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <span className="material-symbols-outlined text-primary text-5xl mb-3">check_circle</span>
              <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
              <p className="text-gray-400">Te responderemos con información del curso.</p>
            </div>
          ) : (
            <>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Déjanos tus datos para recibir información sobre el curso.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="hermes-course-name" className="block text-sm font-bold text-white mb-2">Nombre *</label>
                  <input id="hermes-course-name" name="name" value={formData.name} onChange={handleChange} required autoComplete="name" className="w-full px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white placeholder:text-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="hermes-course-email" className="block text-sm font-bold text-white mb-2">Email *</label>
                  <input id="hermes-course-email" type="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="email" className="w-full px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white placeholder:text-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" placeholder="tu@email.com" />
                </div>
                <div>
                  <label htmlFor="hermes-course-company-profession" className="block text-sm font-bold text-white mb-2">Tipo de empresa o profesión *</label>
                  <input id="hermes-course-company-profession" name="companyProfession" value={formData.companyProfession} onChange={handleChange} required autoComplete="organization-title" className="w-full px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white placeholder:text-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Empresa, sector o profesión" />
                </div>
                <div>
                  <label htmlFor="hermes-course-ai-experience" className="block text-sm font-bold text-white mb-2">Experiencia en el uso de IA Generativa *</label>
                  <textarea id="hermes-course-ai-experience" name="aiExperience" value={formData.aiExperience} onChange={handleChange} required rows={3} className="w-full px-4 py-3 rounded-xl bg-background-dark border border-white/10 text-white placeholder:text-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none" placeholder="Cuéntanos brevemente qué herramientas has usado y para qué…" />
                </div>
                {submitStatus === 'error' && <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl"><p className="text-red-400 text-sm">{errorMessage}</p></div>}
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={onClose} disabled={isSubmitting} className="flex-1 px-5 py-3 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-colors disabled:opacity-50">Cancelar</button>
                  <button type="submit" disabled={isSubmitting} className="flex-1 px-5 py-3 rounded-full bg-primary hover:bg-primary-dark text-white font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Enviando…' : 'Enviar solicitud'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
