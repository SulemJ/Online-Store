import React, { useEffect } from "react";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
// import Icon from 'react-native-ico-shopping';

function View(props) {
  const { id } = useParams();
  let location = useLocation();
  const [item, setItem] = useState({});
  let intialData = location.state || JSON.parse(localStorage.getItem("cartData")) || [];
    const [items, setItems] = useState(intialData); // saves data of items added to cart
    const [count, setCount] = useState(intialData.length); // saves total number of items added to cart
    console.log(count);
    const [showChOut, setShowChOut] = useState(true); // checks if to show chechout btn or not


    const [TotalPrice, setPrice] = useState(() =>{      // saves total price added to cart
      return intialData.reduce((acc, item) => acc + item.price, 0);
    });  
  useEffect(() => {
    // Fetch the item details based on the ID
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setItem(data))
      .catch(err => console.log(err));
  }, [id]);

  function addItem(price, ite) {
    // Check if item already exists in the cart
  //   console.log(items.id);
    const existingItem = items.find((data) => data.id === ite.id);
  
    let updatedItems;
    if (existingItem) {
      // Increase quantity if item already exists
      updatedItems = items.map((data) =>
        data.id === item.id
          ? { ...data, quantity: data.quantity + 1 }
          : data
      );
    } else {
      // Add new item to the cart
      updatedItems = [...items, { ...item, quantity: 1 }];
    }
  
    setItems(updatedItems);
    setCount(count + 1);
    setPrice(TotalPrice + price);
  
    // Update local storage
    localStorage.setItem("cartData", JSON.stringify(updatedItems));
  }
  

  // if (!item) return <p>Loading...</p>;

    return <div>
      <ul class="nav  justify-content-end mx-5 list-unstyled  d-flex ">
      {/* <li ><a class=" text-body-secondary px-3" target="_blank" href="https://www.linkedin.com/in/sulem-jibril-dawud-b04252220"><img class="bi  " width="24" height="24" src="pics\linkedin.svg"></img></a></li>
      <li ><a class=" text-body-secondary px-3" target="_blank" href="https://github.com/SulemJ"><img class="bi  " width="24" height="24" src="pics\github.svg"></img></a></li>
      <li ><a class=" text-body-secondary px-3" target="_blank" href="https://t.me/HBMme"><img class="bi  " width="24" height="24" src="pics\telegram.svg" ></img></a></li> */}
     <Link to="/"><button type="button" className="btn btn-lg">  <h1 class="title">Marketo</h1>  </button></Link> 

    </ul>
   
         <div class="album p-5 bg-body-tertiary" >
    <div class="container p-5">
        <div className='row'>
      <div class="row  col-md-3 col-sm-2 col-1" >
     
              <div className="col" >
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="400" src={item.image} alt="" />
                
                </div>
              </div>
      </div>     
              <div className="col mx-5 pt-3" >
                  <div className="card-body mx-5 pt-5">
                    <h4>{item.title}</h4>
                        <p className="card-text">{item.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-lg btn-dark">${item.price}</button>
                          </div>
                          <div className="btn-group"> <button onClick={() =>addItem(item.price, item)}  type="button"  className="btn btn-lg ">+</button> </div>
                        </div>
                      </div>
                  </div>
        
        
        </div>
        </div>
        <Link to={`/Cart`} state={items} >  
        {showChOut || items.length !== 0 ?
        <div>
          <div class="icons">
          {/* <!-- React icon from Devicon --> */}
          <i class="fas  fa-shopping-cart"></i>  
           </div>
           <div class="circle">
          {/* <!-- React icon from Devicon --> */}
          {count}
           </div>
          
        {/* <div class="d-flex flex-wrap justify-content-between align-items-center  p-2  border-top ">
    <div class="col-md-4 d-flex align-items-center ">
      <span class="mb-3 mb-md-0 text-body-secondary bold ">
        { count} items</span>
    </div>
       
    <ul class="nav col-md-4 justify-content-end mx-5 list-unstyled  d-flex ">
     Total price = {TotalPrice} */}
     {/* <button  onClick={rmAll}>  Checkout </button>  */}
     {/*</ul>  */}
    </div>: ""
  }
  </Link>
      
    </div>
    </div>
}

export default View;

