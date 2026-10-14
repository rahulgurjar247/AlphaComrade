import { Code2, Smartphone, Server, Database, Cloud, Zap } from 'lucide-react'

export const TechStackSection = () => {
  const stack = [
    { name: 'React 19 & Vite', desc: 'Fast, responsive web apps', icon: Code2, color: 'text-blue-600' },
    { name: 'React Native & Expo', desc: 'Android & iOS mobile apps', icon: Smartphone, color: 'text-emerald-600' },
    { name: 'Node.js & Express', desc: 'REST APIs & Real-time WebSockets', icon: Server, color: 'text-indigo-600' },
    { name: 'MongoDB & SQLite', desc: 'Scalable cloud & local storage', icon: Database, color: 'text-purple-600' },
    { name: 'Tailwind CSS', desc: 'Clean, modern UI design', icon: Zap, color: 'text-cyan-600' },
    { name: 'Netlify & Cloudflare', desc: 'Fast CDN hosting & security', icon: Cloud, color: 'text-sky-600' }
  ]

  return (
    <section id="tech" className="py-16 relative bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-2">
            TECHNOLOGY
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Core Tech Stack
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Built using modern, fast, and scalable technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stack.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.name}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs hover:border-blue-300 transition-all flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                  <Icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xs">{item.name}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
