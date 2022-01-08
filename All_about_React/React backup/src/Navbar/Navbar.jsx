import React from "react";
import {Link} from "react-router-dom";
class Navbar extends React.Component{
    render(){
        return(
            <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>Task</h1>
            <Link to="Task" className="nav-link"> Task</Link>
            
            </nav>
            </div>
            </>
        )
    }
}
export default Navbar;
