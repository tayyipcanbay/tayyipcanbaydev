import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () => {
    return (
        <div className="navbar px-5 border text-center">
            <div className="col">
            <Link style={{textDecoration:"none"}} to="/">Home</Link>
            </div>
            <div className="col">
            <Link style={{textDecoration:"none"}} to="/skills">Skills</Link>
            </div>
            <div className="col">
            <Link style={{textDecoration:"none"}} to="/projects">Projects</Link>
            </div>
            <div className="col">
            <Link style={{textDecoration:"none"}} to="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default Navbar;