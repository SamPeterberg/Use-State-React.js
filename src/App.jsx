import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'









function App() {
  const [Count,setcount] =useState(0)

  return (
    <>
    <h1>Use state</h1>
      <div>
        <h1> {Count}</h1>
        <button onClick={()=> setcount(Count+1)  }>Click Me</button>
      </div>
    </>
  )
}

export default App
