import { useNavigate, Link } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/home')
  }

  return (
    <div className="bg-surface text-on-surface min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAQOkv32y1R-fKg9NI_KtwVcubaQKiwQcd04w9i7zB45IF54SCld_OVVzRoCTq2jUepAb1-DXNPFQY1GPGvvIEBhm6s0UHaZNP4jU1K741zrz38KvyX9PkoIlPxL-T8mRU2Bbt7JzbCUe83LzaHXH1Bc1TkiZyn2JltrP7N0W45bkJwr7c6u__OrlWMwHYipJCABut6KShaHvBlTbAtRQSqEF6cni88L2RhkVMaqSxYA0tAVI3NrfpD6psjNQVFdDJodYBCEW7qiI')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-surface-bright/80 to-surface-container-low/90 mix-blend-overlay"></div>
      </div>
      <main className="relative z-10 w-full max-w-[440px] px-container_margin">
        <div className="bg-surface-container-lowest/70 backdrop-blur-[12px] border border-outline-variant/30 rounded-xl p-lg shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex flex-col gap-md">
          <div className="flex flex-col items-center text-center gap-sm">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-container-lowest shadow-sm mb-2 border border-outline-variant/20">
              <span className="text-display-xl font-display-xl text-primary leading-none mt-1">&#9906;</span>
            </div>
            <div className="flex items-center gap-xs">
              <h1 className="text-headline-md font-headline-md text-on-surface tracking-tight">ACCOUNT LOGIN</h1>
              <span className="inline-flex items-center px-2 py-1 rounded bg-secondary-container/30 text-on-secondary-container text-label-caps font-label-caps ml-2 border border-secondary-container/50">SECURE</span>
            </div>
            <p className="text-body-sm font-body-sm text-on-surface-variant">Please enter your credentials to access your dashboard.</p>
          </div>
          <form className="flex flex-col gap-sm mt-xs" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-xs">
              <div className="flex items-center justify-between">
                <label className="text-label-caps font-label-caps text-on-surface-variant ml-1" htmlFor="account-number">ACCOUNT NUMBER</label>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-error text-on-error text-[10px] font-bold tracking-wider shadow-sm">BUG</span>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">account_circle</span>
                <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 pl-10 pr-3 text-body-lg font-body-lg text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-outline/70" id="account-number" placeholder="Enter your account number" type="text" />
              </div>
            </div>
            <div className="flex flex-col gap-xs mt-2">
              <div className="flex items-center justify-between">
                <label className="text-label-caps font-label-caps text-on-surface-variant ml-1" htmlFor="password">PASSWORD</label>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-error text-on-error text-[10px] font-bold tracking-wider shadow-sm">BUG</span>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">lock</span>
                <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 pl-10 pr-3 text-body-lg font-body-lg text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-outline/70" id="password" placeholder="Enter your password" type="password" />
              </div>
            </div>
            <div className="flex items-center justify-between mt-xs px-1">
              <div className="flex items-center gap-2">
                <input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4 bg-surface-container-lowest" id="remember" type="checkbox" />
                <label className="text-body-sm font-body-sm text-on-surface-variant cursor-pointer" htmlFor="remember">Remember me</label>
              </div>
              <a className="text-body-sm font-body-sm text-primary hover:text-primary-fixed-variant transition-colors font-medium" href="#">Forgot Credentials?</a>
            </div>
            <button
              onClick={handleLogin}
              className="mt-4 w-full bg-tertiary-fixed text-on-tertiary-fixed text-subheading font-subheading py-3 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              type="button"
            >
              Login to Dashboard
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </form>
          <div className="text-center mt-2 border-t border-outline-variant/30 pt-sm">
            <Link className="text-body-sm font-body-sm text-on-surface-variant hover:text-primary transition-colors" to="/register">
              New user? <span className="font-medium text-primary">Register here</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login
