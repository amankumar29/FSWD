import React from "react";
import {Link} from "react-router-dom";
class Navbar extends React.Component{
    render(){
        return(
            <>
            <Link to = "Home">Home</Link>
            <Link to = "About">About</Link>
            <Link to = "Contact">Contact</Link>

            
            </>
        )
    }
}
export default Navbar;