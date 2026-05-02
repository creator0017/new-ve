import { useState, useEffect } from 'react';

const BugShieldOverlay = () => {
  const [status, setStatus] = useState("READY");
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://localhost:5000/api/status')
        .then(res => res.json())
        .then(data => {
          setStatus(data.status);
          setLogs(data.logs);
        })
        .catch(err => console.error("Backend offline"));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (status === "CRASHED") {
    return (
      <div className="fixed inset-0 z-50 bg-red-900 bg-opacity-95 flex flex-col items-center justify-center p-10 animate-pulse text-white font-mono border-8 border-red-500">
        <h1 className="text-6xl font-bold mb-4">SYSTEM BREACHED</h1>
        <div className="bg-black p-6 w-full max-w-2xl rounded-lg border border-red-400">
          <p className="text-red-500 mb-2 font-bold">[!] CRITICAL DATABASE FAILURE</p>
          <p className="text-gray-400 mb-4">{logs[logs.length - 1]}</p>
          <div className="text-xs text-green-500">
            AI AGENT: SHANNON IS ANALYZING THE PAYLOAD...
          </div>
        </div>
      </div>
    );
  }

  if (status === "FIXED") {
    return (
      <div className="fixed inset-0 z-50 bg-green-900 bg-opacity-95 flex flex-col items-center justify-center p-10 text-white font-mono border-8 border-green-500">
        <h1 className="text-6xl font-bold mb-4">VULNERABILITY SEALED</h1>
        <div className="bg-black p-6 w-full max-w-2xl rounded-lg border border-green-400 text-center">
          <p className="text-green-500 mb-2 font-bold">SURAKSHA AI: PROTECTION DEPLOYED</p>
          <p className="text-gray-300">Code patched using Parameterized SQL Query.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-500 rounded text-white font-bold"
          >
            CONTINUE SECURELY
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default BugShieldOverlay;
