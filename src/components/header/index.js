import React, { useState } from "react";
import './index.css';
import Logo from "./logo"
import "./../../styles/style.css"
import menu from "./../../images/logo/menu.png"
import Navbar from "./navbar"
import img from "./../../images/Vectorsearch.png"

function Main(){

  const [showMenu, setShowMenu] = useState(false);
    return(
    <header className="container home-slide">
      <div className="navbar">
        <Logo /> 
        <div>
         <Navbar />
         </div>
        <img src={menu} className='menu-icon' />
      </div>
      <div className="row">
        <div className="col-2">
          <h2> Rethink your living & renting</h2>
          <p> Make your stay painless with us</p>
          <button onClick={()=>setShowMenu(!showMenu)}> <img src={img}/> Buy Now </button>
        </div>
  <div className="col-2">   

  </div>
      </div>

    </header>
    );
}
export default Main;