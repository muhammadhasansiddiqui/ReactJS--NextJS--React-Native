import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";


function Home() {
    const theme = useContext(ThemeContext);
    console.log("🚀 ~ Home ~ theme:", theme);
    
  

  return (
    <div>
      <h1
      className="flex justify-center items-center h-screen bg-yellow-200
text-red-600 text-4xl font-bold"
      >This is the home page</h1>
    </div>
  );
}

export default Home;
