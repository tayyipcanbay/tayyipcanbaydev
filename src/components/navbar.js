import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = (props) => {
    return (
        <div className="navbar px-5 border text-center">
           <div className="col">
                <Link style={{textDecoration:"none"}} to="/">Home</Link>
            </div>
        </div>
    );
};

export default Navbar;