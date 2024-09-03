import { BrowserRouter,Route, Routes } from "react-router-dom";

import About from "./pages/about";
import contact from "./pages/contact";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<about />} />
        <Route path="/contact" element={<contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;