import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="from-neutral-50">{count}</h1>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>inc</button>
      <button disabled={count < 1}  onClick={() => setCount(prevCount => prevCount - 1)}>dec</button>
    </div>
  );
}

export default UseState;
