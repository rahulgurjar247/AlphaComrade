import { ArrowRight, Layers, Smartphone, MessageSquare } from 'lucide-react'
import { COMPANY_INFO } from '../data/portfolioData'

export const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-radial-vignette bg-grid-pattern border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Domain Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold mb-5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          <span className="text-blue-700 font-mono">{COMPANY_INFO.domain}</span>
          <span className="text-slate-300">|</span>
          <span>By {COMPANY_INFO.founder}</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
          Building Modern <span className="text-gradient-cyan">Mobile Apps</span> & Web Products
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed font-normal">
          We develop real-world software solutions from hotel QR ordering systems to dairy management mobile apps and high-performance client websites.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <a
            href="#mvps"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-xs sm:text-sm hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 flex items-center gap-2 active:scale-95"
          >
            <span>Explore 2 Mobile MVPs</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#deployments"
            className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-xs sm:text-sm transition-all shadow-sm active:scale-95 flex items-center gap-2"
          >
            <span>View Deployed Projects</span>
          </a>

          <a
            href="#contact"
            className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-blue-600" />
            <span>Contact</span>
          </a>
        </div>

        {/* Compact Quick Summary Bar */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-blue-600" />
            <span><strong>2 Flagship MVPs:</strong> Hotel POS & Dairy App</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span><strong>4+ Live Deployments:</strong> Netlify Hosted</span>
          </div>
        </div>

      </div>
    </section>
  )
}
