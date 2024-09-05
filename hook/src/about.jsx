import { useContext } from "react";

import { ThemeContext } from "./Contract/ThemeCon";


function about(){
    const theme = useContext(ThemeContext);
    console.log("🚀 ~ Home ~ theme:", theme);
    
    return(
    
        <h1>THis is  about page </h1>
    )
    
    }
    export default about