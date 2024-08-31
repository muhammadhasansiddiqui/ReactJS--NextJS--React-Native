import { useState ,useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function UseState() {
  const inputRef = useRef()

  return (
    <div>
     <h1>{inputRef}</h1>
     console.log("🚀 ~ UseState ~ inputRef:", inputRef);


    </div>
  );
}

export default UseState;
