import { Globe, Bot, ShoppingBag, Eye, Factory, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { LIVE_DEPLOYMENTS } from '../data/portfolioData'

export const DeploymentsSection = () => {
  return (
    <section id="deployments" className="py-24 relative bg-white border-b border-slate-200 overflow-hidden">
      
      {/* Decorative gradient blur */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono font-semibold mb-3">
            <Globe className="w-3.5 h-3.5" />
            CLIENT PLATFORMS & PRODUCTION DEPLOYMENTS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Live Ventures & <span className="text-gradient-cyan">Deployed Systems</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-sm sm:text-base mt-3">
            Beyond our 2 flagship MVPs, explore client web apps and automation engines actively delivering value in production.
          </p>
        </div>

        {/* Deployments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LIVE_DEPLOYMENTS.map((proj) => {
            const isChasma = proj.id === 'chasma-ghar'
            const isVishva = proj.id === 'vishvakarma'
            const isBot = proj.id === 'founder-outreach-bot'

            return (
              <div 
                key={proj.id}
                className="bg-white p-7 rounded-3xl border border-slate-200 hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-blue-500/5 relative overflow-hidden"
              >
                {/* Glow accent in top right */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none" />

                <div>
                  {/* Category & Status Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm">
                        {isChasma && <Eye className="w-5 h-5 text-blue-600" />}
                        {isVishva && <Factory className="w-5 h-5 text-amber-600" />}
                        {isBot && <Bot className="w-5 h-5 text-purple-600" />}
                        {!isChasma && !isVishva && !isBot && <ShoppingBag className="w-5 h-5 text-emerald-600" />}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block font-medium">
                          {proj.category}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {proj.title}
                        </h3>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      {proj.status}
                    </span>
                  </div>

                  {/* Subtitle / Tagline */}
                  <p className="text-xs font-semibold text-blue-700 mb-2.5">
                    {proj.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {proj.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2 mb-6">
                    {proj.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech tags + Link */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tags.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-100 border border-slate-200 text-slate-600 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  {proj.liveUrl ? (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-blue-700 hover:text-blue-800 font-semibold text-xs transition-all shadow-sm"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Visit Live Domain: {proj.liveUrl.replace('https://', '')}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      Internal Automation Engine • Deployed Locally & Cloud VPS
                    </div>
                  )}
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
