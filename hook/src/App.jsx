import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [userName, setUserName] = useState ("hasan");
  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count + 1);
  // }
  // use with input
const [name, setName] = useState("");
const [email, setEmail] = useState("");

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <p>Name: {name}</p>
      <p>Email: {email}</p>

    {/* <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />

   <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
   <h1>Hi am {userName}</h1>  */}
   {/* <button onClick={handleClick}>Click Me</button>
   <p>Count: {count}</p> */}


    </div>
  )
}

export default App
