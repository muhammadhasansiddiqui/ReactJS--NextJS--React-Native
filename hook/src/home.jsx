import { useContext } from "react";
import { ThemeContext } from "./Contract/ThemeCon";


function Home() {
    const theme = useContext(ThemeContext);
    console.log("🚀 ~ Home ~ theme:", theme);
    
  

  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
}

export default Home;
