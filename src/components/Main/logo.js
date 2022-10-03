import React from "react";
import { Link } from 'react-router-dom';
import logo from "./../../images/logo/Your Logo.png"

function Logo(){
    return(
       <Link to="/" className="logo">
          <img src={logo}/>
       </Link>
    );
}

export default Logo; 