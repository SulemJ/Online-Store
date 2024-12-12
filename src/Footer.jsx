import React from "react";
import {  Link } from "react-router-dom";
import {
  AiOutlineFile,
  AiOutlinePhone,
  AiOutlineHome,

  AiOutlineUser,
} from "react-icons/ai";
function Footer(params) {
         const d = new Date();
         let year = d.getFullYear();
   return <div id="footer" > 
    <footer class="d-flex flex-wrap justify-content-between align-items-center  p-2  border-top ">
    <div class="col-md-4 d-flex align-items-center ">
      <span class=" mb-md-0  bold ">
        &copy;{year} Marketo</span>
    </div>
  
    <ul class=" col-md-4 justify-content-end list-unstyled  d-flex title">
      {/* <li ><a class=" text-body-secondary px-3" target="_blank" href="https://www.linkedin.com/in/sulem-jibril-dawud-b04252220"><img class="bi  " width="24" height="24" src="pics\linkedin.svg"></img></a></li>
      <li ><a class=" text-body-secondary px-3" target="_blank" href="https://github.com/SulemJ"><img class="bi  " width="24" height="24" src="pics\github.svg"></img></a></li> */}
      <li class="nav-item  mx-2 mb-0"><Link to="/Cart" style={{color:"rgb(41, 8, 37)"}}>Cart</Link></li>
      <li class="nav-item  mx-2 mb-0"> <Link to="/"  style={{color:"rgb(41, 8, 37)"}}><AiOutlineHome style={{ marginBottom: "7px" }} /> Home </Link></li>
      {/* <li ><a class=" text-body-secondary px-3" target="_blank" href="https://t.me/HBMme"><img class="bi  " width="24" height="24" src="pics\telegram.svg" ></img></a></li> */}
    </ul>
   
</footer>
</div>
}
export default Footer;