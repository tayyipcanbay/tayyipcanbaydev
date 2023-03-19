import React from "react";
import "../styles/home.css";
import HomepageLeft from "../components/homepageLeft";
import HomepageSection from "../components/homepageSection";


const Home = (props) => {
    const [homepageData,setHomepageData] = React.useState(props.homepageData);
    const [sectionsData,setSectionsData] = React.useState(homepageData["Right"]);
    console.log(sectionsData);
    const renderSections = (sectionsData) => {
        return Object.keys(sectionsData).map((key) => {
            {console.log(sectionsData[key])}
            <HomepageSection sectionData={sectionsData[key]}/>
        });
    };
    return (
        <div className="home row px-0 mx-0">
           <HomepageLeft  leftData={homepageData["Left"]}/>
            <div className="col-md-8 right">
                {renderSections(sectionsData)}
            </div>
        </div>
    );
};

export default Home;