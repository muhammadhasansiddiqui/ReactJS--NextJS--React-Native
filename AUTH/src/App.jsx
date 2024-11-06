import React, { useState, useEffect } from "react";
import  {BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Products from "./pages/products";
import ProductsDetails from "./pages/productsDetails";


const App = () => {
return (
    <BrowserRouter>
<Routes>

<Route path="/" element={<Products />}  />
<Route path="/products/:id" element={<ProductsDetails />}  />



</Routes>
    </BrowserRouter>
  );
};

export default App;
