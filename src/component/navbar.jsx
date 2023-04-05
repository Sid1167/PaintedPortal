import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const Navbar = () =>{
    return(
    <div>
        {/* <nav class="navbar sticky-top bg-light"> */}
        <div className="links"></div>
        <nav  className="navigator" >
        <h2 className="logo"><Link to="/">Logo</Link></h2>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/login">Login</Link>
                <Link to="/cart"> 
                    <ShoppingCart size={20} />
                </Link>
        </nav>
        {/* </nav> */}
    </div>
    )
};