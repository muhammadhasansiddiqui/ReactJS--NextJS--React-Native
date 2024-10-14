import axios from "axios";
import { useEffect, useState } from "react"



const products = () =>{

    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          console.log(res.data.products);
          setProducts(res.data.products);
          setloading(false);
        })
        .catch((err) => {
            setloading(false);
          console.log(err);

        });
    },[]);


    return(
        <div className="container mx-auto">
            {loading ?(<h1>loading...</h1>):(<h1>products</h1>) }
            <h1>products </h1>
        </div>
    )

}
export default products