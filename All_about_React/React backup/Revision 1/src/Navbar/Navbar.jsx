import React from "react";
import {Link} from "react-router-dom";
class Navbar extends React.Component{
    render(){
        return(
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h2>Routing</h2>
            <Link to = "Home" className="nav-link">Home</Link>
            <Link to = "About"className="nav-link">About</Link>
            <Link to = "Contact" className="nav-link">Contact</Link>

            </nav>
            </>
        )
    }
}
export default Navbar;