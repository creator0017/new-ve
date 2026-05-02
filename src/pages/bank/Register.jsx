import { useNavigate, Link } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/otp-verify')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
      <main className="w-full max-w-lg md:max-w-3xl lg:max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col gap-8">
          <header className="text-center flex flex-col gap-3">
            <div className="flex justify-center mb-4">
              <span className="material-symbols-outlined text-5xl text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>person_add</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900">CREATE ACCOUNT</h1>
            <p className="text-lg text-gray-500">Join SecureBank and experience modern banking.</p>
          </header>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-600 uppercase" htmlFor="fullName">FULL NAME</label>
                <input className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-4 text-lg text-gray-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100" id="fullName" placeholder="John Doe" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-600 uppercase" htmlFor="email">EMAIL ADDRESS</label>
                <input className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-4 text-lg text-gray-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100" id="email" placeholder="john@example.com" type="email" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-600 uppercase" htmlFor="phone">PHONE NUMBER</label>
                <input className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-4 text-lg text-gray-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100" id="phone" placeholder="+1 (555) 000-0000" type="tel" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-600 uppercase" htmlFor="accountType">ACCOUNT TYPE</label>
                <div className="relative">
                  <select className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-4 text-lg text-gray-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 appearance-none pr-12 cursor-pointer" id="accountType">
                    <option disabled value="">Select an option</option>
                    <option value="personal">Personal Checking</option>
                    <option value="business">Business Checking</option>
                    <option value="savings">High-Yield Savings</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-2xl pointer-events-none">expand_more</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-600 uppercase" htmlFor="password">PASSWORD</label>
                <input className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-4 text-lg text-gray-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100" id="password" placeholder="Enter password" type="password" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-600 uppercase" htmlFor="confirmPassword">CONFIRM PASSWORD</label>
                <input className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-4 text-lg text-gray-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100" id="confirmPassword" placeholder="Confirm password" type="password" />
              </div>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 text-xl font-bold py-5 rounded-xl hover:opacity-90 flex items-center justify-center gap-3 shadow-xl cursor-pointer">
              CREATE ACCOUNT
              <span className="material-symbols-outlined text-2xl">arrow_forward</span>
            </button>
          </form>
          <div className="text-center border-t border-gray-200 pt-6">
            <Link className="text-base text-gray-500 hover:text-amber-500 transition-colors" to="/login">
              Already have an account? <span className="font-semibold text-amber-600">Login here</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Register
