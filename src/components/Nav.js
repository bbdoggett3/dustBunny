import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/Nav'; 

function Nav() {
    return(
        <div className="nav-container">
            <ul className="nav-list">
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                   <li className="list-item">Home</li>
                </Link>
                <Link style={{ textDecoration: "none", color: "black" }} to="/about">
                   <li className="list-item">About</li>
                </Link>
                <Link style={{ textDecoration: "none", color: "black" }} to="/services">
                   <li className="list-item">Services</li>
                </Link>
                <Link style={{ textDecoration: "none", color: "black" }} to="/booking">
                   <li className="list-item">Booking</li>
                </Link>
                <Link style={{ textDecoration: "none", color: "black" }} to="/signIn">
                   <li className="list-item">Sign In</li>
                </Link>
            </ul>

        </div>
    )
}

export default Nav;