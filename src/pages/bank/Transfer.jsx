import { useNavigate } from 'react-router-dom'

function Transfer() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#F4F6F8] min-h-screen flex flex-col md:flex-row">
      <nav className="hidden md:flex flex-col w-72 bg-[#1F1F1F] text-amber-400 h-screen sticky top-0 flex-shrink-0 py-8 px-6 space-y-3">
        <div className="px-2 mb-10">
          <h1 className="text-amber-400 font-black text-2xl">SecureBank</h1>
          <p className="text-gray-400 text-sm mt-1">Enterprise Finance</p>
        </div>
        <div className="px-2 mb-8">
          <button className="w-full bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 font-bold py-4 px-5 rounded-xl flex justify-center items-center gap-3 cursor-pointer hover:opacity-90 text-lg">
            <span className="material-symbols-outlined text-xl">add</span>
            New Transfer
          </button>
        </div>
        <div className="flex-1 space-y-2">
          <button onClick={() => navigate('/dashboard')} className="w-full text-left text-gray-400 hover:text-white mx-0 px-5 py-4 flex items-center gap-4 rounded-xl hover:bg-[#2A2A2A] transition-all cursor-pointer text-lg">
            <span className="material-symbols-outlined text-2xl">dashboard</span>
            Dashboard
          </button>
          <a className="bg-[#2A2A2A] text-amber-400 rounded-xl px-5 py-4 flex items-center gap-4 text-lg" href="#">
            <span className="material-symbols-outlined text-2xl">swap_horiz</span>
            Transfers
          </a>
          <a className="text-gray-400 hover:text-white px-5 py-4 flex items-center gap-4 rounded-xl hover:bg-[#2A2A2A] transition-all text-lg" href="#">
            <span className="material-symbols-outlined text-2xl">account_balance</span>
            Accounts
          </a>
          <a className="text-gray-400 hover:text-white px-5 py-4 flex items-center gap-4 rounded-xl hover:bg-[#2A2A2A] transition-all text-lg" href="#">
            <span className="material-symbols-outlined text-2xl">verified_user</span>
            Security
          </a>
          <a className="text-gray-400 hover:text-white px-5 py-4 flex items-center gap-4 rounded-xl hover:bg-[#2A2A2A] transition-all text-lg" href="#">
            <span className="material-symbols-outlined text-2xl">settings</span>
            Settings
          </a>
        </div>
        <div className="mt-auto space-y-2 pt-6 border-t border-[#2A2A2A]">
          <a className="text-gray-400 hover:text-white px-5 py-4 flex items-center gap-4 rounded-xl hover:bg-[#2A2A2A] transition-all text-lg" href="#">
            <span className="material-symbols-outlined text-2xl">help</span>
            Help Center
          </a>
          <button onClick={() => navigate('/login')} className="w-full text-left text-gray-400 hover:text-white px-5 py-4 flex items-center gap-4 rounded-xl hover:bg-[#2A2A2A] transition-all cursor-pointer text-lg">
            <span className="material-symbols-outlined text-2xl">logout</span>
            Logout
          </button>
        </div>
      </nav>
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40 flex justify-between items-center px-8 h-16 w-full">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-gray-600 p-2 rounded-lg cursor-pointer">
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
            <div className="md:hidden text-2xl font-bold text-gray-900">SecureBank</div>
          </div>
          <div className="flex items-center gap-5">
            <button className="text-gray-500 p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <span className="material-symbols-outlined text-2xl">notifications</span>
            </button>
            <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden border-2 border-gray-300 flex items-center justify-center text-gray-500 font-bold">JD</div>
          </div>
        </header>
        <main className="flex-1 p-8 md:p-12 overflow-y-auto">
          <div className="max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto space-y-8">
            <div className="bg-red-100 border-2 border-red-200 text-red-700 px-6 py-4 rounded-xl flex items-start gap-4">
              <span className="material-symbols-outlined text-red-600 text-2xl mt-0.5">warning</span>
              <div>
                <p className="font-bold text-lg"> This page contains 4 intentional security bugs for the BugShield demo.</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Initiate Transfer</h2>
              <p className="text-xl text-gray-600">Send funds securely to verified accounts.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold text-gray-600 uppercase" htmlFor="recipient">Recipient Account</label>
                    <span className="bg-red-100 text-red-700 text-sm font-semibold px-3 py-1 rounded-lg">SQL_INJECT</span>
                  </div>
                  <input className="w-full bg-white border-2 border-gray-200 rounded-xl px-5 py-4 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder-gray-400" id="recipient" placeholder="Enter account number or alias" type="text" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold text-gray-600 uppercase" htmlFor="amount">Amount ()</label>
                    <span className="bg-red-100 text-red-700 text-sm font-semibold px-3 py-1 rounded-lg">NEGATIVE_VALUE</span>
                  </div>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-2xl"></span>
                    <input className="w-full bg-white border-2 border-gray-200 rounded-xl pl-12 pr-5 py-4 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder-gray-400" id="amount" placeholder="0.00" type="number" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold text-gray-600 uppercase" htmlFor="description">Description</label>
                    <span className="bg-red-100 text-red-700 text-sm font-semibold px-3 py-1 rounded-lg">XSS_ATTACK</span>
                  </div>
                  <input className="w-full bg-white border-2 border-gray-200 rounded-xl px-5 py-4 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder-gray-400" id="description" placeholder="What is this for?" type="text" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold text-gray-600 uppercase" htmlFor="promo">Promo Code</label>
                    <span className="bg-red-100 text-red-700 text-sm font-semibold px-3 py-1 rounded-lg">BUFFER_OVERFLOW</span>
                  </div>
                  <input className="w-full bg-white border-2 border-gray-200 rounded-xl px-5 py-4 text-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder-gray-400" id="promo" placeholder="Optional code" type="text" />
                </div>
                <button className="w-full bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 font-bold text-xl py-5 rounded-xl shadow-xl flex justify-center items-center gap-3 cursor-pointer hover:opacity-90" type="button">
                  CONFIRM TRANSFER
                  <span className="material-symbols-outlined text-2xl">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Transfer
