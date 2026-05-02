import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Login() {
  const navigate = useNavigate()
  const [accountNumber, setAccountNumber] = useState("")
  const [systemStatus, setSystemStatus] = useState("READY")

  const handleLogin = () => { navigate('/home') }

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch('http://localhost:5000/api/status')
        const data = await res.json()
        setSystemStatus(data.status)
        if (data.status === "ATTACKING" || data.status === "CRASHED") {
          setAccountNumber(data.current_payload)
        }
      } catch (e) {}
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 ${systemStatus === "CRASHED" ? "bg-red-50" : "bg-gradient-to-br from-gray-100 to-gray-200"}`}>
      <main className="w-full max-w-md md:max-w-xl lg:max-w-2xl">
        <div className={`rounded-2xl shadow-xl p-8 md:p-12 flex flex-col gap-8 ${systemStatus === "CRASHED" ? "bg-red-100 border-4 border-red-500" : "bg-white"}`}>
          {systemStatus === "CRASHED" && (
            <div className="bg-red-500 text-white text-center font-bold py-3 px-4 rounded-xl text-xl">
              SYSTEM BREACHED - DATABASE CRITICAL FAILURE
            </div>
          )}
          <div className={`flex flex-col items-center text-center gap-4 ${systemStatus === "CRASHED" ? "opacity-50" : ""}`}>
            <div className={`flex items-center justify-center w-20 h-20 rounded-full ${systemStatus === "CRASHED" ? "bg-red-200" : "bg-amber-100"}`}>
              <span className={`material-symbols-outlined text-5xl ${systemStatus === "CRASHED" ? "text-red-600" : "text-amber-600"}`} style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">ACCOUNT LOGIN</h1>
            <p className="text-lg text-gray-500">Enter your credentials to access your dashboard.</p>
          </div>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-600 uppercase" htmlFor="account-number">ACCOUNT NUMBER</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-2xl">account_circle</span>
                <input value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className={`w-full bg-white border-2 rounded-xl py-4 pl-14 pr-4 text-lg text-gray-900 focus:outline-none focus:ring-2 ${systemStatus === "CRASHED" ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-gray-200 focus:border-amber-400 focus:ring-amber-100"}`} id="account-number" placeholder="Enter your account number" type="text" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-600 uppercase" htmlFor="password">PASSWORD</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-2xl">lock</span>
                <input className={`w-full bg-white border-2 rounded-xl py-4 pl-14 pr-4 text-lg text-gray-900 focus:outline-none focus:ring-2 ${systemStatus === "CRASHED" ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-gray-200 focus:border-amber-400 focus:ring-amber-100"}`} id="password" placeholder="Enter your password" type="password" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input className="rounded border-gray-300 text-amber-500 focus:ring-amber-500 h-5 w-5" id="remember" type="checkbox" />
                <label className="text-base text-gray-600 cursor-pointer" htmlFor="remember">Remember me</label>
              </div>
              <a className="text-base font-semibold text-amber-600 hover:text-amber-700 transition-colors" href="#">Forgot Password?</a>
            </div>
            <button onClick={handleLogin} disabled={systemStatus === "CRASHED"} className={`w-full font-bold text-xl py-5 rounded-xl flex items-center justify-center gap-3 shadow-xl cursor-pointer ${systemStatus === "CRASHED" ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 hover:opacity-90"}`} type="button">
              {systemStatus === "CRASHED" ? "SYSTEM DOWN" : "Login to Dashboard"}
              <span className="material-symbols-outlined text-2xl">arrow_forward</span>
            </button>
          </form>
          <div className="text-center border-t border-gray-200 pt-6">
            <Link className="text-base text-gray-500 hover:text-amber-600 transition-colors" to="/register">New user? <span className="font-semibold text-amber-600">Register here</span></Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login
