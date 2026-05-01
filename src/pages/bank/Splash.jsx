import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login', { replace: true })
    }, 2000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="bg-background text-on-background font-sans antialiased min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full ambient-glow blur-[80px] pointer-events-none z-0"></div>
      <div className="z-10 flex flex-col items-center justify-center space-y-md animate-float-subtle">
        <div className="flex items-center justify-center">
          <span className="material-symbols-outlined" style={{ fontSize: '80px', fontVariationSettings: "'FILL' 0", color: 'var(--on-surface)' }}>
            hexagon
          </span>
        </div>
        <h1 className="font-display-xl text-display-xl tracking-tighter uppercase font-black text-on-surface">
          SecureBank
        </h1>
      </div>
      <div className="absolute bottom-xl w-64 max-w-[80%] flex flex-col items-center space-y-sm z-10">
        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase animate-pulse-subtle">
          Initializing Secure Environment
        </span>
        <div className="w-full h-1 bg-surface-variant rounded-full overflow-hidden flex">
          <div className="w-[45%] h-full rounded-full shadow-[0_0_10px_rgba(231,195,101,0.5)] animate-shimmer"></div>
        </div>
      </div>
    </div>
  )
}

export default Splash
