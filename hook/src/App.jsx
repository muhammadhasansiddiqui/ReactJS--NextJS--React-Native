import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userName, setUserName] = useState ("hasan");

  return (
    <div>
   <h1>Hi am {userName}</h1>


    </div>
  )
}

export default App
