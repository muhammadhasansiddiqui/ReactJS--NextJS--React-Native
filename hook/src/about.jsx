import { useContext } from "react";

import { ThemeContext } from "./Context/ThemeContext";


function about(){
    const theme = useContext(ThemeContext);
    console.log("🚀 ~ Home ~ theme:", theme);
    
    return(
    
    <div className="flex justify-center items-center h-screen bg-yellow-200" >
<h1 className="
text-red-600 text-4xl font-bold
">
  This is about page
</h1>
</div>
    )
    
    }
    export default about