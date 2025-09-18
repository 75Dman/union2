import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Logo section removed for a cleaner, more professional look */}
        <div className="responsive-card" style={{ padding: 32, fontFamily: 'sans-serif', maxWidth: 500, margin: '0 auto' }}>
          <h1>API Key Test</h1>
          <p>
            <strong>VITE_API_KEY:</strong> {import.meta.env.VITE_API_KEY || 'Not found'}
          </p>
          <p>
            <strong>VITE_TEST:</strong> {import.meta.env.VITE_TEST || 'Not found'}
          </p>
          <p style={{ color: 'red', fontSize: 12 }}>
            (Do not display your real API key in production apps!)
          </p>
        </div>
    </>
  )
}

export default App
