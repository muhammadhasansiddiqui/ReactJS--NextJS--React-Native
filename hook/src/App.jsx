import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userName, setUserName] = useState ("hasan");
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
   <h1>Hi am {userName}</h1>
   <button onClick={handleClick}>Click Me</button>
   <p>Count: {count}</p>


    </div>
  )
}

export default App
