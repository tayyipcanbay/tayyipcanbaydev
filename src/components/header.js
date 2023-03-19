import React, { useEffect } from "react";
import "../styles/header.css"

const Header = (props) => {
    const [name,setName] = React.useState(props.headerData.name);
    const [description,setDescription] = React.useState(props.headerData.description);
    return (
        <div className="header border">
            <div className="row">
                <div className="col-fluid text-center mx-0">
                    <h1>{name}</h1>
                </div>
                <hr></hr>
                <div className="col-fluid text-center text-muted">
                    <h2>{description}</h2>
                </div>                
            </div>
                    
        </div>
    );
};

export default Header;