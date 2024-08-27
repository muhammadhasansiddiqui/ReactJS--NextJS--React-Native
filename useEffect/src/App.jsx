import { useEffect, useState } from "react";
import './App.css';

function UseEffect() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("useEffect is called");
    getCARS();
  }, []);

  const getCARS = async () => {
    try {
      const response = await fetch("https://freetestapi.com/api/v1/cars");
      const data = await response.json();
      setCars(data);
      console.log("🚀 ~ getCARS ~ data:", data);
    } catch (error) {
      console.error("Failed to fetch cars:", error);
    }
  };

  return (
    <div>
      <h1>Cars</h1>

      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      
        {cars
          .filter(car => car.make.toLowerCase().includes(search.toLowerCase()))
          .map(car => (
            <div key={car.id}>
              <img src={car.image} alt={`${car.make} ${car.model}`} />
              <h2>{car.make}</h2>
              <p>{car.model}</p>
              <p>{car.year}</p>
            </div>
          ))}
        

      <h1>Fetch</h1>
      <button onClick={getCARS}>Fetch</button>
    </div>
  );
}

export default UseEffect;
