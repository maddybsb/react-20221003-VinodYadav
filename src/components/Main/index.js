import React, { useState } from "react";
import './index.css';
import Logo from "./logo"
import menu from "./../../images/logo/menu.png"
import Navbar from "./../header/navbar"
import Filter from "./../filter"
import Down from '../../images/down-arrow.png'
import MainFooter from '../../images/Vectorfoote.png'

function Main(){

  const [showMenu, setShowMenu] = useState(false);
    return(
      <div>
    <div className="container home-slide"> 
      <div className="navbar">
         <Logo /> 
         <div className={showMenu ? "nav-mobile" :"nav" }>
         <Navbar />
         </div>
         <button className={showMenu ? 'menu-icon' :  "menu-icon img"}  onClick={()=>setShowMenu(!showMenu)}> <img src={menu}/></button>
   
      </div>
        <div className="">
        <h2 className="heading">
          Rethink your
          <br /> living & renting
        </h2>
        <h6 className="sub-heading">Make your stay painless with us </h6>
      </div>
      
     
        <Filter />
        <div className="down-arrow">
          <img src={Down} />
        </div>
     </div>
     <img src={MainFooter} className="wave" />
     </div>
     
    );
}
export default Main;