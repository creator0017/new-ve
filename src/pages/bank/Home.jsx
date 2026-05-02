import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-white sticky top-0 z-40 border-b border-gray-200 shadow-sm">
        <div className="flex justify-between items-center px-6 md:px-12 py-5">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-amber-500 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>hexagon</span>
            <span className="text-2xl font-black tracking-tighter text-gray-900">SECUREBANK</span>
          </div>
          <nav className="hidden md:flex gap-10">
            <span className="text-amber-500 font-bold border-b-2 border-amber-400 pb-1 text-lg">Home</span>
            <button onClick={() => navigate('/dashboard')} className="text-gray-600 font-medium hover:text-amber-500 transition-colors cursor-pointer text-lg">Dashboard</button>
            <a className="text-gray-600 font-medium hover:text-amber-500 transition-colors text-lg" href="#">Wealth</a>
            <a className="text-gray-600 font-medium hover:text-amber-500 transition-colors text-lg" href="#">Security</a>
          </nav>
          <div className="flex items-center gap-5">
            <button onClick={() => navigate('/login')} className="hidden md:block text-gray-600 font-medium hover:text-gray-900 transition-colors cursor-pointer text-lg">Login</button>
            <button onClick={() => navigate('/register')} className="bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 px-8 py-3 rounded-xl font-bold text-lg hover:opacity-90 cursor-pointer shadow-lg">Open Account</button>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <section className="py-24 md:py-40 flex flex-col items-center text-center px-6">
          <div className="inline-flex items-center gap-2 bg-amber-50 px-5 py-3 rounded-full border border-amber-200 mb-10">
            <span className="material-symbols-outlined text-amber-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">TRUSTED BANKING SINCE 2024</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight text-gray-900 mb-8">SECUREBANK</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl font-medium leading-relaxed">Your Money. Safe & Secure. Always.</p>
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <button onClick={() => navigate('/register')} className="bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 px-12 py-5 rounded-xl font-bold text-xl shadow-xl w-full sm:w-auto uppercase tracking-wider cursor-pointer hover:opacity-90">OPEN ACCOUNT</button>
            <button className="border-2 border-gray-300 bg-white text-gray-900 px-12 py-5 rounded-xl font-bold text-xl w-full sm:w-auto uppercase tracking-wider cursor-pointer hover:bg-gray-50">LEARN MORE</button>
          </div>
        </section>
        <section className="px-6 md:px-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-10 flex flex-col items-start hover:shadow-xl transition-shadow shadow-sm">
              <div className="w-16 h-16 rounded-xl bg-amber-100 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-amber-600 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </div>
              <h3 className="font-bold text-2xl mb-4 text-gray-900">INSTANT TRANSFERS</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Send money anywhere in seconds. Real-time processing 24/7.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-10 flex flex-col items-start hover:shadow-xl transition-shadow shadow-sm">
              <div className="w-16 h-16 rounded-xl bg-amber-100 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-amber-600 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
              </div>
              <h3 className="font-bold text-2xl mb-4 text-gray-900">SECURE PAYMENTS</h3>
              <p className="text-gray-600 leading-relaxed text-lg">256-bit encryption on every transaction. Your data is safe.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-10 flex flex-col items-start hover:shadow-xl transition-shadow shadow-sm">
              <div className="w-16 h-16 rounded-xl bg-amber-100 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-amber-600 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
              </div>
              <h3 className="font-bold text-2xl mb-4 text-gray-900">LIVE ANALYTICS</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Track every rupee. Real-time dashboard for all accounts.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-50 w-full border-t border-gray-200 text-base mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-12 gap-6">
          <div className="font-bold text-gray-900 flex items-center gap-2 text-lg">
            <span className="material-symbols-outlined text-amber-400 text-xl">hexagon</span>
            SECUREBANK
          </div>
          <nav className="flex gap-8 text-lg">
            <a className="text-gray-500 hover:text-amber-500 transition-colors" href="#">Privacy</a>
            <a className="text-gray-500 hover:text-amber-500 transition-colors" href="#">Terms</a>
            <a className="text-gray-500 hover:text-amber-500 transition-colors" href="#">Security</a>
          </nav>
          <p className="text-gray-500 text-lg"> 2024 SecureBank BugShield Hackathon Demo</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
