import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function UseState() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  return (
    <div className="flex flex-col items-center  justify-center pt-10 ">
      <h1>Todo App</h1>
      <br />

      <input
      className="px-2 py-1 m-2 bg-red-100 border-gray-900 rounded-md "
        placeholder="Enter Todo"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="px-2 py-1 m-2 bg-green-400 border-gray-900 rounded-md "
        onClick={() => {
          if (todo.trim() === "") {
            alert("Please enter a todo");
            return;
          }

          setTodos([...todos, todo]);
          setTodo("");
        }}
      >
        Add Todo
      </button>

      <ul className="flex flex-col items-center  justify-center pt-1 bg-yellow-200 rounded-md  " >
        {todos.map((item, index) => (
          <li  className=" p-1 font-serif font- text-gray-800" key={index}>
            {item}
            <button
              className="px-2 py-1 m-5 bg-red-300 border-gray-900 rounded-md "
              onClick={() => {
                const newTodos = [...todos];
                newTodos.splice(index, 1);
                setTodos(newTodos);
              }}
            >
              Delete
            </button>
            <button
              className="px-2 py-1 m-2 border-gray-900 rounded-md bg-sky-400 "
              onClick={() => {
                setEditIndex(index);
                setEditValue(item);
              }}
            >
              Edit
            </button>
          </li>

          
        ))}
     
      </ul>

      {editIndex !== null && (
        <div >
          <input
            placeholder="Edit Todo"
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button
            className="px-2 py-1 m-2 bg-green-400 border-gray-900 rounded-md "
            onClick={() => {
              const newTodos = [...todos];
              newTodos[editIndex] = editValue;
              setTodos(newTodos);
              setEditIndex(null);
              setEditValue("");
            }}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default UseState;
