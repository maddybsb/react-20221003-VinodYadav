import React from 'react';
import Down from '../../../images/down-arrow.png'


function Navbar(){
    return( 
         
           <ul>
             <li><a href='/job'>Explore</a> </li>
             <li><a href='#'>About Us</a> </li>
             <li><a href='#'>Cities <img src={Down} /></a> </li> 
               <li><a href='#' class="callbtn">Call</a> </li>
           </ul>
          
    );
}
export default Navbar;