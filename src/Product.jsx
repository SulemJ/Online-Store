import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from './View';

function Product  ()  {
  const [post, setPost] = useState([]); //to save the data from the fake store api
  const [count, setCount] = useState(null); // to save the total price 
  const [items, setItem] = useState(null); // to save the number of items added to cart
  const [showPrice, setShowPrice] = useState(false); // to check whether to show the price and the item added
  const savedData = localStorage.getItem("cartData");
  const [data, setData] = useState(() => {  // to save the data of items that are added to cart
    
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setPost( data))
    .catch(err => console.log(err))
  }, []);

  // Function to handle button clicks and fetch products based on category
  const handleclick = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(err => console.log(err));
  };

 function addItem(Price, id) {
   setCount(count + Price);
   setItem(items + 1);
   setShowPrice(true); 
   setData((prevData) => [...prevData, post[id - 1]]);
  };
  function rmAll(params) {
    setCount(0);
    setData([]);
    setItem(0);
    // localStorage.removeItem("cartData");
    setShowPrice(false); 
  }

  const handleAll = (category) => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(data));
  }, [data]);

  // const price = data.reduce((acc, item) => acc + item.price, 0); 

  return (
    <div>
      <div class= "head">

           <navit class="d-flex flex-wrap justify-content-between align-items-center  p-2  border-top ">
    <div class=" d-flex align-items-center ">
    <button onClick={() => handleclick('electronics')} type="button" className="btn btn-lg">electronics</button>
      <button onClick={() => handleclick('jewelery')} type="button" className="btn btn-lg">jewelery</button>
      <button onClick={() => handleclick("men's clothing")} type="button" className="btn btn-lg">men's clothing</button>
      <button onClick={() => handleclick("women's clothing")} type="button" className="btn btn-lg">women's clothing</button>
      <button onClick={() => handleAll("")} type="button" className="btn btn-lg">All</button>
    </div>

    <ul class="nav  justify-content-end mx-5 list-unstyled  d-flex ">
      {/* <li ><a class=" text-body-secondary px-3" target="_blank" href="https://www.linkedin.com/in/sulem-jibril-dawud-b04252220"><img class="bi  " width="24" height="24" src="pics\linkedin.svg"></img></a></li>
      <li ><a class=" text-body-secondary px-3" target="_blank" href="https://github.com/SulemJ"><img class="bi  " width="24" height="24" src="pics\github.svg"></img></a></li>
      <li ><a class=" text-body-secondary px-3" target="_blank" href="https://t.me/HBMme"><img class="bi  " width="24" height="24" src="pics\telegram.svg" ></img></a></li> */}
     <Link to="/"><button type="button" className="btn btn-lg">  <h1 class="title">Marketo</h1> </button></Link> 
      
    </ul>
</navit>
          </div>
     {/* Display Products */}
     <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {post.map((list) => (
                <div className="col">
                  <div className="card shadow-sm">
                  <Link to={`/blogs/${list.id}`} state={data} key={list.id}>
                   <img className="  bd-placeholder-img card-img-top" width="100%" height="225" src={list.image} alt="" />
                   </Link>
                    <div className="card-body">
                      
                     <Link to={`/blogs/${list.id}`} state={data} key={list.id}  style={{textDecoration: "none"}}> <p className=" card-text">{list.description.substr(0, 145).toLowerCase() } ...  </p>  </Link>
                      <div className="d-flex justify-content-between align-items-center">
                      <Link to={`/blogs/${list.id}`} state={data} key={list.id}>  
                      <div className="btn-group">
                          <button type="button" className="btn btn-sm">${list.price}</button>
                        </div>
                        </Link>
                        <h1 onClick={() => addItem(list.price, list.id) }  className="text-body-secondary">+</h1>
                      </div>
                    </div>
                  </div>
                </div>
             
            ))}
          </div>
        </div>
        <Link to={`/Cart`} state={data} >  
        {showPrice || data.length !== 0 ?
    //     <div class="d-flex flex-wrap justify-content-between align-items-center  p-2  border-top ">
    // <div class="col-md-4 d-flex align-items-center ">
    //   <span class="mb-3 mb-md-0 text-body-secondary bold ">
    //     {items || data.length} items</span>
    // </div>
       
    // <ul class="nav col-md-4 justify-content-end mx-5 list-unstyled  d-flex ">
    //  Total price = {data.length == 0 ? 0 : count || price}
    //  <button  onClick={rmAll}>  Checkout </button>  </ul>
    // </div>: ""
    <div>
      <div class="icons">
    {/* <!-- React icon from Devicon --> */}
    <i class="fas  fa-shopping-cart"></i>  
     </div>
     <div class="circle">
    {/* <!-- React icon from Devicon --> */}
    {items || data.length}
     </div>
     </div>: ""
  }

  </Link>
      </div>
      {/* Define Routes */}
      {/* <Routes>
        <Route path="/blogs/:id" element={<View />} />
      </Routes> */}
    </div> 
      
  );
};

export default Product;
