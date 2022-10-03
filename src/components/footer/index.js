import React, { useState } from "react";
import logo from "./../../images/logo/footerlogo.png"
function Footer(){
return(
  <div className="footer container-footer">
      <div className="col-4 footer-logo">
        <h1> <img src={logo}/></h1>

        <p>
          © 2021 Company Name
          <br />
          All rights reserved
        </p>
      </div>
      <div className="col-8 footer-menu">
        <ul>
          <li>Explore</li>
          <li>About Us</li>
          <li>Cities</li>
          <li>
            <button>Call</button>
          </li>
        </ul>
      </div>
    </div>
    );
}
export default Footer;