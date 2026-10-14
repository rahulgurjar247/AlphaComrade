import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FlagshipSection } from './components/FlagshipSection'
import { DeploymentsSection } from './components/DeploymentsSection'
import { TechStackSection } from './components/TechStackSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export function App() {
  const [contactFocusKey, setContactFocusKey] = useState(0)

  const handleOpenContact = () => {
    setContactFocusKey(prev => prev + 1)
    const contactElem = document.getElementById('contact')
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-700">
      {/* Top Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero with domain branding & live statistics */}
        <Hero />

        {/* 2. Flagship MVPs: DineFlow POS (Hotel App) & DairyPulse OS (Milk App) */}
        <FlagshipSection />

        {/* 3. Client Deployments: chasmagar.netlify.app & vishvakarma.netlify.app */}
        <DeploymentsSection />

        {/* 5. Modern Architecture & Full-Stack Capabilities */}
        <TechStackSection />

        {/* 6. Contact, Project Inquiry & WhatsApp connect */}
        <ContactSection key={contactFocusKey} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
