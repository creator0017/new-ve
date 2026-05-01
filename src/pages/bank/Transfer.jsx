import { useNavigate } from 'react-router-dom'

function Transfer() {
  const navigate = useNavigate()

  return (
    <div className="text-on-surface font-sans flex min-h-screen">
      <nav className="hidden md:flex bg-[#1F1F1F] text-[#F6C453] font-sans text-sm font-medium fixed left-0 top-0 h-screen w-64 border-r border-white/10 shadow-2xl flex-col py-6 space-y-2 z-50">
        <div className="px-6 mb-8">
          <h1 className="text-yellow-400 font-black tracking-widest text-xl">SecureBank</h1>
          <p className="text-slate-400 text-xs mt-1">Enterprise Finance</p>
        </div>
        <div className="px-4 mb-6">
          <button className="w-full btn-primary font-bold py-3 px-4 rounded-lg flex justify-center items-center gap-2 cursor-pointer">
            <span className="material-symbols-outlined text-base">add</span>
            New Transfer
          </button>
        </div>
        <div className="flex-1 space-y-1">
          <a
            onClick={() => navigate('/dashboard')}
            className="text-slate-400 hover:text-white mx-2 px-4 py-3 flex items-center gap-3 rounded-lg hover:bg-[#2A2A2A] transition-all duration-200 cursor-pointer"
          >
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </a>
          <a className="bg-[#2A2A2A] text-[#F6C453] rounded-lg mx-2 px-4 py-3 flex items-center gap-3" href="#">
            <span className="material-symbols-outlined">swap_horiz</span>
            Transfers
          </a>
          <a className="text-slate-400 hover:text-white mx-2 px-4 py-3 flex items-center gap-3 rounded-lg hover:bg-[#2A2A2A] transition-all duration-200" href="#">
            <span className="material-symbols-outlined">account_balance</span>
            Accounts
          </a>
          <a className="text-slate-400 hover:text-white mx-2 px-4 py-3 flex items-center gap-3 rounded-lg hover:bg-[#2A2A2A] transition-all duration-200" href="#">
            <span className="material-symbols-outlined">verified_user</span>
            Security
          </a>
          <a className="text-slate-400 hover:text-white mx-2 px-4 py-3 flex items-center gap-3 rounded-lg hover:bg-[#2A2A2A] transition-all duration-200" href="#">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
        </div>
        <div className="mt-auto space-y-1 pt-6 border-t border-white/10">
          <a className="text-slate-400 hover:text-white mx-2 px-4 py-3 flex items-center gap-3 rounded-lg hover:bg-[#2A2A2A] transition-all duration-200" href="#">
            <span className="material-symbols-outlined">help</span>
            Help Center
          </a>
          <a
            onClick={() => navigate('/login')}
            className="text-slate-400 hover:text-white mx-2 px-4 py-3 flex items-center gap-3 rounded-lg hover:bg-[#2A2A2A] transition-all duration-200 cursor-pointer"
          >
            <span className="material-symbols-outlined">logout</span>
            Logout
          </a>
        </div>
      </nav>
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        <header className="bg-white/70 backdrop-blur-md text-yellow-500 font-sans antialiased border-b border-slate-200/50 shadow-sm sticky top-0 z-40 flex justify-between items-center px-6 h-16 w-full">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-slate-600 hover:bg-slate-100/50 p-2 rounded-lg transition-colors cursor-pointer">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="md:hidden text-xl font-bold tracking-tight text-slate-900">SecureBank</div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-slate-600 hover:bg-slate-100/50 p-2 rounded-full transition-colors active:scale-95 duration-150 cursor-pointer">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-slate-600 hover:bg-slate-100/50 p-2 rounded-full transition-colors active:scale-95 duration-150 cursor-pointer">
              <span className="material-symbols-outlined">help</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant">
              <img
                alt="User avatar"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxgkkFdBGXF2yU0V6y4UyFB_kiSePzfN2BIekI_s6XZUH_XrCxMoKd5eCXYxJCt5lm4sxbtvHusQxI1Saht5PaSo6qVYigVetSYKCC0ScRaiG_ia7QTUsPg0D83-YJAN_mfDoAPLIM7Y_dBC0ajdImNYLbJ4f9IwtlxAjImi9iICPXqwmEh6LiuMLNDhKH4to62D4blkS_fFWMWthfoeIYj9OcZoSuu4aC2s67P9ZPX74usFEGdE2VnpJreXZgzt8S1mR5_AsvWuc"
              />
            </div>
          </div>
        </header>
        <main className="flex-1 p-md md:p-lg overflow-y-auto">
          <div className="max-w-3xl mx-auto space-y-lg">
            <div className="bg-error-container/30 border border-error-container text-on-error-container px-md py-sm rounded-lg flex items-start gap-3">
              <span className="material-symbols-outlined text-error mt-0.5">warning</span>
              <div>
                <p className="font-body-sm font-semibold"> This page contains 4 intentional security bugs for the BugShield demo.</p>
              </div>
            </div>
            <div>
              <h2 className="font-display-xl text-on-surface mb-2">Initiate Transfer</h2>
              <p className="font-body-lg text-on-surface-variant">Send funds securely to verified accounts.</p>
            </div>
            <div className="glass-card rounded-xl p-lg shadow-sm">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="font-label-caps text-on-surface-variant" htmlFor="recipient">Recipient Account</label>
                    <span className="bg-error-container text-on-error-container font-label-caps px-2 py-0.5 rounded text-[10px]">SQL_INJECT</span>
                  </div>
                  <input className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 font-body-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-outline transition-shadow" id="recipient" placeholder="Enter account number or alias" type="text" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="font-label-caps text-on-surface-variant" htmlFor="amount">Amount ()</label>
                    <span className="bg-error-container text-on-error-container font-label-caps px-2 py-0.5 rounded text-[10px]">NEGATIVE_VALUE</span>
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant font-body-lg"></span>
                    <input className="w-full bg-white border border-outline-variant rounded-lg pl-8 pr-4 py-3 font-body-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-outline transition-shadow" id="amount" placeholder="0.00" type="number" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="font-label-caps text-on-surface-variant" htmlFor="description">Description</label>
                    <span className="bg-error-container text-on-error-container font-label-caps px-2 py-0.5 rounded text-[10px]">XSS_ATTACK</span>
                  </div>
                  <input className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 font-body-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-outline transition-shadow" id="description" placeholder="What is this for?" type="text" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="font-label-caps text-on-surface-variant" htmlFor="promo">Promo Code</label>
                    <span className="bg-error-container text-on-error-container font-label-caps px-2 py-0.5 rounded text-[10px]">BUFFER_OVERFLOW</span>
                  </div>
                  <input className="w-full bg-white border border-outline-variant rounded-lg px-4 py-3 font-body-lg text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-outline transition-shadow" id="promo" placeholder="Optional code" type="text" />
                </div>
                <div className="pt-4">
                  <button className="w-full btn-primary font-headline-md text-base py-4 rounded-xl shadow-sm flex justify-center items-center gap-2 cursor-pointer" type="button">
                    CONFIRM TRANSFER
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Transfer
