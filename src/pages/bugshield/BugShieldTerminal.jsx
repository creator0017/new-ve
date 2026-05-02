import { useState, useEffect, useRef } from 'react'

const API = 'http://127.0.0.1:5000/api'

function BugShieldTerminal() {
  const [backendData, setBackendData] = useState({ status: 'READY', logs: [], patch: '' })
  const [displayLogs, setDisplayLogs] = useState([
    { id: 468, payload: "'admin'", status: '200', ok: true },
    { id: 469, payload: "'system'", status: '200', ok: true },
    { id: 470, payload: "'root'", status: '200', ok: true },
  ])
  const [isAttacking, setIsAttacking] = useState(false)
  const logRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`${API}/status`)
        const data = await res.json()
        if (data.status !== backendData.status) {
          setBackendData(data)
          if (data.status === 'CRASHED') {
            setDisplayLogs(prev => [...prev, { id: prev.length + 1, payload: "' OR 1=1 --", status: '500 CRASH', ok: false }])
          }
          if (data.status === 'FIXED') {
            setDisplayLogs(prev => [...prev, { id: prev.length + 1, payload: '[AI PATCH DEPLOYED]', status: 'FIXED', ok: true }])
          }
        }
      } catch (e) {}
    }, 1000)
    return () => clearInterval(interval)
  }, [backendData.status])

  useEffect(() => { if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight }, [displayLogs])

  const handleAttack = async () => {
    setIsAttacking(true)
    setDisplayLogs(prev => [...prev, { id: prev.length + 1, payload: '[ FUZZER STARTED ]', status: 'SCAN', ok: true }])
    try {
      await fetch(`${API}/fuzz-start`, { method: 'POST' })
      const payloads = ['user123', "' OR 1=1 --"]
      for (const p of payloads) {
        setDisplayLogs(prev => [...prev, { id: prev.length + 1, payload: `'${p}'`, status: '...', ok: true }])
        try {
          const res = await fetch(`${API}/login-attempt`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: p, password: p }) })
          if (res.status === 500) { setDisplayLogs(prev => [...prev, { id: prev.length + 1, payload: `'${p}'`, status: '500 CRASH', ok: false }]); break }
          else { setDisplayLogs(prev => [...prev.slice(0, -1), { ...prev[prev.length - 1], status: '200', ok: true }]) }
        } catch (e) {}
        await new Promise(r => setTimeout(r, 1500))
      }
    } catch (e) {}
    setIsAttacking(false)
  }

  const handleDeployPatch = async () => { try { await fetch(`${API}/deploy-patch`, { method: 'POST' }) } catch (e) {} }

  const statusColor = backendData.status === 'CRASHED' ? '#ffb4ab' : backendData.status === 'FIXED' ? '#00ff41' : backendData.status === 'ATTACKING' ? '#f1c100' : '#00ff41'

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#050505', color: '#00ff41', fontFamily: "'Courier New', monospace" }}>
<header className="bg-[#050505] fixed top-0 w-full z-50 flex justify-between items-center px-6 h-14 border-b border-green-500/30 text-sm text-green-400 uppercase tracking-tighter">
         <div className="flex items-center gap-6 h-full">
           <span className="text-lg md:text-2xl font-bold text-green-400 before:content-['>_'] pr-4">TERMINAL_OS_v4.2</span>
          <nav className="hidden md:flex items-center h-full gap-4">
            <span className="h-full flex items-center px-3 text-green-400 border-b-2 border-green-400 pb-1">LOGS</span>
            <span className="h-full flex items-center px-3 text-green-400/50">SYSTEM</span>
            <span className="h-full flex items-center px-3 text-green-400/50">NETWORK</span>
            <span className="h-full flex items-center px-3 text-green-400/50">DEBUG</span>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-base font-bold px-3 py-1.5 border rounded" style={{ color: statusColor, borderColor: statusColor }}>[{backendData.status}]</span>
          <button className="px-4 py-1.5 border border-green-400 bg-green-400/10 text-green-400 font-bold cursor-pointer hover:bg-green-400 hover:text-black">TERMINATE</button>
        </div>
      </header>
      <aside className="hidden md:flex bg-[#050505] fixed left-0 top-14 bottom-0 w-72 flex-col p-5 border-r border-green-500/30 text-sm">
<div className="mb-8 border-b border-green-500/30 pb-4">
           <div className="flex items-center gap-3 mb-2">
             <div className="w-10 h-10 border border-green-400 flex items-center justify-center bg-green-400/10">
               <span className="material-symbols-outlined text-green-400 text-xl">terminal</span>
             </div>
             <div>
               <div className="text-lg font-black text-green-400">OPERATOR_01</div>
               <div className="text-green-400/60 text-xs uppercase tracking-widest">LEVEL_7_ACCESS</div>
             </div>
           </div>
         </div>
        <nav className="flex-1 flex flex-col gap-2">
          <span className="flex items-center gap-3 p-3 text-green-400 font-bold underline decoration-double">DEVICES</span>
          <span className="flex items-center gap-3 p-3 text-green-400/60">ROOT</span>
          <span className="flex items-center gap-3 p-3 text-green-400/60">UPLINK</span>
          <span className="flex items-center gap-3 p-3 text-green-400/60">VAULT</span>
          <span className="flex items-center gap-3 p-3 text-green-400/60">TRASH</span>
        </nav>
      </aside>
<main className="pt-[72px] md:pl-72 flex-1 p-3 md:p-6 min-h-screen overflow-y-auto">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 h-auto">
           <section className="lg:col-span-5 flex flex-col gap-3">
             <div className="border border-green-500/30 bg-[#0e0e0e] flex flex-col">
<header className="border-b border-green-500/30 p-3 md:p-4 bg-green-400/5 flex justify-between items-center">
                  <span className="font-bold text-green-400 text-sm md:text-base">BUGSHIELD v1.0 FUZZ TESTING ENGINE</span>
                 <span className="material-symbols-outlined text-sm md:text-base">wifi_tethering</span>
               </header>
               <div className="p-3 md:p-4 flex flex-col gap-3 md:gap-4">
                  <div className="border border-green-500/30 p-2 md:p-3 bg-[#050505]">
                    <span className="text-green-400/60 mr-2 text-xs md:text-sm">TARGET:</span>
                    <span className="terminal-glow text-xs md:text-sm break-all">http://127.0.0.1:5000/api/status</span>
                    <span className="font-bold blinking text-sm md:text-base">&#9608;</span>
                  </div>
                 <button onClick={handleAttack} disabled={isAttacking} className="w-full py-3 md:py-4 border-2 border-green-400 text-green-400 font-bold hover:bg-green-400 hover:text-black transition-colors uppercase tracking-widest cursor-pointer disabled:opacity-50 text-sm md:text-base">
                   {isAttacking ? '[ ATTACKING... ]' : '[ INITIATE ATTACK ]'}
                 </button>
                 <div className="border border-green-500/30 bg-[#050505] p-3 md:p-4 flex flex-col text-xs md:text-sm h-48 md:h-64 overflow-hidden">
                  <div className="flex justify-between items-center border-b border-green-500/30 pb-2 mb-3 text-green-400/50 uppercase">
                    <span>&gt; SYSTEM_LOGS</span>
                    <span>LINES: {displayLogs.length}</span>
                  </div>
                  <div ref={logRef} className="overflow-y-auto flex-1 flex flex-col justify-end space-y-2">
                    <div className="text-green-400/60">...</div>
                    {displayLogs.map((log) => (
                      <div key={log.id} className={`flex gap-2 ${!log.ok ? 'text-red-300 border border-red-400/30 bg-red-400/10 p-2' : ''}`}>
                        <span className={!log.ok ? 'font-bold blinking' : ''}>{log.ok ? '[OK]' : '[FAIL]'}</span>
                        <span className="text-green-400/50">#{String(log.id).padStart(4, '0')}</span>
                        <span>-&gt; {log.payload} -&gt;</span>
                        <span className={log.ok ? 'text-green-400' : 'font-bold'}>{log.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
</div>
           </section>
           <section className="lg:col-span-7 flex flex-col gap-4 md:gap-6">
             <div className="border border-green-500/30 bg-[#0e0e0e] flex flex-col">
               <header className="border-b border-green-500/30 p-3 md:p-4 flex justify-between items-center">
                 <span className="font-bold text-yellow-400 uppercase text-sm md:text-lg">&gt; AI_DIAGNOSIS</span>
               </header>
               <div className="p-3 md:p-5 flex flex-col gap-3 md:gap-5">
                 {backendData.status === 'CRASHED' ? (
                   <div className="text-red-300 font-bold border-l-2 border-red-400 pl-3 text-sm md:text-lg">CRASH DETECTED: SQL Injection</div>
                 ) : backendData.status === 'FIXED' ? (
                   <div className="text-green-400 font-bold border-l-2 border-green-400 pl-3 text-sm md:text-lg">SYSTEM PATCHED</div>
                 ) : (
                   <div className="text-yellow-400 border-l-2 border-yellow-400 pl-3 text-sm md:text-lg">AWAITING INPUT: Target {backendData.status.toLowerCase()}...</div>
                 )}
                 <div className="grid grid-cols-2 gap-3 md:gap-4">
                   <div className="border border-red-400/50 bg-[#0a0000] p-3 md:p-4 relative text-xs md:text-sm">
                     <div className="absolute top-0 right-0 bg-red-400 text-red-900 text-xs px-2 py-1 font-bold">VULNERABLE</div>
                     <div className="text-red-400 mb-2 md:mb-3 text-xs md:text-sm"># UNSAFE</div>
                     <div className="text-xs md:text-sm text-red-400/80 whitespace-pre-wrap">{`query = "SELECT * FROM users WHERE acc='" + account + "'"\ndb.execute(query)`}</div>
                   </div>
                   <div className="border border-green-400/50 bg-[#000a00] p-3 md:p-4 relative text-xs md:text-sm">
                     <div className="absolute top-0 right-0 bg-green-400 text-black text-xs px-2 py-1 font-bold">PATCHED</div>
                     <div className="text-green-400 mb-2 md:mb-3 text-xs md:text-sm"># SAFE</div>
                     <div className="text-xs md:text-sm text-green-400/80 whitespace-pre-wrap">{`query = "SELECT * FROM users WHERE acc=?"\ndb.execute(query, (account,))`}</div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="border border-green-500/30 bg-[#0e0e0e] flex flex-col relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[length:100%_4px] z-10"></div>
               <div className="p-4 md:p-6 flex flex-col items-center justify-center gap-3 md:gap-5 relative z-20">
                 {backendData.status === 'FIXED' ? (
                   <>
                     <h2 className="text-xl md:text-3xl font-black text-green-400">[ BUG SEALED ]</h2>
                     <div className="text-center border border-green-400/30 px-4 md:px-5 py-2 md:py-3 bg-green-400/5 text-sm md:text-lg">
                       Vulnerability Patched &amp; Verified
                     </div>
                     <div className="flex gap-6 md:gap-12 border-y border-green-400/30 py-2 md:py-3 w-full justify-center">
                       <div className="text-center">
                         <div className="text-xs md:text-sm text-green-400/60 mb-1">TIME TO FIX</div>
                         <div className="text-green-400 font-bold text-base md:text-xl">2.3 SECONDS</div>
                       </div>
                       <div className="text-center">
                         <div className="text-xs md:text-sm text-red-400/60 mb-1">HUMAN TIME</div>
                         <div className="text-red-400 font-bold text-base md:text-xl">~2 DAYS</div>
                       </div>
                     </div>
                   </>
                 ) : (
                   <>
                     <div className="text-center border border-green-400/30 px-4 md:px-5 py-2 md:py-3 bg-green-400/5 text-sm md:text-lg">
                       STATUS: <span style={{ color: statusColor }}>{backendData.status}</span>
                     </div>
                     <div className="flex gap-6 md:gap-12 border-y border-green-400/30 py-2 md:py-3 w-full justify-center">
                        <div className="text-center">
                          <div className="text-xs md:text-sm text-green-400/60 mb-1">TARGET</div>
                          <div className="text-green-400 font-bold text-sm md:text-lg">127.0.0.1:5000</div>
                        </div>
                       <div className="text-center">
                         <div className="text-xs md:text-sm text-yellow-400/60 mb-1">TESTS RUN</div>
                         <div className="text-yellow-400 font-bold text-base md:text-xl">{displayLogs.length}</div>
                       </div>
                     </div>
                   </>
                 )}
                 {backendData.status === 'CRASHED' && (
                   <button onClick={handleDeployPatch} className="px-6 md:px-8 py-3 md:py-4 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold tracking-widest cursor-pointer text-sm md:text-lg">
                     [ DEPLOY AI PATCH ]
                   </button>
                 )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default BugShieldTerminal
