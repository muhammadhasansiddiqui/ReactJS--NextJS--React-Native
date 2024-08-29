import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(["test1", "test2"]);

  return (
    <div className="max-w-md p-4 mx-auto">
      <h1 className="mb-4 text-3xl font-bold text-fuchsia-600">Todos</h1>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full px-3 py-2 mb-2 border rounded"
        placeholder="Enter a todo"
      />

      <button
        onClick={() => {
          setTodos([...todos, value]);
          setValue("");
        }}
        className="w-full px-4 py-2 mb-4 font-semibold text-white rounded bg-fuchsia-600 hover:bg-fuchsia-700"
      >
        Add
      </button>

      <ul className="pl-5 list-disc">
        {todos.map((v, i) => (
          <li key={i} className="mb-1 text-lg">
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
