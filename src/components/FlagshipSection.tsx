import { useState } from 'react'
import { 
  Layers, 
  CheckCircle2,
  Utensils, 
  Milk
} from 'lucide-react'
import { FLAGSHIP_MVPS } from '../data/portfolioData'

export const FlagshipSection = () => {
  const [activeTab, setActiveTab] = useState<'dineflow' | 'dairy'>('dineflow')
  const [dineflowScreen, setDineflowScreen] = useState<'dashboard' | 'menu'>('dashboard')

  const dineflow = FLAGSHIP_MVPS[0]
  const dairy = FLAGSHIP_MVPS[1]

  return (
    <section id="mvps" className="py-20 relative bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-2">
            <Layers className="w-3.5 h-3.5" />
            FLAGSHIP MOBILE MVPS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our 2 Main Products
          </h2>
          <p className="text-slate-600 text-sm mt-1 max-w-lg mx-auto">
            Hotel QR Ordering System and Smart Dairy Management Mobile App.
          </p>

          {/* Simple Tab Switcher */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab('dineflow')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'dineflow'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>1. DineFlow POS (Hotel App)</span>
            </button>

            <button
              onClick={() => setActiveTab('dairy')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'dairy'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Milk className="w-3.5 h-3.5" />
              <span>2. Smart Dairy OS (Milk App)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: DineFlow POS Showcase */}
        {activeTab === 'dineflow' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/70 p-6 sm:p-8 rounded-3xl border border-slate-200">
            
            {/* Left: Product Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                Hospitality QR System
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {dineflow.title}
                </h3>
                <p className="text-xs text-blue-700 font-medium mt-0.5">
                  {dineflow.tagline}
                </p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {dineflow.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">Key Features:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {dineflow.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {dineflow.tags.map(t => (
                  <span key={t} className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white border border-slate-200 text-slate-700 shadow-2xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Phone Frame with actual screenshots */}
            <div className="lg:col-span-5 flex flex-col items-center">
              
              <div className="inline-flex p-1 rounded-xl bg-white border border-slate-200 mb-3 shadow-2xs">
                <button
                  onClick={() => setDineflowScreen('dashboard')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    dineflowScreen === 'dashboard'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Orders Dashboard
                </button>
                <button
                  onClick={() => setDineflowScreen('menu')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    dineflowScreen === 'menu'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Menu Management
                </button>
              </div>

              {/* Compact Phone Frame */}
              <div className="relative mx-auto w-[260px] sm:w-[280px] rounded-[36px] p-2.5 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 shadow-xl shadow-slate-300/40 border border-slate-300">
                <div className="relative rounded-[28px] overflow-hidden bg-white border border-slate-300 aspect-[9/19.5]">
                  <img
                    src={dineflowScreen === 'dashboard' ? '/images/dineflow-dashboard.png' : '/images/dineflow-menu.png'}
                    alt="DineFlow POS Screenshot"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <span className="text-[11px] text-slate-500 mt-2 font-medium">
                Actual app screenshot
              </span>
            </div>

          </div>
        )}

        {/* Tab 2: Smart Dairy OS Showcase */}
        {activeTab === 'dairy' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/70 p-6 sm:p-8 rounded-3xl border border-slate-200">
            
            {/* Left: Product Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                AgTech Dairy App
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {dairy.title}
                </h3>
                <p className="text-xs text-emerald-700 font-medium mt-0.5">
                  {dairy.tagline}
                </p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {dairy.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">Key Features:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {dairy.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {dairy.tags.map(t => (
                  <span key={t} className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white border border-slate-200 text-slate-700 shadow-2xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Dairy App Preview Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-xs rounded-2xl p-5 bg-white border border-slate-200 shadow-lg">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                    <Milk className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">DairyPulse Mobile</div>
                    <div className="text-[11px] text-emerald-700 font-semibold">React Native (Expo)</div>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-[11px] text-slate-500 font-medium">Morning Shift Collection</div>
                    <div className="text-xl font-bold text-slate-900 mt-0.5">1,480.5 Litres</div>
                    <div className="text-[11px] text-emerald-700 font-medium mt-1">42 Farmers recorded today</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800 font-medium flex justify-between">
                    <span>Auto Rate: FAT & SNF</span>
                    <strong>Active</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  )
}
