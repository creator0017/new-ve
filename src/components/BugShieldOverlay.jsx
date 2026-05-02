import React, { useState, useEffect, useRef } from 'react';

const BugShieldOverlay = () => {
  const [status, setStatus] = useState("READY");
  const [logs, setLogs] = useState([]);
  const timerRef = useRef(null);

  useEffect(() => {
    const poll = setInterval(() => {
      fetch('http://127.0.0.1:5000/api/status')
        .then(res => res.json())
        .then(data => {
          setStatus(data.status);
          if (data.logs) setLogs(data.logs);
        });
    }, 400);
    return () => clearInterval(poll);
  }, []);

  useEffect(() => {
    if (status === "FIXED") {
      timerRef.current = setTimeout(() => {
        fetch('http://127.0.0.1:5000/api/reset', { method: 'POST' })
          .then(() => window.location.reload())
          .catch(() => console.log("Reset failed, retrying..."));
      }, 3000);
    }
  }, [status]);

  if (status === "CRASHED") {
    return (
      <div className="fixed inset-0 z-50 bg-red-900/90 backdrop-blur-sm flex flex-col items-center justify-center p-6 font-mono text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cracked-glass.png')]"></div>
        
        <div className="text-center animate-pulse">
          <h1 className="text-7xl font-black tracking-tighter mb-2">SYSTEM BREACHED</h1>
          <p className="bg-red-600 px-4 py-1 text-xl inline-block">DATABASE CRITICAL FAILURE</p>
        </div>

        <div className="mt-12 bg-black/80 border border-red-500 p-6 w-full max-w-2xl rounded-md shadow-2xl">
          <p className="text-red-500 font-bold mb-2">SHANNON AGENT LOG:</p>
          <p className="text-gray-300 text-sm">{logs[logs.length - 1] || "Analyzing SQL Injection Pattern..."}</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-4 h-4 bg-red-600 rounded-full animate-ping"></div>
            <span className="text-xs uppercase tracking-widest text-red-400">AI Guardian Attempting real-time patch...</span>
          </div>
        </div>
      </div>
    );
  }

  if (status === "FIXED") {
    return (
      <div className="fixed inset-0 z-50 bg-green-900/95 flex flex-col items-center justify-center p-6 font-mono text-white transition-all duration-1000">
        <div className="flex flex-col items-center text-center">
          <div className="text-9xl mb-6">✓</div>
          <h1 className="text-6xl font-bold tracking-tighter">VULNERABILITY SEALED</h1>
          <p className="mt-4 text-green-200 text-lg max-w-lg">
            Suraksha AI has deployed a Parameterized SQL Patch. Integrity verified.
          </p>
          <p className="mt-10 text-xs text-green-400 animate-pulse uppercase">Restoring system access in 3 seconds...</p>
        </div>
      </div>
    );
  }

  return null;
};

export default BugShieldOverlay;
