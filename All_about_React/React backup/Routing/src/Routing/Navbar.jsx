import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="Home" className="nav-link">Home</Link>
                <Link to="About" className="nav-link">About</Link>
                <Link to="contact" className="nav-link">Contact</Link>
            </nav>
            
        </div>
    )
}
