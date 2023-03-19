import React from "react";

const HomepageSection = (props) => {
    const [sectionData,setSectionData] = React.useState(props.sectionData);
    console.log(sectionData);
    return(
        <div className="row pt-5 px-3">
            <div className="col-fluid section">
                <h1>{sectionData.title}</h1>
                <hr></hr>
                <p>
                    {sectionData.description}
                </p>
            </div>
        </div>
    );
};

export default HomepageSection;