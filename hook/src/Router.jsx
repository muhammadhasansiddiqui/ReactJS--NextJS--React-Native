import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Header from './navbar';
import Notfound from './notfound';

function AppRouter() {
  return (
    <BrowserRouter>
<Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />


      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
