import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = (props) => {
    const [navbarData,setNavbarData] = React.useState(props.navbarData);
    const renderNavbar = (navbarData) => {
        return Object.keys(navbarData).map((key) => {
            return (
                <div className="col">
                    <Link style={{textDecoration:"none"}} to={navbarData[key].link}>{navbarData[key].name}</Link>
                </div>
            );
        });
    };
    return (
        <div className="navbar px-5 border text-center">
           {renderNavbar(navbarData)}
        </div>
    );
};

export default Navbar;