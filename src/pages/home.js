import React from "react";
import "../styles/home.css";

const imgPath= "https://avatars.githubusercontent.com/u/73071862?s=400&u=b5db5ef8baa3c35b2efc509a4d857d9c388e4131&v=4"

const Home = () => {
    return (
        
        <div className="home row px-0 mx-0">
            <div className="col-md-4 left">
                <div className="row">
                    <div className="col-fluid text-center">
                        <img className="img-fluid img-pp p-2" src={imgPath} alt="Tayyip Canbay" />
                    </div>
                    <div className="col-fluid">
                        <h1 className="text-center">Tayyip Canbay</h1>
                        <hr></hr>
                        <h3 className="text-muted text-center">Full Stack Developer</h3>
                    </div>
                    <div className="col-fluid socials">
                        <div className="row text-center">
                            <div className="col">
                                <a href="
                                https://www.linkedin.com/in/tayyip-canbay-5b1b1b1b3/" target="_blank" rel="noreferrer"> 
                                <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                            <div className="col">
                                <a href="
                                https://instagram.com/tayyipcanbay" target="_blank" rel="noreferrer">
                                <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                            <div className="col">
                                <a href="
                                https://twitter.com/tayyip_canbay" target="_blank" rel="noreferrer">
                                <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                            <div className="col">
                                <a href="
                                https://github.com/tayyipcanbay" target="_blank" rel="noreferrer">
                                <i className="fab fa-github"></i>
                                </a>
                            </div>
                            <div className="col">
                                <a href="mailto:mrsecmac@gmail.com" target="_blank" rel="noreferrer">
                                <i className="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
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