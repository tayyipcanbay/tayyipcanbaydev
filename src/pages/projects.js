import React from "react";
import "../styles/projects.css"

const Projects = () => {
    return (
        <div className="projects row">
            <div className="col-md-6 col-sm-12 mt-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">I-Han E-Stan Blue Malware</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go to Repository</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-sm-12 mt-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">TTen</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go to Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Projects;