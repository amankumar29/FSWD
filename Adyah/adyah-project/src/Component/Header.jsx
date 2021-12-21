import React from "react";
import {Link} from "react-router-dom";
const Header = () =>{
    return(
        <>
        <header>
           <nav>
               <div>
                   <h2>
                       <span>A</span>dyah 
                       <span>B</span>uilders 
                       <span>&</span>  
                       <span>D</span>evelopers 
                   </h2>
                   <Link to ="Home">Home </Link>
                   <Link to ="About">About </Link>
                   <Link to ="Services">Sercices </Link>
                   <Link to ="Contact">Contact </Link>
               </div>
           </nav>
        </header>
        </>
    )
}
export default Header;