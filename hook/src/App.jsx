import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(["test 1", "test2"]);

  return (
    <div className="bg-orange-400 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-4 font-bold">Todos</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        onClick={() => {
          setTodos([...todos, value]);
          setValue("");
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ADD Todos
      </button>
      <ul className="mb-4 w-full">
        {todos.map((v, i) => (
          <li className="font-bold text-center mb-2" key={i}>
            {v}

          
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
