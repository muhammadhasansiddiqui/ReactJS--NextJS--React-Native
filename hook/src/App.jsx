import { useState } from "react";

function App() {
  const [name, setName] = useState("Hasan");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="bg-yellow-300 mb-4 px-4 py-2">{name}</h1>
      
      <button
        onClick={() => setName("Bahi")}
        className="px-4 py-2 mb-2 bg-blue-500 text-white rounded"
      >
        Update
      </button>
      
      <button
        onClick={() => setName("Hasan")}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        RE TURN
      </button>
    </div>
  );
}

export default App;
