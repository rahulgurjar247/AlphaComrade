import { useState } from 'react'
import { Terminal, Plus, Minus, Send, Utensils, Milk } from 'lucide-react'

export const InteractiveSimulator = () => {
  const [activeTab, setActiveTab] = useState<'dineflow' | 'dairy'>('dineflow')

  // DineFlow simulator state
  const [cart, setCart] = useState<{ [key: string]: number }>({
    'panner-tika': 2,
    'pizza-hut': 1,
    'maggi': 0
  })
  const [tableStatus, setTableStatus] = useState<'idle' | 'sent' | 'cooking' | 'ready' | 'served'>('served')
  const [lastOrderTime, setLastOrderTime] = useState<string>('00:36')

  const menuItems = [
    { id: 'panner-tika', name: 'Panner tika', category: 'Starters', price: 200, discountPrice: 249, off: '20% OFF' },
    { id: 'pizza-hut', name: 'Pizza hut', category: 'Pizza', price: 149, discountPrice: 199, off: '25% OFF' },
    { id: 'maggi', name: 'Maggie', category: 'Noodles', price: 99, discountPrice: 139, off: '29% OFF' }
  ]

  const updateCart = (id: string, delta: number) => {
    setCart(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }))
  }

  const billTotal = menuItems.reduce((acc, item) => acc + (cart[item.id] || 0) * item.price, 0)
  const totalItemCount = Object.values(cart).reduce((a, b) => a + b, 0)

  const handleSendOrder = () => {
    if (totalItemCount === 0) return
    setTableStatus('sent')
    const now = new Date()
    setLastOrderTime(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`)

    setTimeout(() => setTableStatus('cooking'), 1200)
    setTimeout(() => setTableStatus('ready'), 2800)
    setTimeout(() => setTableStatus('served'), 4500)
  }

  // DairyPulse simulator state
  const [milkType, setMilkType] = useState<'cow' | 'buffalo'>('buffalo')
  const [litres, setLitres] = useState<number>(12.5)
  const [fat, setFat] = useState<number>(6.8)
  const [snf, setSnf] = useState<number>(8.8)
  const [farmerName, setFarmerName] = useState<string>('Ram Singh (#04)')
  const [ledgerEntries, setLedgerEntries] = useState<Array<{ id: number; name: string; type: string; litres: number; fat: number; rate: number; total: number; time: string }>>([
    { id: 1, name: 'Ram Singh (#04)', type: 'Buffalo', litres: 12.5, fat: 6.8, rate: 44.20, total: 552.50, time: '07:15 AM' },
    { id: 2, name: 'Suresh Patel (#11)', type: 'Cow', litres: 8.0, fat: 4.2, rate: 39.00, total: 312.00, time: '07:22 AM' }
  ])

  // Simple formula: base rate + fat coefficient + snf coefficient
  const computedRate = milkType === 'buffalo' 
    ? +(22 + (fat * 2.8) + (snf * 0.4)).toFixed(2)
    : +(20 + (fat * 3.4) + (snf * 0.5)).toFixed(2)

  const computedTotal = +(litres * computedRate).toFixed(2)

  const handleAddLedgerEntry = () => {
    const newEntry = {
      id: Date.now(),
      name: farmerName,
      type: milkType === 'buffalo' ? 'Buffalo' : 'Cow',
      litres,
      fat,
      rate: computedRate,
      total: computedTotal,
      time: 'Just now'
    }
    setLedgerEntries([newEntry, ...ledgerEntries])
  }

  return (
    <section id="simulator" className="py-20 relative bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold mb-3">
            <Terminal className="w-3.5 h-3.5" />
            LIVE BROWSER SIMULATOR
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Test Our Logic in <span className="text-gradient-cyan">Real Time</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Experience the core business algorithms and order workflows built into our active products.
          </p>

          {/* Selector */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-slate-200/80 border border-slate-300">
            <button
              onClick={() => setActiveTab('dineflow')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'dineflow'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>DineFlow POS: Live Table Order & KOT</span>
            </button>
            <button
              onClick={() => setActiveTab('dairy')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'dairy'
                  ? 'bg-white text-emerald-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Milk className="w-3.5 h-3.5" />
              <span>DairyPulse: FAT/SNF Rate Engine & Ledger</span>
            </button>
          </div>
        </div>

        {/* Simulator Box */}
        {activeTab === 'dineflow' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl">
            
            {/* Left: Customer Menu & Table Cart */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
                    <h3 className="font-bold text-slate-900 text-base">Table 5 (QR Customer Session)</h3>
                  </div>
                  <p className="text-xs text-slate-500">Zero-install customer order experience</p>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200">
                  Token #1AE740
                </span>
              </div>

              {/* Menu items list */}
              <div className="space-y-3">
                {menuItems.map(item => (
                  <div key={item.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:border-slate-300 transition-all">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm">{item.name}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                          {item.off}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        <span className="text-blue-700 font-bold">₹{item.price}</span>{' '}
                        <span className="line-through text-slate-400 text-[11px]">₹{item.discountPrice}</span> • {item.category}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
                      <button
                        onClick={() => updateCart(item.id, -1)}
                        className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 text-center font-mono font-bold text-sm text-slate-900">
                        {cart[item.id] || 0}
                      </span>
                      <button
                        onClick={() => updateCart(item.id, 1)}
                        className="w-7 h-7 rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order total & submit action */}
              <div className="pt-2">
                <div className="flex justify-between items-center mb-3 text-sm">
                  <span className="text-slate-600">Total Billed Items: <strong className="text-slate-900">{totalItemCount}</strong></span>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 block font-medium">Total Bill Amount</span>
                    <span className="text-xl font-extrabold text-slate-900">₹{billTotal}</span>
                  </div>
                </div>

                <button
                  onClick={handleSendOrder}
                  disabled={totalItemCount === 0}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                    totalItemCount > 0
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/25 active:scale-98 cursor-pointer'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Order to Kitchen Display (KOT)</span>
                </button>
              </div>
            </div>

            {/* Right: Kitchen & Waiter POS View */}
            <div className="lg:col-span-6 space-y-5 bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-slate-900 text-sm">Kitchen Display & KOT Queue</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">Live Socket.io Feed</span>
                </div>

                {/* Pipeline Stages */}
                <div className="grid grid-cols-4 gap-1.5 my-4 text-center">
                  {[
                    { key: 'sent', label: 'New', color: 'bg-blue-100 text-blue-800 border-blue-300' },
                    { key: 'cooking', label: 'Cooking', color: 'bg-amber-100 text-amber-800 border-amber-300' },
                    { key: 'ready', label: 'Ready', color: 'bg-purple-100 text-purple-800 border-purple-300' },
                    { key: 'served', label: 'Served', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
                  ].map(step => (
                    <div
                      key={step.key}
                      className={`py-1.5 px-1 rounded-lg text-[11px] font-mono font-semibold border transition-all ${
                        tableStatus === step.key
                          ? `${step.color} ring-2 ring-blue-500 shadow-sm font-bold`
                          : 'bg-white text-slate-400 border-slate-200'
                      }`}
                    >
                      {step.label}
                    </div>
                  ))}
                </div>

                {/* Order card preview matching the user screenshot */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-3 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-bold border border-blue-200">
                        Table 5
                      </span>
                      <span className="text-xs text-slate-500 font-mono">#1AE740</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-slate-500">{lastOrderTime}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        tableStatus === 'served' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' :
                        tableStatus === 'cooking' ? 'bg-amber-100 text-amber-800 border border-amber-300' :
                        tableStatus === 'ready' ? 'bg-purple-100 text-purple-800 border border-purple-300' :
                        'bg-blue-100 text-blue-800 border border-blue-300'
                      }`}>
                        {tableStatus}
                      </span>
                    </div>
                  </div>

                  {/* Active items */}
                  <div className="space-y-1.5 pt-1 text-xs">
                    {menuItems.filter(item => (cart[item.id] || 0) > 0).map(item => (
                      <div key={item.id} className="flex justify-between text-slate-700">
                        <span>
                          <strong className="text-blue-700 font-bold">{cart[item.id]}x</strong> {item.name}
                        </span>
                        <span className="font-mono text-slate-600 font-medium">₹{cart[item.id] * item.price}</span>
                      </div>
                    ))}
                    {totalItemCount === 0 && (
                      <div className="text-center py-4 text-slate-400 text-xs">No active items. Add dishes from the menu!</div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-medium">BILL TOTAL</span>
                    <span className="text-base font-bold text-slate-900">₹{billTotal}</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 flex items-center justify-between pt-2">
                <span>Socket latency: <strong className="text-emerald-700 font-semibold">24ms</strong></span>
                <span>Active Table Count: <strong className="text-slate-800 font-semibold">1/1 (Table 5)</strong></span>
              </div>
            </div>

          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl">
            
            {/* Left: Input Calculator */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Milk Entry & Automatic Pricing</h3>
                  <p className="text-xs text-slate-500">Shift: Morning Milk Procurement</p>
                </div>
                <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-100 border border-slate-200">
                  <button
                    onClick={() => setMilkType('cow')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold ${milkType === 'cow' ? 'bg-white text-teal-700 shadow-sm' : 'text-slate-500'}`}
                  >
                    Cow
                  </button>
                  <button
                    onClick={() => setMilkType('buffalo')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold ${milkType === 'buffalo' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500'}`}
                  >
                    Buffalo
                  </button>
                </div>
              </div>

              {/* Farmer Select & Sliders */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Select Farmer Account:
                  </label>
                  <select
                    value={farmerName}
                    onChange={(e) => setFarmerName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 outline-none focus:border-emerald-500"
                  >
                    <option value="Ram Singh (#04)">Ram Singh (#04) - Buffalo Herd</option>
                    <option value="Suresh Patel (#11)">Suresh Patel (#11) - Cow Dairy</option>
                    <option value="Dinesh Sharma (#18)">Dinesh Sharma (#18) - Mixed</option>
                    <option value="Mukesh Verma (#25)">Mukesh Verma (#25) - Cooperative Member</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1.5">
                    <span>Milk Quantity (Litres):</span>
                    <strong className="text-emerald-700 font-mono text-sm">{litres.toFixed(1)} L</strong>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="0.5"
                    value={litres}
                    onChange={(e) => setLitres(parseFloat(e.target.value))}
                    className="w-full accent-emerald-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1.5">
                    <span>FAT Percentage (%):</span>
                    <strong className="text-blue-700 font-mono text-sm">{fat.toFixed(1)}%</strong>
                  </div>
                  <input
                    type="range"
                    min="3.0"
                    max="10.0"
                    step="0.1"
                    value={fat}
                    onChange={(e) => setFat(parseFloat(e.target.value))}
                    className="w-full accent-blue-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1.5">
                    <span>SNF Quality (%):</span>
                    <strong className="text-purple-700 font-mono text-sm">{snf.toFixed(1)}%</strong>
                  </div>
                  <input
                    type="range"
                    min="7.5"
                    max="10.0"
                    step="0.1"
                    value={snf}
                    onChange={(e) => setSnf(parseFloat(e.target.value))}
                    className="w-full accent-purple-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Live Calculation Output Card */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] text-slate-500 font-medium">Calculated Rate / Litre</span>
                  <div className="text-2xl font-extrabold text-emerald-700 font-mono">₹{computedRate}</div>
                  <span className="text-[10px] text-slate-500">Dynamic formula applied</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-500 font-medium">Total Credit to Farmer</span>
                  <div className="text-2xl font-extrabold text-slate-900 font-mono">₹{computedTotal}</div>
                  <span className="text-[10px] text-slate-500">{litres}L × ₹{computedRate}</span>
                </div>
              </div>

              <button
                onClick={handleAddLedgerEntry}
                className="w-full py-3 px-4 rounded-xl font-semibold text-sm bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Plus className="w-4 h-4" />
                <span>Record into Daily Farmer Ledger (Khata)</span>
              </button>
            </div>

            {/* Right: Live Farmer Ledger Feed */}
            <div className="lg:col-span-6 space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-slate-900 text-sm">Shift Ledger & Khata Balance</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 font-semibold">Auto Synced</span>
                </div>

                <div className="space-y-2 mt-4 max-h-[280px] overflow-y-auto pr-1">
                  {ledgerEntries.map(entry => (
                    <div key={entry.id} className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between hover:border-emerald-300 transition-all shadow-sm">
                      <div>
                        <div className="font-bold text-slate-900 text-xs">{entry.name}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {entry.litres}L • FAT {entry.fat}% • <span className="text-slate-600 font-medium">{entry.type}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-emerald-700 text-xs font-mono">₹{entry.total.toFixed(2)}</div>
                        <div className="text-[10px] text-slate-500 font-mono">₹{entry.rate}/L • {entry.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex justify-between">
                <span>Total Recorded: <strong className="text-slate-800">{ledgerEntries.length} entries</strong></span>
                <span>Cumulative: <strong className="text-emerald-700">₹{ledgerEntries.reduce((s, e) => s + e.total, 0).toFixed(2)}</strong></span>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  )
}
