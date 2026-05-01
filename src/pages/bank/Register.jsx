import { useNavigate, Link } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/otp-verify')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-md font-sans text-on-surface">
      <main className="w-full max-w-2xl">
        <div className="glass-card rounded-xl p-lg flex flex-col gap-lg">
          <header className="text-center flex flex-col gap-xs">
            <h1 className="text-display-xl font-display-xl text-on-surface">CREATE ACCOUNT</h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant">Join SecureBank and experience modern banking.</p>
          </header>
          <form onSubmit={handleSubmit} className="flex flex-col gap-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="flex flex-col gap-xs">
                <label className="text-label-caps font-label-caps text-on-surface-variant" htmlFor="fullName">FULL NAME</label>
                <input className="w-full bg-surface-container-lowest border border-surface-variant rounded px-sm py-sm text-body-lg font-body-lg text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" id="fullName" placeholder="John Doe" type="text" />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="text-label-caps font-label-caps text-on-surface-variant" htmlFor="email">EMAIL ADDRESS</label>
                <input className="w-full bg-surface-container-lowest border border-surface-variant rounded px-sm py-sm text-body-lg font-body-lg text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" id="email" placeholder="john@example.com" type="email" />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="text-label-caps font-label-caps text-on-surface-variant" htmlFor="phone">PHONE NUMBER</label>
                <input className="w-full bg-surface-container-lowest border border-surface-variant rounded px-sm py-sm text-body-lg font-body-lg text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" id="phone" placeholder="+1 (555) 000-0000" type="tel" />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="text-label-caps font-label-caps text-on-surface-variant" htmlFor="accountType">ACCOUNT TYPE</label>
                <div className="relative">
                  <select className="w-full bg-surface-container-lowest border border-surface-variant rounded px-sm py-sm text-body-lg font-body-lg text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none pr-md cursor-pointer" id="accountType">
                    <option disabled value="">Select an option</option>
                    <option value="personal">Personal Checking</option>
                    <option value="business">Business Checking</option>
                    <option value="savings">High-Yield Savings</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                </div>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="text-label-caps font-label-caps text-on-surface-variant" htmlFor="password">PASSWORD</label>
                <input className="w-full bg-surface-container-lowest border border-surface-variant rounded px-sm py-sm text-body-lg font-body-lg text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" id="password" placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" type="password" />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="text-label-caps font-label-caps text-on-surface-variant" htmlFor="confirmPassword">CONFIRM PASSWORD</label>
                <input className="w-full bg-surface-container-lowest border border-surface-variant rounded px-sm py-sm text-body-lg font-body-lg text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" id="confirmPassword" placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" type="password" />
              </div>
            </div>
            <div className="pt-sm">
              <button type="submit" className="w-full yellow-gradient text-[#1A1A1A] text-body-lg font-body-lg font-bold py-sm rounded-lg hover:scale-[1.02] transition-transform duration-200 flex items-center justify-center gap-xs shadow-sm cursor-pointer">
                CREATE ACCOUNT
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
              </button>
            </div>
          </form>
          <div className="text-center mt-xs">
            <Link className="text-body-sm font-body-sm text-on-surface-variant hover:text-primary transition-colors" to="/login">
              Already have an account? <span className="font-medium text-primary">Login here</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Register
