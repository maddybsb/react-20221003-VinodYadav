import React from "react";
import { Link } from 'react-router-dom';
import footerlogo from "./../../images/logo/footerlogo.png"

function FooterLogo(){
    return(
       <Link to="/" className="logo">
          <img src={footerlogo}/>
       </Link>
    );
}

export default FooterLogo; 