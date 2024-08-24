import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function UseState() {
const [todo, setTodo] = useState("");
const [todos, setTodos] = useState([]);
const [editIndex, setEditIndex] = useState(null);
const [editValue, setEditValue] = useState("");

  return (

    <div className=" justify-center pt-10">
  {/* <h1>Todo App</h1> */}
  
  <input placeholder='Enter Todo' type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
  <button  
 className='border-gray-900 px-2 py-1 m-2 rounded-md bg-green-400 '    onClick={() => {

if (todo.trim() === "") {
  alert("Please enter a todo");
  return;
}

    setTodos([...todos, todo]);
    setTodo("");
  }}>Add Todo</button>

  <ul>
    {todos.map((item, index) => (
      <li key={index}>
        {item}
        <button className='border-gray-900 px-2  m-5 py-1 rounded-md bg-red-300 '  
      
      onClick={() => {
          const newTodos = [...todos];
          newTodos.splice(index, 1); 
          setTodos(newTodos);
        }}>Delete</button>
        <button
        
        className='border-gray-900 px-2 py-1 m-2 rounded-md bg-sky-400 '  
        onClick={() => {
          setEditIndex(index);
          setEditValue(item);
        }}>Edit</button>
      </li>
    ))}
  </ul>

  {editIndex !== null && (
    <div>
      <input placeholder='Edit Todo' type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
      <button
       className='border-gray-900 px-2 py-1 m-2 rounded-md bg-green-400 '  
      onClick={() => {
        const newTodos = [...todos];
        newTodos[editIndex] = editValue;
        setTodos(newTodos);
        setEditIndex(null);
        setEditValue("");
      }}>Save</button>
    </div>
  )}

</div>

  )
}

export default UseState;
