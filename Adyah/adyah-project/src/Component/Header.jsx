import React from "react";
import {Link} from "react-router-dom";
const Header = () =>{
    return(
        <>
        <header>
           <nav>
               <div>
                   <img src="./img/logo.png" alt="img" width="150px" />
                   <h2>
                       Adyah Builders & Developers
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