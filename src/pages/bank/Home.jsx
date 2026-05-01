import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white/70 backdrop-blur-md fixed top-0 w-full z-50 border-b border-gray-200/30 shadow-sm font-sans antialiased">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-500">hexagon</span>
            <span className="text-xl font-black tracking-tighter text-gray-900">SECUREBANK</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a onClick={() => navigate('/home')} className="text-amber-500 font-bold border-b-2 border-amber-400 pb-1 cursor-pointer">Home</a>
            <a onClick={() => navigate('/dashboard')} className="text-gray-600 font-medium hover:text-amber-500 transition-colors duration-200 cursor-pointer">Dashboard</a>
            <a className="text-gray-600 font-medium hover:text-amber-500 transition-colors duration-200" href="#">Wealth</a>
            <a className="text-gray-600 font-medium hover:text-amber-500 transition-colors duration-200" href="#">Security</a>
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/login')}
              className="hidden md:block text-gray-600 font-medium hover:text-gray-900 transition-colors cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/register')}
              className="btn-primary px-6 py-2 rounded-lg font-semibold text-sm cursor-pointer"
            >
              Open Account
            </button>
          </div>
        </div>
      </header>
      <main className="flex-grow pt-24 pb-12">
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full border border-gray-200 mb-8 glass-card">
            <span className="material-symbols-outlined text-amber-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified_user
            </span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">TRUSTED BANKING SINCE 2024</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-gray-900 mb-6">SECUREBANK</h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-2xl font-medium">Your Money. Safe & Secure. Always.</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => navigate('/register')}
              className="btn-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-amber-500/20 w-full sm:w-auto uppercase tracking-wider cursor-pointer"
            >
              OPEN ACCOUNT
            </button>
            <button className="btn-secondary px-8 py-4 rounded-xl font-bold text-lg w-full sm:w-auto uppercase tracking-wider cursor-pointer">
              LEARN MORE
            </button>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-amber-600 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">INSTANT TRANSFERS</h3>
              <p className="text-gray-600 leading-relaxed">Send money anywhere in seconds. Real-time processing 24/7.</p>
            </div>
            <div className="glass-card rounded-2xl p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full -mr-16 -mt-16"></div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-6 relative z-10">
                <span className="material-symbols-outlined text-amber-600 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900 relative z-10">SECURE PAYMENTS</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">256-bit encryption on every transaction. Your data is safe.</p>
            </div>
            <div className="glass-card rounded-2xl p-8 flex flex-col items-start hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-amber-600 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">LIVE ANALYTICS</h3>
              <p className="text-gray-600 leading-relaxed">Track every rupee. Real-time dashboard for all accounts.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-50 w-full border-t border-gray-200 font-sans text-sm mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 gap-4 max-w-7xl mx-auto">
          <div className="font-bold text-gray-900 flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-400 text-lg">hexagon</span>
            SECUREBANK
          </div>
          <nav className="flex gap-6">
            <a className="text-gray-500 hover:text-amber-500 transition-all" href="#">Privacy</a>
            <a className="text-gray-500 hover:text-amber-500 transition-all" href="#">Terms</a>
            <a className="text-gray-500 hover:text-amber-500 transition-all" href="#">Security</a>
          </nav>
          <div className="flex flex-col items-end gap-2">
            <p className="text-gray-500"> 2024 SecureBank BugShield Hackathon Demo</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
