function BugShieldTerminal() {
  return (
    <div className="min-h-screen flex flex-col antialiased" style={{ backgroundColor: '#050505', color: '#00ff41', fontFamily: "'Courier New', monospace" }}>
      <header className="bg-[#050505] fixed top-0 w-full z-50 flex justify-between items-center px-4 h-12 border-b border-[#00ff41]/30 font-code-sm text-code-sm text-[#00ff41] uppercase tracking-tighter">
        <div className="flex items-center gap-6 h-full">
          <span className="text-xl font-bold text-[#00ff41] before:content-['>_'] pr-4">TERMINAL_OS_v4.2</span>
          <nav className="hidden md:flex items-center h-full gap-4">
            <a className="h-full flex items-center px-2 hover:bg-[#00ff41] hover:text-[#050505] transition-colors duration-75 text-[#00ff41]/50 cursor-pointer active:translate-y-px" href="#">SYSTEM</a>
            <a className="h-full flex items-center px-2 hover:bg-[#00ff41] hover:text-[#050505] transition-colors duration-75 text-[#00ff41] border-b-2 border-[#00ff41] pb-1 cursor-pointer active:translate-y-px" href="#">LOGS</a>
            <a className="h-full flex items-center px-2 hover:bg-[#00ff41] hover:text-[#050505] transition-colors duration-75 text-[#00ff41]/50 cursor-pointer active:translate-y-px" href="#">NETWORK</a>
            <a className="h-full flex items-center px-2 hover:bg-[#00ff41] hover:text-[#050505] transition-colors duration-75 text-[#00ff41]/50 cursor-pointer active:translate-y-px" href="#">DEBUG</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-3 py-1 border border-[#00ff41]/30 hover:bg-[#00ff41] hover:text-[#050505] transition-colors duration-75 cursor-pointer">REBOOT</button>
          <button className="px-3 py-1 border border-[#00ff41] bg-[#00ff41]/10 text-[#00ff41] hover:bg-[#00ff41] hover:text-[#050505] transition-colors duration-75 font-bold cursor-pointer">TERMINATE</button>
          <div className="flex gap-2">
            <button className="hover:bg-[#00ff41] hover:text-[#050505] p-1 transition-colors duration-75 cursor-pointer">
              <span className="material-symbols-outlined text-sm">settings</span>
            </button>
            <button className="hover:bg-[#00ff41] hover:text-[#050505] p-1 transition-colors duration-75 cursor-pointer">
              <span className="material-symbols-outlined text-sm">terminal</span>
            </button>
          </div>
        </div>
      </header>
      <aside className="hidden md:flex bg-[#050505] fixed left-0 top-12 bottom-0 w-64 flex-col p-4 border-r border-[#00ff41]/30 font-code-sm text-code-sm">
        <div className="mb-8 border-b border-[#00ff41]/30 pb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 border border-[#00ff41] flex items-center justify-center bg-[#00ff41]/10 overflow-hidden">
              <img
                className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn-oHPDdC2pXVibL40oiNHCV2dqpl-7aPoNQ93JwiTz65LeXej1P1h5QOAPGWIY8HFD7AzDnkqDmbASEUI4Q7lNTvHh-jHusYy4urZgFti6ZKunUsDIEMzFo1iejq-8oVvjm49lx06nseUeYDMnO4WWo6cyj5jQdbc6ieRLNHzo8Ni0qtY_eDhKXoxq-hDyARQiLkotsL7gEFOltBV_eX4PV8FGDiuJPlgN7HIA7oouhtfZBLM3CS4UtJmYHPgZhj2dW-wj67hVLc"
              />
            </div>
            <div>
              <div className="text-lg font-black text-[#00ff41]">OPERATOR_01</div>
              <div className="text-[#00ff41]/60 text-xs uppercase tracking-widest">LEVEL_7_ACCESS</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 flex flex-col gap-2">
          <a className="flex items-center gap-3 p-2 text-[#00ff41]/60 hover:bg-[#00ff41]/10 hover:text-[#00ff41] transition-all duration-100 ease-in-out" href="#">
            <span className="material-symbols-outlined">folder_open</span>
            ROOT
          </a>
          <a className="flex items-center gap-3 p-2 text-[#00ff41] font-bold underline decoration-double hover:bg-[#00ff41]/10 hover:text-[#00ff41] transition-all duration-100 ease-in-out" href="#">
            <span className="material-symbols-outlined">router</span>
            DEVICES
          </a>
          <a className="flex items-center gap-3 p-2 text-[#00ff41]/60 hover:bg-[#00ff41]/10 hover:text-[#00ff41] transition-all duration-100 ease-in-out" href="#">
            <span className="material-symbols-outlined">hub</span>
            UPLINK
          </a>
          <a className="flex items-center gap-3 p-2 text-[#00ff41]/60 hover:bg-[#00ff41]/10 hover:text-[#00ff41] transition-all duration-100 ease-in-out" href="#">
            <span className="material-symbols-outlined">lock</span>
            VAULT
          </a>
          <a className="flex items-center gap-3 p-2 text-[#00ff41]/60 hover:bg-[#00ff41]/10 hover:text-[#00ff41] transition-all duration-100 ease-in-out" href="#">
            <span className="material-symbols-outlined">delete</span>
            TRASH
          </a>
        </nav>
      </aside>
      <main className="pt-[64px] md:pl-64 flex-1 p-4 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-[calc(100vh-80px)]">
          <section className="lg:col-span-5 flex flex-col gap-1 h-full">
            <div className="border border-[#00ff41]/30 bg-[#0e0e0e] flex-1 flex flex-col">
              <header className="border-b border-[#00ff41]/30 p-2 bg-[#00ff41]/5 flex justify-between items-center">
                <span className="font-headline-lg text-headline-lg text-[#00ff41]">BUGSHIELD v1.0 AI POWERED FUZZ TESTING ENGINE</span>
                <span className="material-symbols-outlined text-sm">wifi_tethering</span>
              </header>
              <div className="p-3 flex-1 flex flex-col gap-4">
                <div className="border border-[#00ff41]/30 p-2 bg-[#050505]">
                  <span className="text-[#00ff41]/60 mr-2">TARGET:</span>
                  <span style={{ textShadow: '0 0 5px rgba(0, 255, 65, 0.5)' }}>http://localhost:5000/api/transfer</span>
                  <span className="font-bold blinking" style={{ animation: 'blink 1s step-end infinite' }}>&#9608;</span>
                </div>
                <button className="w-full py-4 border border-[#00ff41] text-[#00ff41] font-headline-lg text-headline-lg hover:bg-[#00ff41] hover:text-[#050505] transition-colors duration-150 uppercase tracking-widest font-black cursor-pointer">
                  [ INITIATE ATTACK ]
                </button>
                <div className="border border-[#00ff41]/30 flex-1 bg-[#050505] p-2 overflow-hidden flex flex-col font-code-sm text-code-sm relative">
                  <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#050505] to-transparent z-10"></div>
                  <div className="flex justify-between items-center border-b border-[#00ff41]/30 pb-1 mb-2 text-[#00ff41]/50 uppercase">
                    <span>&gt; SYSTEM_LOGS / FUZZER_OUTPUT</span>
                    <span>LINES: 472</span>
                  </div>
                  <div className="overflow-y-auto flex-1 flex flex-col justify-end space-y-1">
                    <div className="text-[#00ff41]/60">...</div>
                    <div className="flex gap-2">
                      <span>[OK]</span>
                      <span className="text-[#00ff41]/50">#0468</span>
                      <span>-&gt; 'admin' -&gt;</span>
                      <span className="text-[#00ff41]">200</span>
                    </div>
                    <div className="flex gap-2">
                      <span>[OK]</span>
                      <span className="text-[#00ff41]/50">#0469</span>
                      <span>-&gt; 'system' -&gt;</span>
                      <span className="text-[#00ff41]">200</span>
                    </div>
                    <div className="flex gap-2">
                      <span>[OK]</span>
                      <span className="text-[#00ff41]/50">#0470</span>
                      <span>-&gt; 'root' -&gt;</span>
                      <span className="text-[#00ff41]">200</span>
                    </div>
                    <div className="flex gap-2 text-[#ffb4ab] border border-[#ffb4ab]/30 bg-[#ffb4ab]/10 p-1">
                      <span className="font-bold blinking" style={{ animation: 'blink 1s step-end infinite' }}>[FAIL]</span>
                      <span>#0471</span>
                      <span>-&gt; '' OR 1=1 --' -&gt;</span>
                      <span className="font-bold">500 CRASH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="lg:col-span-7 flex flex-col gap-4 h-full">
            <div className="border border-[#00ff41]/30 bg-[#0e0e0e] h-1/2 flex flex-col">
              <header className="border-b border-[#00ff41]/30 p-2 flex justify-between items-center">
                <span className="font-headline-md text-headline-md text-[#f1c100] uppercase">&gt; AI_DIAGNOSIS_MODULE</span>
              </header>
              <div className="p-3 flex-1 flex flex-col gap-4">
                <div className="text-[#f1c100] font-body-lg text-body-lg uppercase tracking-wide border-l-2 border-[#f1c100] pl-2">
                  ROOT CAUSE: SQL Injection in /api/transfer...
                </div>
                <div className="flex-1 grid grid-cols-2 gap-1">
                  <div className="border border-[#ffb4ab]/50 bg-[#0a0000] p-2 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#ffb4ab] text-[#690005] text-xs px-1 font-bold">VULNERABLE</div>
                    <div className="text-[#ffb4ab] mb-2 text-xs"># UNSAFE RAW CONCATENATION</div>
                    <div className="font-code-sm text-code-sm text-[#ffb4ab]/80 whitespace-pre-wrap">{`query = "SELECT * FROM users WHERE acc='" + account + "'"\ndb.execute(query)`}</div>
                  </div>
                  <div className="border border-[#00ff41]/50 bg-[#000a00] p-2 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#00ff41] text-[#050505] text-xs px-1 font-bold">PATCHED</div>
                    <div className="text-[#00ff41] mb-2 text-xs"># SAFE PARAMETERIZED QUERY</div>
                    <div className="font-code-sm text-code-sm text-[#00ff41]/80 whitespace-pre-wrap">{`query = "SELECT * FROM users WHERE acc=?"\ndb.execute(query, (account,))`}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-[#00ff41]/30 bg-[#0e0e0e] h-1/2 flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[length:100%_4px] z-10"></div>
              <div className="p-3 flex-1 flex flex-col items-center justify-center gap-6 relative z-20">
                <div className="font-code-sm text-[10px] text-[#00ff41] whitespace-pre text-center leading-none opacity-80 hidden sm:block" style={{ textShadow: '0 0 5px rgba(0, 255, 65, 0.5)' }}>
                  {` ____  _  _  ____    ____  ____  __    __    ____  ____ 
(  _ \\)( )( / ___)  / ___)(  __)/ _\\  (  )  (  __)(  _ \\
 ) _ (  ) \\/ (\\___ \\  \\___ \\ ) _)/    \\ / (_/\\ ) _)  ) __/
(____/ \\____/(____/  (____/(____)\\_/\\_/\\____/(____)(__)  `}
                </div>
                <h2 className="font-headline-lg text-headline-lg text-[#00ff41] sm:hidden">BUG SEALED</h2>
                <div className="text-center font-body-md text-body-md border border-[#00ff41]/30 px-4 py-2 bg-[#00ff41]/5">
                  [ BUG SEALED &#10003; ] Vulnerability #0471 Successfully Patched &amp; Verified
                </div>
                <div className="flex gap-8 border-y border-[#00ff41]/30 py-2 w-full justify-center">
                  <div className="text-center">
                    <div className="text-xs text-[#00ff41]/60 mb-1">TIME TO FIX</div>
                    <div className="text-[#00ff41] font-bold text-lg">2.3 SECONDS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-[#ffb4ab]/60 mb-1">HUMAN TIME</div>
                    <div className="text-[#ffb4ab] font-bold text-lg">~2 DAYS</div>
                  </div>
                </div>
                <button className="px-6 py-3 border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-[#050505] transition-colors duration-150 font-bold tracking-widest relative overflow-hidden group cursor-pointer">
                  <span className="relative z-10">[ DEPLOY AI PATCH TO PRODUCTION ]</span>
                  <div className="absolute inset-0 bg-[#00ff41]/20 group-hover:bg-transparent blinking" style={{ animation: 'blink 1s step-end infinite' }}></div>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default BugShieldTerminal
