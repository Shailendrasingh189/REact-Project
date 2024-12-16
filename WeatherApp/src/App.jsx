import { useState } from 'react'
import Weather from './components/Weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen grid bg-blue-100">
        <Weather />
      </div>
    </>
  )
}

export default App
