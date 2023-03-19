import React from "react";
import "../styles/contact.css";

const Contact = () => {
    return (
        <div className="contact row">
            <div className="col-fluid socials">
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-8 contact-card">
                        <a href="
                        https://tr.linkedin.com/in/tayyip-canbay-067047227?trk=public_profile_browsemap" target="_blank" rel="noreferrer"> 
                        <i className="fab fa-linkedin mx-2"></i>LinkedIn
                        </a>
                    </div>
                    <div className="col-8 contact-card">
                        <a href="
                        https://instagram.com/tayyipcanbay" target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram mx-2"></i>Instagram
                        </a>
                    </div>
                    <div className="col-8 contact-card">
                        <a href="
                        https://twitter.com/tayyip_canbay" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter mx-2"></i>Twitter
                        </a>
                    </div>
                    <div className="col-8 contact-card">
                        <a href="
                        https://github.com/tayyipcanbay" target="_blank" rel="noreferrer">
                        <i className="fab fa-github mx-2"></i>Github
                        </a>
                    </div>
                    <div className="col-8 contact-card">
                        <a href="mailto:mrsecmac@gmail.com" target="_blank" rel="noreferrer">
                        <i className="fas fa-envelope mx-2"></i>Mail
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;