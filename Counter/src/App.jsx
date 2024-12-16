import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Conter: {count}</h1>
        <button onClick={() => setCount(count +1)}>Add 1</button>
        <button onClick={() => setCount(count -1)}>Minus 1</button>
        <button onClick={() => setCount(0)}>Reset</button>
        
      </div>
    </>
  )
}

export default App
