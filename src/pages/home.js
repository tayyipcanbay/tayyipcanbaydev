import React from "react";
import "../styles/home.css";
import HomepageLeft from "../components/homepageLeft";


const Home = (props) => {
    return (
        <div className="home row px-0 mx-0">
           <HomepageLeft  leftData={props.homepageData["Left"]}/>
            <div className="col-md-8 right">
                <div className="row pt-5 px-3">
                    <div className="col-fluid about-me">
                        <h1>About Me</h1>
                        <hr></hr>
                        <p>
                            I am a Full Stack Developer with a background in Computer Science. I have a passion for learning new technologies and solving problems. I am currently working on my portfolio and learning new technologies. I am looking for a job as a Full Stack Developer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;