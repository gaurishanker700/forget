import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [pro, setPro] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const showProduct = async () => {
      try {
        const res = (await axios.get("http://localhost:4000/product/show"))
          .data;
        setPro(res.products);
        console.log(pro)
      } catch (error) {
        console.log("show product error", error);
      }
    };
    showProduct();
  }, []);
  const handlecart=(id)=>{
    
    

  }
  console.log(cart)

  return (
    <>
      <h1 className="text-center">Welcome to my website</h1>
      <h1 className="text-center">Home page</h1>
      {
        pro.map((item, index) => {
          return (
            <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{item.price}</h6>
    <p className="card-text">{item.description}</p>
    <button className="btn btn-primary" onClick={handlecart(item._id)}>add cart</button>
    
  </div>
</div>
          )

          


        })}
    </>
  );
}

export default Home;
