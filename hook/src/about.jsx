import { useContext } from "react";

import { ThemeContext } from "./Contract/ThemeCon";


function about(){
    const theme = useContext(ThemeContext);
    console.log("🚀 ~ Home ~ theme:", theme);
    
    return(
    
<h1 className="flex justify-center items-center h-screen bg-yellow-200
text-red-600 text-4xl font-bold
">
  This is about page
</h1>
    )
    
    }
    export default about