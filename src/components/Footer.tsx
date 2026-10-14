import { ArrowUp, Globe, Terminal } from 'lucide-react'
import { COMPANY_INFO } from '../data/portfolioData'

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 p-[1.5px] flex items-center justify-center shadow-md shadow-blue-500/20">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-extrabold text-blue-700 text-sm">
                  AC
                </div>
              </div>
              <div>
                <span className="font-bold text-base text-slate-900">{COMPANY_INFO.name}</span>
                <span className="text-[11px] text-slate-500 block font-mono font-medium">{COMPANY_INFO.domain}</span>
              </div>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              An independent venture studio engineering real-time SaaS products, AgTech mobile operating systems, and automated growth engines.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-slate-600 font-mono">Domain:</span>
              <span className="text-blue-700 font-mono font-bold">{COMPANY_INFO.domain}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] font-mono">
              Venture MVPs & Apps
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#mvps" className="hover:text-blue-600 transition-colors flex items-center gap-1.5 font-medium">
                  <span>DineFlow POS (Hotel App)</span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] bg-blue-50 text-blue-700 border border-blue-200 font-semibold">Live</span>
                </a>
              </li>
              <li>
                <a href="#mvps" className="hover:text-emerald-700 transition-colors flex items-center gap-1.5 font-medium">
                  <span>Smart Dairy OS (Milk App)</span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">Mobile</span>
                </a>
              </li>
              <li>
                <a href="#deployments" className="hover:text-blue-600 transition-colors font-medium">
                  Client Deployments
                </a>
              </li>
              <li>
                <a href="#tech" className="hover:text-blue-600 transition-colors font-medium">
                  Full-Stack Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Live Deployments Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] font-mono">
              Production Client Deployments
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="https://chasmagar.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors flex items-center gap-1.5 font-medium"
                >
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  <span>chasmagar.netlify.app (Optical Eyewear)</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://vishvakarma.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 font-medium"
                >
                  <Globe className="w-3.5 h-3.5 text-indigo-600" />
                  <span>vishvakarma.netlify.app (Engineering)</span>
                </a>
              </li>
              <li>
                <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                  <Terminal className="w-3.5 h-3.5 text-purple-600" />
                  <span>Founder Outreach AI Bot (SQLite Engine)</span>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-500">
            <span>© {new Date().getFullYear()} {COMPANY_INFO.name} ({COMPANY_INFO.domain}).</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-600 font-medium">
              Architected & Built by <strong className="text-slate-900 font-bold">{COMPANY_INFO.founder}</strong>
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-sm"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
