import { BrowserRouter, Route ,Routes} from "react-router-dom";
import home from "./pages/home";
import about from "./pages/about";
import contact from "./pages/contact";



function AppRouter (){
return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<home />} /> 

</Routes>
</BrowserRouter>

)}
export default AppRouter; 