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
          if (prev <= 1) {
            setCanResend(true)
            clearInterval(interval)
            return 0
          }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timer])

  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    if (pasted) {
      const newOtp = [...otp]
      for (let i = 0; i < pasted.length; i++) {
        newOtp[i] = pasted[i]
      }
      setOtp(newOtp)
      inputRefs.current[Math.min(pasted.length, 5)]?.focus()
    }
  }

  const handleVerify = () => {
    const otpString = otp.join('')
    if (otpString.length !== 6) return

    setIsVerifying(true)
    setTimeout(() => {
      setIsVerifying(false)
      navigate('/login')
    }, 1500)
  }

  const handleResend = () => {
    setOtp(Array(6).fill(''))
    setTimer(30)
    setCanResend(false)
    inputRefs.current[0]?.focus()
  }

  const otpValue = otp.join('')

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
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-container/20 mb-2 border border-primary-container/40">
              <span className="material-symbols-outlined text-[40px] text-primary-container">
                shield_lock
              </span>
            </div>
            <h1 className="text-headline-md font-headline-md text-on-surface tracking-tight">OTP VERIFICATION</h1>
            <p className="text-body-sm font-body-sm text-on-surface-variant">
              Enter the 6-digit code sent to your registered phone number.
            </p>
          </div>
          <div className="flex flex-col gap-md mt-xs">
            <div className="flex justify-center gap-2" onPaste={handlePaste}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-14 bg-surface-container-lowest border border-outline-variant rounded-lg text-center text-headline-md font-headline-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              ))}
            </div>
            <button
              onClick={handleVerify}
              disabled={otpValue.length !== 6 || isVerifying}
              className={`mt-2 w-full bg-tertiary-fixed text-on-tertiary-fixed text-subheading font-subheading py-3 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer ${
                otpValue.length !== 6 ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''
              }`}
              type="button"
            >
              {isVerifying ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-on-tertiary-fixed" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Verifying...
                </>
              ) : (
                <>
                  Verify & Continue
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </>
              )}
            </button>
            <div className="text-center mt-2 border-t border-outline-variant/30 pt-sm">
              {canResend ? (
                <button
                  onClick={handleResend}
                  className="text-body-sm font-body-sm text-primary hover:text-primary-fixed-variant transition-colors font-medium cursor-pointer"
                >
                  Resend OTP Code
                </button>
              ) : (
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Resend code in <span className="font-medium text-primary">{timer}s</span>
                </p>
              )}
            </div>
          </div>
          <div className="text-center text-body-sm font-body-sm text-on-surface-variant">
            <Link className="hover:text-primary transition-colors" to="/register">
              Back to <span className="font-medium text-primary">Registration</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default OTPVerification
