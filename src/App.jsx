import { Routes, Route, Navigate } from 'react-router-dom'
import Splash from './pages/bank/Splash'
import Home from './pages/bank/Home'
import Register from './pages/bank/Register'
import OTPVerification from './pages/bank/OTPVerification'
import Login from './pages/bank/Login'
import Dashboard from './pages/bank/Dashboard'
import Transfer from './pages/bank/Transfer'
import BugShieldTerminal from './pages/bugshield/BugShieldTerminal'
import BugShieldOverlay from './components/BugShieldOverlay'

function App() {
  return (
    <>
      <BugShieldOverlay />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp-verify" element={<OTPVerification />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/bugshield" element={<BugShieldTerminal />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
