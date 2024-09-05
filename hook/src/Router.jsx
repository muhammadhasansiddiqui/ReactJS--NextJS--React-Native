import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';

import Header from './navbar';

function AppRouter() {
  return (
    <BrowserRouter>
<Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
