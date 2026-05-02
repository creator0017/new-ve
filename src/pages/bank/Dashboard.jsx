import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#F4F6F8] min-h-screen flex flex-col md:flex-row">
      <aside className="hidden md:flex flex-col w-72 bg-[#1F1F1F] text-white h-screen sticky top-0 p-6 flex-shrink-0">
        <div className="mb-10">
          <span className="text-2xl font-black text-amber-400">SecureBank</span>
          <div className="text-gray-400 text-sm mt-1">Enterprise Banking</div>
        </div>
        <nav className="flex-1 space-y-3">
          <a className="flex items-center gap-4 px-5 py-4 rounded-xl bg-[#2A2A2A] text-amber-400 font-bold border-r-4 border-amber-400 text-lg" href="#">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
            Dashboard
          </a>
          <button onClick={() => navigate('/transfer')} className="w-full flex items-center gap-4 px-5 py-4 rounded-xl text-gray-400 hover:text-white hover:bg-[#2A2A2A] cursor-pointer text-left text-lg">
            <span className="material-symbols-outlined text-2xl">swap_horiz</span>
            Transfer Money
          </button>
          <a className="flex items-center gap-4 px-5 py-4 rounded-xl text-gray-400 hover:text-white hover:bg-[#2A2A2A] cursor-pointer text-lg" href="#">
            <span className="material-symbols-outlined text-2xl">payments</span>
            Pay Bills
          </a>
          <a className="flex items-center gap-4 px-5 py-4 rounded-xl text-gray-400 hover:text-white hover:bg-[#2A2A2A] cursor-pointer text-lg" href="#">
            <span className="material-symbols-outlined text-2xl">receipt_long</span>
            Transactions
          </a>
          <a className="flex items-center gap-4 px-5 py-4 rounded-xl text-gray-400 hover:text-white hover:bg-[#2A2A2A] cursor-pointer text-lg" href="#">
            <span className="material-symbols-outlined text-2xl">person</span>
            Profile
          </a>
        </nav>
        <div className="mt-auto pt-6 border-t border-[#2A2A2A] space-y-3">
          <button className="w-full py-4 px-5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 font-bold text-lg cursor-pointer hover:opacity-90">
            Open New Account
          </button>
          <button onClick={() => navigate('/login')} className="w-full flex items-center gap-4 px-5 py-4 rounded-xl text-gray-400 hover:text-white hover:bg-[#2A2A2A] cursor-pointer text-lg">
            <span className="material-symbols-outlined text-2xl">logout</span>
            Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white sticky top-0 z-30 border-b border-gray-200 shadow-sm flex justify-between items-center px-8 py-5">
          <span className="text-2xl font-semibold text-gray-900">Welcome back, John Doe</span>
          <div className="flex items-center gap-5 text-gray-500">
            <button className="p-3 hover:bg-gray-100 rounded-full cursor-pointer">
              <span className="material-symbols-outlined text-2xl">notifications</span>
            </button>
            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden border-2 border-gray-300 flex items-center justify-center text-gray-500 font-bold text-lg">JD</div>
          </div>
        </header>
        <div className="p-8 md:p-12 max-w-7xl mx-auto w-full space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 p-8 rounded-2xl bg-gradient-to-br from-[#1F1F1F] to-[#2A2A2A] text-white flex flex-col justify-between relative overflow-hidden min-h-[320px]">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400 opacity-20 blur-3xl rounded-full"></div>
              <div className="relative z-10">
                <h2 className="text-sm text-gray-400 uppercase tracking-wider mb-3">Total Balance</h2>
                <div className="text-3xl md:text-4xl font-bold text-white mb-3"> 2,45,000.00</div>
                <div className="text-base text-gray-400 mb-2">Savings Account</div>
                <div className="text-base tracking-widest text-amber-400">XXXX-XXXX-4721</div>
              </div>
              <div className="mt-8 relative z-10 flex gap-4">
                <button onClick={() => navigate('/transfer')} className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 font-medium cursor-pointer hover:opacity-90 text-lg">Transfer</button>
                <button className="flex-1 py-3 px-6 rounded-xl border border-gray-600 bg-transparent text-white font-medium hover:bg-white/10 cursor-pointer text-lg">Details</button>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-center items-center gap-4 cursor-pointer hover:shadow-lg transition-shadow min-h-[240px]">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                  <span className="material-symbols-outlined text-3xl">payments</span>
                </div>
                <span className="text-2xl font-semibold text-gray-900">Pay Bills</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-center items-center gap-4 cursor-pointer hover:shadow-lg transition-shadow min-h-[240px]">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                  <span className="material-symbols-outlined text-3xl">account_balance</span>
                </div>
                <span className="text-2xl font-semibold text-gray-900">Fixed Deposits</span>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">Recent Transactions</h3>
              <a className="text-lg text-amber-600 hover:underline font-medium" href="#">View All</a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-4 px-5 text-sm font-semibold text-gray-500 uppercase">Date</th>
                    <th className="py-4 px-5 text-sm font-semibold text-gray-500 uppercase">Description</th>
                    <th className="py-4 px-5 text-sm font-semibold text-gray-500 uppercase">Amount</th>
                    <th className="py-4 px-5 text-sm font-semibold text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="text-base text-gray-900">
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-5 text-gray-500">2023-10-25</td>
                    <td className="py-4 px-5 font-medium">Transfer to Raj Kumar</td>
                    <td className="py-4 px-5 text-red-600 font-semibold">- 5,000.00</td>
                    <td className="py-4 px-5"><span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-800">Completed</span></td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-5 text-gray-500">2023-10-24</td>
                    <td className="py-4 px-5 font-medium">Electricity Bill Payment</td>
                    <td className="py-4 px-5 text-red-600 font-semibold">- 1,200.00</td>
                    <td className="py-4 px-5"><span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-800">Completed</span></td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-5 text-gray-500">2023-10-01</td>
                    <td className="py-4 px-5 font-medium">Salary Credit</td>
                    <td className="py-4 px-5 text-green-600 font-semibold">+ 1,50,000.00</td>
                    <td className="py-4 px-5"><span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-800">Completed</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-5 text-gray-500">2023-09-28</td>
                    <td className="py-4 px-5 font-medium">Mobile Recharge</td>
                    <td className="py-4 px-5 text-red-600 font-semibold">- 599.00</td>
                    <td className="py-4 px-5"><span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-800">Completed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
