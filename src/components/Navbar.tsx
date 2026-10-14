import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight, Sparkles, Smartphone, Globe } from 'lucide-react'
import { COMPANY_INFO } from '../data/portfolioData'

interface NavbarProps {
  onOpenContact?: () => void
}

export const Navbar = ({ onOpenContact }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-blue-500/20">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-lg tracking-tighter">
                  AC
                </span>
              </div>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  {COMPANY_INFO.name}
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  {COMPANY_INFO.domain}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block tracking-wide">
                Product & Venture Studio
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/90 p-1.5 rounded-full border border-slate-200 shadow-sm backdrop-blur-md">
            <a 
              href="#mvps" 
              className="px-4 py-1.5 text-xs lg:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all flex items-center gap-1.5"
            >
              <Smartphone className="w-3.5 h-3.5 text-blue-600" />
              Flagship MVPs
            </a>
            <a 
              href="#deployments" 
              className="px-4 py-1.5 text-xs lg:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-600" />
              Deployments
            </a>
            <a 
              href="#tech" 
              className="px-4 py-1.5 text-xs lg:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
            >
              Tech Stack
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              onClick={onOpenContact}
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white hover:opacity-95 transition-all shadow-md shadow-blue-500/20 active:scale-95 gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Build With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col gap-1">
            <a 
              href="#mvps" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              <Smartphone className="w-4 h-4 text-blue-600" />
              Flagship MVPs (DineFlow & DairyPulse)
            </a>
            <a 
              href="#deployments" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              <Globe className="w-4 h-4 text-indigo-600" />
              Client Deployments (Chasma Ghar, Vishvakarma)
            </a>
            <a 
              href="#tech" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Tech Stack & Architecture
            </a>
          </div>

          <div className="pt-2 border-t border-slate-200">
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false)
                if (onOpenContact) onOpenContact()
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-md"
            >
              <span>Start a Project with Alpha Comrade</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
