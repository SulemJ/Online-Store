import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const baseURL = "https://fakestoreapi.com/products";

function Products(){

const [post, setPost] = useState([]);
const [cat, setcat] = useState([]);

 useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(data => setcat( data))
    .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setPost( data))
    .catch(err => console.log(err))
  }, []);
  
  function handleclick(value) {
    console.log(value);
    <h1>hello</h1>
    if (value === "jewelery") {
    console.log("you just clicked");
    return ( <div class="album py-5 bg-body-tertiary">
      <div class="container">
  
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    {post.map((list, index)=> (  
      <div class="col">
        
          {/* // <li key={index}>{list.id} | {list.description}  */}
      <div class="card shadow-sm">
        <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={`${list.image}`} alt="" />
        <div class="card-body">
          <p class="card-text">{list.description}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-secondary">${list.price}</button>
            </div>
            <h1 class="text-body-secondary">+</h1>
          </div>
        </div>
      </div>
    </div>
      ))}
     </div>
     </div>
     </div>
     );
    }else{
      console.log("WTF")
    return  <h1>Nothing</h1>
    }
  }

  return  <div> 
    {/* {console.log(typeof this.handleclick) } */}
           
            
                <button onClick={() => handleclick('electronics')} type="button" class="btn btn-lg ">electronics</button>
                <button onClick={() => handleclick('jewelery')} type="button" class="btn btn-lg ">jewelery</button>
                <button onClick={() => handleclick(" men's clothing")} type="button" class="btn btn-lg ">men's clothing</button>
                <button onClick={() => handleclick("women's clothing")} type="button" class="btn btn-lg ">women's clothing</button>
             
           
                {/* <button onClick={handleclick("All")} type="button" class="btn btn-lg ">All</button> */}
            
            {/* <button onClick={handleclick} name="cata" type="button" class="btn btn-lg ">cata</button> */}
     {/* <div class="album py-5 bg-body-tertiary">
      <div class="container">
  
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    {post.map((list, index)=> (  
      <div class="col">
        
          {/* // <li key={index}>{list.id} | {list.description}  */}
      {/* <div class="card shadow-sm">
        <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={`${list.image}`} alt="" />
        <div class="card-body">
          <p class="card-text">{list.description}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-secondary">${list.price}</button>
            </div>
            <h1 class="text-body-secondary">+</h1>
          </div>
        </div>
      </div>
    </div>
      ))}
     </div>
     </div>
     </div> */} 
  </div>
  }      
   
 
export default Products

 {/* //   return ( */}
  {/* //   <div> */}
  {/* //     {showprod} */}
  {/* //     https://fakestoreapi.com/products     */}
  {/* //     <ul> */}
  {/* //       {post.map((list, index)=> ( */}
  {/* //         <li key={index}>{list.id} | {list.description} </li>
  //       ))}
  //     </ul> */}
    {/* </div> */}
  {/* //     <div class="album py-5 bg-body-tertiary">
  // //     <div class="container">
  
  // //       <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  // //     {post.map((list, index)=> ( */}
  {/* //         <li key={index}>{list.id} | {list.description} </li>
  //       <div class="col">
  // //     <div class="card shadow-sm">
  // //       <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={`${posts.image}`} alt="" />
  // //       <div class="card-body">
  // //         <p class="card-text">{posts.description}</p>
  // //         <div class="d-flex justify-content-between align-items-center">
  // //           <div class="btn-group">
  // //             <button type="button" class="btn btn-sm btn-secondary">${posts.price}</button>
  // //           </div>
  // //           <h1 class="text-body-secondary">+</h1>
  // //         </div>
  // //       </div>
  // //     </div>
  // //   </div>
  //   </div> 
  //   </div>
  //   </div>













  //       <div class="album py-5 bg-body-tertiary">
  //   <div class="container">

  //     <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  //       <div class="col">
  //         <div class="card shadow-sm">
  //           <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={`${post[0].image}`} alt="" />
  //           <div class="card-body">
  //             <p class="card-text">{post[0].description}</p>
  //             <div class="d-flex justify-content-between align-items-center">
  //               <div class="btn-group">
  //                 <button type="button" class="btn btn-sm btn-secondary">${post[0].price}</button>
  //               </div>
  //               <h1 class="text-body-secondary">+</h1>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="col">
  //         <div class="card shadow-sm">
  //           <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
  //           <div class="card-body">
  //             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  //             <div class="d-flex justify-content-between align-items-center">
  //               <div class="btn-group">
  //                 <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
  //                 <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
  //               </div>
  //               <small class="text-body-secondary">9 mins</small>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="col">
  //         <div class="card shadow-sm">
  //           <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
  //           <div class="card-body">
  //             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  //             <div class="d-flex justify-content-between align-items-center">
  //               <div class="btn-group">
  //                 <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
  //                 <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
  //               </div>
  //               <small class="text-body-secondary">9 mins</small>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       <div class="col">
  //         <div class="card shadow-sm">
  //           <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
  //           <div class="card-body">
  //             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  //             <div class="d-flex justify-content-between align-items-center">
  //               <div class="btn-group">
  //                 <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
  //                 <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
  //               </div>
  //               <small class="text-body-secondary">9 mins</small>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="col">
  //         <div class="card shadow-sm">
  //           <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
  //           <div class="card-body">
  //             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  //             <div class="d-flex justify-content-between align-items-center">
  //               <div class="btn-group">
  //                 <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
  //                 <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
  //               </div>
  //               <small class="text-body-secondary">9 mins</small>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="col">
  //         <div class="card shadow-sm">
  //           <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
  //           <div class="card-body">
  //             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  //             <div class="d-flex justify-content-between align-items-center">
  //               <div class="btn-group">
  //                 <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
  //                 <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
  //               </div>
  //               <small class="text-body-secondary">9 mins</small>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       <div class="col">
  //         <div class="card shadow-sm">
  //           <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
  //           <div class="card-body">
  //             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  //             <div class="d-flex justify-content-between align-items-center">
  //               <div class="btn-group">
  //                 <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
  //                 <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
  //               </div>
  //               <small class="text-body-secondary">9 mins</small>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="col">
  //         <div class="card shadow-sm">
  //           <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
  //           <div class="card-body">
  //             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  //             <div class="d-flex justify-content-between align-items-center">
  //               <div class="btn-group">
  //                 <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
  //                 <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
  //               </div>
  //               <small class="text-body-secondary">9 mins</small>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="col">
  //         <div class="card shadow-sm">
  //           <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
  //           <div class="card-body">
  //             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  //             <div class="d-flex justify-content-between align-items-center">
  //               <div class="btn-group">
  //                 <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
  //                 <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
  //               </div>
  //               <small class="text-body-secondary">9 mins</small>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  //   </div>
  )
}
*/}