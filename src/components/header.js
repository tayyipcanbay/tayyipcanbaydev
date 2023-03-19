import React from "react";
import "../styles/header.css"

const Header = () => {
    return (
        <div className="header border">
            <div className="row">
                <div className="col-fluid text-center mx-0">
                    <h1>Tayyip Canbay</h1>
                </div>
                <hr></hr>
                <div className="col-fluid text-center text-muted">
                    <h2>Full Stack Developer</h2>
                </div>                
            </div>
                    
        </div>
    );
};

export default Header;