import React from 'react';
import "./navbar.css";

export default function Navbar(){
    return(
        <>
            <div className="navbar">
                <div className="container">
                    <div className="logo">BookBuddy</div>
                    <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button></div>
                </div>
            </div>
        </>
    )
}
