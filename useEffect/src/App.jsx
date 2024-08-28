import { useEffect, useState } from "react";
import './App.css';

function UseEffect() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("useEffect is called");
    getProducts();
  }, []);


  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log("res->", res);
        setProducts(res);
      });
  };

 

  return (
    <div className="container flex flex-col justify-center items-center  mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <img src={product.image} alt="Product Img" className="w-full h-10  object-contain rounded-t-lg mb-4" />
            <h1 className="text-xl font-semibold mb-2"> {product.title} </h1>
            <h2 className="text-lg text-gray-700 mb-2"> ${product.price} </h2>
            <p className="text-sm text-gray-600 mb-4"> {product.description} </p>
            <p className="text-sm text-gray-500 mb-2">Category: {product.category} </p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Rating: {product.rating.rate}</span>
              <span>{product.rating.count} Reviews</span>
            </div>
            <hr className="mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default UseEffect;
