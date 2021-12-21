import React from "react";
import {Link} from "react-router-dom";
class Navbar extends React.Component{
    render(){
        return(
            <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h3>React Routing</h3>
            <Link to="Home" className="nav-link"> Home</Link>
            <Link to="Axios" className="nav-link"> Axios</Link>
            <Link to="FormHandling" className="nav-link"> Form Handling </Link>
            </nav>
            </div>
            </>
        )
    }
}
export default Navbar;
