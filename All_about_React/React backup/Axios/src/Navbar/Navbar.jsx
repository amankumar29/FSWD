import React from "react";
import { Link } from "react-router-dom";
export const Navbar =() => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h2> Hello..! </h2>
            <Link to = "Home" className="nav-link"> Home </Link>
            <Link to = "About" className="nav-link"> About </Link>
            <Link to = "Services" className="nav-link"> Services </Link>
            <Link to = "Contact" className="nav-link"> Contact </Link>
        </nav>

        </>
    )
}