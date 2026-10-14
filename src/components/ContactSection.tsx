import { useState, type FormEvent } from 'react'
import { CheckCircle2, MessageSquare, Mail, PhoneCall, ArrowRight, ExternalLink } from 'lucide-react'
import { COMPANY_INFO } from '../data/portfolioData'

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Mobile App / MVP',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const whatsappNumber = COMPANY_INFO.contact.whatsapp || '919999999999'

  const handleSendWhatsApp = (e: FormEvent) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    const text = `*New Inquiry from ${COMPANY_INFO.domain}*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(formData.name)}%0A` +
      `📧 *Email:* ${encodeURIComponent(formData.email)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A` +
      `💼 *Looking for:* ${encodeURIComponent(formData.projectType)}%0A` +
      `📝 *Message:* ${encodeURIComponent(formData.message || 'Hi, I want to discuss a project.')}`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    setSubmitted(true)
  }

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} - ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.projectType}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:${COMPANY_INFO.contact.email}?subject=${subject}&body=${body}`
  }

  const projectOptions = [
    'Mobile App (Android / iOS)',
    'Hotel & Restaurant QR POS System',
    'Dairy Management App',
    'Custom Business Website',
    'Automation Bot / Scraping',
    'Other Work'
  ]

  return (
    <section id="contact" className="py-20 relative bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            GET IN TOUCH
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Contact & Project Inquiries
          </h2>
          <p className="text-slate-600 text-sm mt-1 max-w-xl mx-auto">
            Fill the details below to chat directly with founder <strong className="text-slate-900">{COMPANY_INFO.founder}</strong> on WhatsApp or Email.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left: Direct Contacts */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                  RG
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{COMPANY_INFO.founder}</div>
                  <div className="text-xs text-blue-700 font-medium">Founder • {COMPANY_INFO.name}</div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Directly connect for project discussions, app development, or partnership opportunities.
              </p>
            </div>

            {/* WhatsApp Quick Connect Button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello ${COMPANY_INFO.founder}! I found your website ${COMPANY_INFO.domain} and want to discuss a project.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-emerald-800 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs">WhatsApp / Call</div>
                  <div className="text-[11px] text-emerald-700 font-mono font-semibold">+91 81073 27289</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-emerald-600 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Email Box */}
            <a
              href={`mailto:${COMPANY_INFO.contact.email}`}
              className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900">Email Address</div>
                  <div className="text-[11px] text-slate-500">{COMPANY_INFO.contact.email}</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Right: Message Form */}
          <div className="md:col-span-7">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-lg shadow-slate-100">
              
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">WhatsApp Chat Opened!</h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Your inquiry details have been transferred to WhatsApp. Hit send in WhatsApp to connect with Rahul directly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-all mt-2"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendWhatsApp} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 text-xs outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@gmail.com"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 text-xs outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 text-xs outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 text-xs outline-none transition-all cursor-pointer"
                      >
                        {projectOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message / Requirement
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write brief details about what you need..."
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 text-xs outline-none transition-all placeholder:text-slate-400 resize-none"
                    ></textarea>
                  </div>

                  {/* Two Action Buttons: WhatsApp & Email */}
                  <div className="pt-1 flex flex-col sm:flex-row gap-2">
                    <button
                      type="submit"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Send to WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendEmail}
                      className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 border border-slate-200"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-600" />
                      <span>Send via Email</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center font-medium">
                    Messages are delivered directly to the founder.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
