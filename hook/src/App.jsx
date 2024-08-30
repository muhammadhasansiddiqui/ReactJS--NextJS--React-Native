import { useState } from "react";

const  {todos, setTodos} = useState([]);
const [newTodo, setNewTodo] = useState(""); 

function App() {
  

  return (
    <div className="max-w-md p-4 mx-auto">
<h1 className="px-4 py-2 mr-2 font-semibold text-pink-500  rounded text-lg ">Todos</h1>
<div>

<input type="text"
placeholder="Add todo" value={newTodo} className= "border border-gray-400 rounded-md px-4 py-2 mr-2" />
<button className="px-4 py-2 mr-2 font-semibold text-white bg-pink-500 rounded" 
onChange={(e) => {
  setTodos([...todos, newTodo]);
  setNewTodo("");
}}
>Add</button>

<div>
<ul></ul>

</div>

</div>
      
     
    </div>
  );
}

export default App;
