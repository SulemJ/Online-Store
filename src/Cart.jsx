import React from "react";
import { useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";


function Cart(props) {
    let location = useLocation();
    let intialData = location.state || JSON.parse(localStorage.getItem("cartData")) || [];
    const [items, setItem] = useState(intialData); // saves data of items added to cart
    console.log(items);
    // const [item, setItem1] = [];
    const [count, setCount] = useState(intialData.length); // saves total number of items added to cart
    console.log(count);
    const [showChOut, setShowChOut] = useState(true); // checks if to show chechout btn or not


    const [TotalPrice, setPrice] = useState(() =>{      // saves total price added to cart
      return intialData.reduce((acc, item) => acc + ( item?.price ?? 0), 0);
    });  

    
// async  function addItem(price, ite) {
//     // Check if item already exists in the cart
//   //   console.log(items.id);
//   let item = await useEffect(() => {
//     // Fetch the item details based on the ID
//     fetch(`https://fakestoreapi.com/products/${id}`)
//       .then(response => response.json())
//       .then(data => setItem(data))
//       .catch(err => console.log(err));
//   }, [ite]); 
      
//     // const existingItem = items.find((data) => data.id === ite);
  
//     // let updatedItem;
//     // if (existingItem) {
//       // Increase quantity if item already exists
//       // updatedItem = items.map((data) =>
//       //   data.id === ite
//       //     ? { ...data, quantity: data.quantity + 1 }
//       //     : data
//       // );
//     // } else {
//     //   // Add new item to the cart
//     //   updatedItem = [...items, { ...item, quantity: 1 }];
//     // }
//     console.log(item);
//     setItem((prevData) => [...prevData, item]);
//     // setItem(updatedItem);
//     setCount(count + 1);
//     setPrice(TotalPrice + price);
  
//     // Update local storage
//     localStorage.setItem("cartData", JSON.stringify(items));
  // }
  

    // to remove items from cart
  function rmItem(Price, id){
    // const updatedItems = [];
    let removed = false;
    const updatedItems = items.filter((item) => {
      if (!removed && item && item.id != null && item.id === id) { // Check for null and undefined
        removed = true;
        return false;
      }
      // Only filter out items without a valid id
      return item && item.id != null; // Check for null and undefined
    });
    // }
    // items.forEach(item => {
    // updatedItems.push(item);
    //  if(item.id == id && no === 0){
    //    updatedItems.pop(item);
    //   no = 21;
    // }
    // });
    // updates the data of items 
    setCount(updatedItems.length ); // updates the no of items 
    setItem(updatedItems); // saves the updated items in items var
    setPrice(TotalPrice - Price); // reduces the prices of removed items
  localStorage.setItem("cartData", JSON.stringify(updatedItems));
  
  }

  function rmAll(params) {
    setCount(0);
    setItem([]);
    setPrice(0);
    setShowChOut(false);
    localStorage.removeItem("cartData");
  }
  let s = Math.round(TotalPrice);
   
    return ( <div>
     <div class="head"> <ul class="nav  justify-content-end mx-5 list-unstyled  d-flex ">
      {/* <li ><a class=" text-body-secondary px-3" target="_blank" href="https://www.linkedin.com/in/sulem-jibril-dawud-b04252220"><img class="bi  " width="24" height="24" src="pics\linkedin.svg"></img></a></li>
      <li ><a class=" text-body-secondary px-3" target="_blank" href="https://github.com/SulemJ"><img class="bi  " width="24" height="24" src="pics\github.svg"></img></a></li>
      <li ><a class=" text-body-secondary px-3" target="_blank" href="https://t.me/HBMme"><img class="bi  " width="24" height="24" src="pics\telegram.svg" ></img></a></li> */}
     <Link to="/"><button type="button" className="btn btn-lg bold ">  <h1 class="title">Marketo</h1>  </button></Link> 

    </ul> </div>
        <div class="album py-5 bg-body-tertiary">
        <div class="container">
    
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {/* display all items added to cart */}
      {items.map((list, index)=> (  
        <div class="col">
        <div class="card shadow-sm">
       {/* { console.log(list.id)}   */}
        <Link to={`/blogs/${list?.id ?? ""}`} key={list?.id ?? ""}>
                   <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={list?.image ?? ""} alt="" />
                   </Link>
                    <div className="card-body">
                    {/* <p className="card-text">{list.description}</p> */}
                      
                    <Link to={`/blogs/${list?.id ?? ""}`} key={list?.id ?? ""} style={{textDecoration: "none"}}> <p className="card-text">{list?.description.substr(0, 250).toLowerCase() ?? "" } ...</p>    </Link>
                      <div className="d-flex justify-content-between align-items-center">
                      <Link to={`/blogs/${list?.id ?? ""}`} key={list?.id ?? ""}>  
                      <div className="btn-group">
                          <button type="button" className="btn btn-sm ">${list?.price ?? ""}</button>
                        </div>
                        </Link>
                        <h1 onClick={() => rmItem(list?.price?? "", list?.id?? "") }  className=" card-text">-</h1>
                      </div>
                    </div>
        </div>
      </div>
        ))}
       </div>
       </div>
       </div>
       {/* diplay the total no of items, price and checkout btn */}
       <div class="d-flex flex-wrap justify-content-between align-items-center  p-2  border-top ">
            <div class="col-md-4 d-flex align-items-center ">
            <h1 class="mb-3 mb-md-0 mx-4 bold ">
                {count} items</h1>
            </div>

            <ul class="nav col-md-4 justify-content-end  list-unstyled  d-flex ">
              <h1 class="px-3">  ${count === 0 ? 0 : Math.round(TotalPrice) } </h1>
           
            {/* checkout btn won't be shown if there's nothing in the cart */}
            {showChOut && count !== 0  ?   
            
            <div className="btn-group">
            <button onClick={rmAll} type="button" class="btn bolder "><h3> Checkout</h3></button> </div>
            : "" }    
           
             </ul>
            
           
        </div>
       </div>
       );
}

export default Cart;

// function Cart() {
//   let { state } = useLocation();
//   const [items, setItem] = useState(
//     JSON.parse(localStorage.getItem("cartData")) || []
//   );

//   const [count, setCount] = useState(
//     items.reduce((acc, item) => acc + item.quantity, 0)
//   );
//   const [TotalPrice, setPrice] = useState(
//     items.reduce((acc, item) => acc + item.price * item.quantity, 0)
//   );

//   const [showChOut, setShowChOut] = useState(items.length > 0);

//   function updateLocalStorage(updatedItems) {
//     localStorage.setItem("cartData", JSON.stringify(updatedItems));
//   }

//   function rmOneItem(price, id) {
//     const updatedItems = items.map((data) =>
//       data.id === id && data.quantity > 1
//         ? { ...data, quantity: data.quantity - 1 }
//         : data
//     ).filter((item) => item.quantity > 0);

//     setItem(updatedItems);
//     setCount(count - 1);
//     setPrice(TotalPrice - price);

//     updateLocalStorage(updatedItems);
//   }

//   function rmAllOfItem(price, id) {
//     const itemToRemove = items.find((data) => data.id === id);
//     const updatedItems = items.filter((data) => data.id !== id);

//     setItem(updatedItems);
//     setCount(count - itemToRemove.quantity);
//     setPrice(TotalPrice - itemToRemove.price * itemToRemove.quantity);

//     updateLocalStorage(updatedItems);
//   }

//   return (
//     <div>
//       <div className="album py-5 bg-body-tertiary">
//         <div className="container">
//           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
//             {items.map((list) => (
//               <div className="col" key={list.id}>
//                 <div className="card shadow-sm">
//                   <img
//                     className="bd-placeholder-img card-img-top"
//                     width="100%"
//                     height="225"
//                     src={list.image}
//                     alt=""
//                   />
//                   <div className="card-body">
//                     <p className="card-text">{list.description}</p>
//                     <div className="d-flex justify-content-between align-items-center">
//                       <div className="btn-group">
//                         <button
//                           type="button"
//                           className="btn btn-sm btn-secondary"
//                         >
//                           ${list.price} x {list.quantity}
//                         </button>
//                       </div>
//                       <button
//                         onClick={() => rmOneItem(list.price, list.id)}
//                         className="btn btn-sm btn-warning"
//                       >
//                         -
//                       </button>
//                       <button
//                         onClick={() => rmAllOfItem(list.price, list.id)}
//                         className="btn btn-sm btn-danger"
//                       >
//                         Remove All
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {showChOut && count !== 0 && (
//         <div className="d-flex flex-wrap justify-content-between align-items-center p-2 border-top">
//           <div className="col-md-4 d-flex align-items-center">
//             <span className="mb-3 mb-md-0 text-body-secondary bold">
//               {count} items
//             </span>
//           </div>

//           <ul className="nav col-md-4 justify-content-end mx-5 list-unstyled d-flex">
//             Total price = {TotalPrice}
//             <button onClick={rmAllOfItem}>Checkout</button>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }
// export default Cart;
