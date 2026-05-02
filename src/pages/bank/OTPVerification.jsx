import { useState, useRef, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function OTPVerification() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState(Array(6).fill(''))
  const [timer, setTimer] = useState(30)
  const [canResend, setCanResend] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const inputRefs = useRef([])

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) { setCanResend(true); clearInterval(interval); return 0 }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timer])

  useEffect(() => { inputRefs.current[0]?.focus() }, [])

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return
    const newOtp = [...otp]; newOtp[index] = value.slice(-1); setOtp(newOtp)
    if (value && index < 5) inputRefs.current[index + 1]?.focus()
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) inputRefs.current[index - 1]?.focus()
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    if (pasted) {
      const newOtp = [...otp]
      for (let i = 0; i < pasted.length; i++) newOtp[i] = pasted[i]
      setOtp(newOtp); inputRefs.current[Math.min(pasted.length, 5)]?.focus()
    }
  }

  const handleVerify = () => {
    if (otp.join('').length !== 6) return
    setIsVerifying(true); setTimeout(() => { setIsVerifying(false); navigate('/login') }, 1500)
  }

  const handleResend = () => { setOtp(Array(6).fill('')); setTimer(30); setCanResend(false); inputRefs.current[0]?.focus() }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
      <main className="w-full max-w-md md:max-w-xl lg:max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col gap-8">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-amber-100">
              <span className="material-symbols-outlined text-5xl text-amber-600">shield_lock</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">OTP VERIFICATION</h1>
            <p className="text-lg text-gray-500">Enter the 6-digit code sent to your registered phone number.</p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex justify-center gap-4" onPaste={handlePaste}>
              {otp.map((digit, index) => (
                <input key={index} ref={(el) => (inputRefs.current[index] = el)} type="text" inputMode="numeric" maxLength={1} value={digit} onChange={(e) => handleChange(index, e.target.value)} onKeyDown={(e) => handleKeyDown(index, e)} className="w-14 h-16 md:w-16 md:h-20 bg-white border-2 border-gray-200 rounded-xl text-center text-3xl md:text-4xl font-bold text-gray-900 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100" />
              ))}
            </div>
            <button onClick={handleVerify} disabled={otp.join('').length !== 6 || isVerifying} className={`w-full py-5 rounded-xl font-bold text-xl flex items-center justify-center gap-3 shadow-xl cursor-pointer ${otp.join('').length !== 6 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 hover:opacity-90'}`} type="button">
              {isVerifying ? (<><svg className="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>Verifying...</>) : (<>Verify & Continue<span className="material-symbols-outlined text-2xl">arrow_forward</span></>)}
            </button>
            <div className="text-center border-t border-gray-200 pt-6">
              {canResend ? (<button onClick={handleResend} className="text-lg font-semibold text-amber-600 hover:text-amber-700 transition-colors cursor-pointer">Resend OTP Code</button>) : (<p className="text-lg text-gray-500">Resend code in <span className="font-bold text-amber-600">{timer}s</span></p>)}
            </div>
          </div>
          <div className="text-center text-base text-gray-500">
            <Link className="hover:text-amber-600 transition-colors" to="/register">Back to <span className="font-semibold text-amber-600">Registration</span></Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default OTPVerification
