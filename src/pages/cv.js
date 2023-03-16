import React from "react";
import "../styles/cv/cv.css"


const Cv = () => {
    return (
        <div className="cv">
            <div className="cv-header">
                <div className="cv-photo">
                    <img src="https://placehold.it/200x200" alt="John Doe" />
                </div>
                <div className="cv-basic-info">
                    <div className="cv-name">
                        <h1>John Doe</h1>
                    </div>
                    <hr></hr>
                    <div className="cv-title">
                        <h2>Software Developer</h2>
                    </div>
                </div>
            </div>
             {/* ---------------İLETİŞİM ----------------- */}
             <div className="cv-contact">
                    <div className="cv-contact-info">
                        <div className="cv-contact-info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <p>Częstochowa, Poland</p>
                        </div>
                        <div className="cv-contact-info-item">
                            <i className="fas fa-phone"></i>
                            <p>+48 123 456 789</p>
                        </div>
                        <div className="cv-contact-info-item">
                            <i className="fas fa-envelope"></i>
                            <p>
                                <a href="mailto:
                                mrsecmac@gmail.com">
                                    mrsecmac@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    )
    };

export default Cv;