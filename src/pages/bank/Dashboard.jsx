import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="text-on-background antialiased flex h-screen overflow-hidden">
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-[#2A2A2A] bg-[#1F1F1F] flex flex-col py-6 px-4 z-40 hidden md:flex font-sans text-sm antialiased">
        <div className="mb-lg">
          <span className="text-xl font-black tracking-tight text-[#F6C453]">SecureBank</span>
          <div className="text-neutral-400 mt-xs text-xs">Enterprise Banking</div>
        </div>
        <nav className="flex-1 space-y-2">
          <a className="flex items-center gap-sm px-4 py-3 rounded-lg bg-[#2A2A2A] text-[#F6C453] font-bold border-r-4 border-[#F6C453] hover:scale-[1.02] transition-transform duration-200 ease-out" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
            Dashboard
          </a>
          <a
            onClick={() => navigate('/transfer')}
            className="flex items-center gap-sm px-4 py-3 rounded-lg text-neutral-400 hover:text-white hover:bg-[#2A2A2A] hover:scale-[1.02] transition-all duration-200 ease-out cursor-pointer"
          >
            <span className="material-symbols-outlined">swap_horiz</span>
            Transfer Money
          </a>
          <a className="flex items-center gap-sm px-4 py-3 rounded-lg text-neutral-400 hover:text-white hover:bg-[#2A2A2A] hover:scale-[1.02] transition-all duration-200 ease-out" href="#">
            <span className="material-symbols-outlined">payments</span>
            Pay Bills
          </a>
          <a className="flex items-center gap-sm px-4 py-3 rounded-lg text-neutral-400 hover:text-white hover:bg-[#2A2A2A] hover:scale-[1.02] transition-all duration-200 ease-out" href="#">
            <span className="material-symbols-outlined">receipt_long</span>
            Transactions
          </a>
          <a className="flex items-center gap-sm px-4 py-3 rounded-lg text-neutral-400 hover:text-white hover:bg-[#2A2A2A] hover:scale-[1.02] transition-all duration-200 ease-out" href="#">
            <span className="material-symbols-outlined">person</span>
            Profile
          </a>
        </nav>
        <div className="mt-auto pt-lg border-t border-[#2A2A2A] space-y-2">
          <button className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-[#F6C453] to-[#FBE7A1] text-[#1A1A1A] font-bold hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
            Open New Account
          </button>
          <a
            onClick={() => navigate('/login')}
            className="flex items-center gap-sm px-4 py-3 rounded-lg text-neutral-400 hover:text-white hover:bg-[#2A2A2A] hover:scale-[1.02] transition-all duration-200 ease-out cursor-pointer"
          >
            <span className="material-symbols-outlined">logout</span>
            Logout
          </a>
        </div>
      </aside>
      <main className="flex-1 md:ml-64 flex flex-col h-full relative overflow-y-auto bg-background">
        <header className="fixed top-0 right-0 w-full md:w-[calc(100%-16rem)] h-16 bg-white/70 backdrop-blur-xl shadow-sm border-b border-gray-200/50 flex justify-between items-center px-8 z-30 font-sans text-base font-medium">
          <div className="flex items-center gap-sm text-[#1A1A1A]">
            <span className="font-headline-md text-headline-md hidden md:block">Welcome back, John Doe</span>
          </div>
          <div className="flex items-center gap-md text-neutral-500">
            <button className="p-2 hover:bg-gray-100/50 rounded-full transition-all cursor-pointer">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
              <img
                alt="User avatar"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh-wwxmyVQ1BMp-efKe3fbt_4JNoApk4TsvjFmZ8MUb0oFnoS9ma5nMkuLivSRdHVLjwBavYOhBVGMChGFe62lpShT3idrOtwlSPrf8BWlrNyCn3c8rTLVeAJfC6dqAeJtLz5E0s1ZtpgIOruwfdIAN-J5ipvOP32bVlvXl_HNzJhSgmcQ4l8kvVGWCukVw9lrA1ieehoEyo1_DElBhzuiaSMAzbasrRnyDXpZ5W9ymDRZCNW5_29OgWfPKt9bmXFimbgmcy6XkvI"
              />
            </div>
          </div>
        </header>
        <div className="p-container_margin pt-[100px] max-w-7xl mx-auto w-full space-y-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            <div className="lg:col-span-1 p-md rounded-xl shadow-sm bg-gradient-to-br from-[#1F1F1F] to-[#2A2A2A] text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F6C453] opacity-20 blur-3xl rounded-full"></div>
              <div className="relative z-10">
                <h2 className="font-label-caps text-label-caps text-neutral-400 mb-xs uppercase tracking-wider">Total Balance</h2>
                <div className="font-display-xl text-display-xl text-white mb-md"> 2,45,000.00</div>
                <div className="font-body-sm text-body-sm text-neutral-400 mb-sm">Savings Account</div>
                <div className="font-body-sm text-body-sm tracking-widest text-[#F6C453]">XXXX-XXXX-4721</div>
              </div>
              <div className="mt-lg relative z-10 flex gap-sm">
                <button
                  onClick={() => navigate('/transfer')}
                  className="flex-1 py-2 px-4 rounded-lg bg-gradient-to-r from-[#F6C453] to-[#FBE7A1] text-[#1A1A1A] font-medium hover:scale-[1.02] transition-transform duration-200 text-sm cursor-pointer"
                >
                  Transfer
                </button>
                <button className="flex-1 py-2 px-4 rounded-lg border border-gray-600 bg-transparent text-white font-medium hover:bg-white/10 transition-colors duration-200 text-sm cursor-pointer">
                  Details
                </button>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-gutter">
              <div className="glass-card rounded-xl p-md flex flex-col justify-center items-center gap-sm cursor-pointer hover:bg-white/90 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#F6C453]/20 flex items-center justify-center text-[#765b00]">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <span className="font-subheading text-subheading text-[#1d1b20]">Pay Bills</span>
              </div>
              <div className="glass-card rounded-xl p-md flex flex-col justify-center items-center gap-sm cursor-pointer hover:bg-white/90 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#F6C453]/20 flex items-center justify-center text-[#765b00]">
                  <span className="material-symbols-outlined">account_balance</span>
                </div>
                <span className="font-subheading text-subheading text-[#1d1b20]">Fixed Deposits</span>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-xl p-md shadow-sm">
            <div className="flex justify-between items-center mb-md">
              <h3 className="font-headline-md text-headline-md text-[#1d1b20]">Recent Transactions</h3>
              <a className="font-body-sm text-body-sm text-[#765b00] hover:underline font-medium" href="#">View All</a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 font-label-caps text-label-caps text-neutral-500 uppercase">Date</th>
                    <th className="py-3 px-4 font-label-caps text-label-caps text-neutral-500 uppercase">Description</th>
                    <th className="py-3 px-4 font-label-caps text-label-caps text-neutral-500 uppercase">Amount</th>
                    <th className="py-3 px-4 font-label-caps text-label-caps text-neutral-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="font-body-sm text-body-sm text-[#1d1b20]">
                  <tr className="border-b border-gray-100 hover:bg-white/50 transition-colors">
                    <td className="py-3 px-4 text-neutral-500">2023-10-25</td>
                    <td className="py-3 px-4 font-medium">Transfer to Raj Kumar</td>
                    <td className="py-3 px-4 text-red-600 font-medium">- 5,000.00</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Completed</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-white/50 transition-colors">
                    <td className="py-3 px-4 text-neutral-500">2023-10-24</td>
                    <td className="py-3 px-4 font-medium">Electricity Bill Payment</td>
                    <td className="py-3 px-4 text-red-600 font-medium">- 1,200.00</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Completed</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-white/50 transition-colors">
                    <td className="py-3 px-4 text-neutral-500">2023-10-01</td>
                    <td className="py-3 px-4 font-medium">Salary Credit</td>
                    <td className="py-3 px-4 text-green-600 font-medium">+ 1,50,000.00</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Completed</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/50 transition-colors">
                    <td className="py-3 px-4 text-neutral-500">2023-09-28</td>
                    <td className="py-3 px-4 font-medium">Mobile Recharge</td>
                    <td className="py-3 px-4 text-red-600 font-medium">- 599.00</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Completed</span>
                    </td>
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
