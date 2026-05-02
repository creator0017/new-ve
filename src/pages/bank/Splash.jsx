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
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          <div className="absolute inset-0 bg-amber-400 blur-3xl opacity-30 rounded-full animate-pulse"></div>
          <span className="material-symbols-outlined relative text-8xl text-amber-400" style={{ fontVariationSettings: "'FILL' 1" }}>
            hexagon
          </span>
        </div>
<h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white uppercase">
           SecureBank
         </h1>
        <div className="mt-8 w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full animate-pulse" style={{ width: '60%' }}></div>
        </div>
        <p className="text-lg text-gray-400 uppercase tracking-widest mt-4">Initializing Secure Environment</p>
      </div>
    </div>
  )
}

export default Splash
