import React from "react";

const HomepageLeft = (props) => {
    const [First, setFirst] = React.useState(props.leftData["First"]);
    const [Second, setSecond] = React.useState(props.leftData["Second"]);
    const [Socials, setSocials] = React.useState(Second.Socials);
    const renderSocials = (socials) => {
        return Object.keys(socials).map((key) => {
            return (
                <div className="col">
                    <a href={Socials[key].link} target="_blank" rel="noreferrer">
                        <i className={Socials[key].icon}></i>
                    </a>
                </div>
                );
            }
        )
    };
    return(
        <div className="col-md-4 left">
            <div className="row">
                <div className="col-fluid text-center">
                    <img className="img-fluid img-pp p-2" src={First.photo} alt="Tayyip Canbay" />
                </div>
                <div className="col-fluid">
                    <h1 className="text-center">{First.name}</h1>
                    <hr></hr>
                    <h3 className="text-muted text-center">{First.title}</h3>
                </div>
                <div className="col-fluid socials">
                    <div className="row text-center">
                       {renderSocials(Socials)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomepageLeft;