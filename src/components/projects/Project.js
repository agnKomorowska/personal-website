import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; 


function Project(props) {
    return (
        <div className="col-12 col-md-6 col-xl-4">
            <div className="card bg-dark h-100">
                <a href={props.link}><img src={props.src} className="card-img-top" alt={props.alt} /></a>
                <div className="bg-dark p-3">
                    <h5>{props.name}</h5>
                    <div className="card-text text-muted">{props.technologies}</div>
                    <div className=" card-text p-3">{props.description}</div>
                    <p>
                        <a href={props.link} className="link-light pe-3"><FontAwesomeIcon className="pe-2" icon={faGlobe} />Website</a>
                        <a href={props.githubLink} className="link-light"><FontAwesomeIcon className="pe-2" icon={faGithub} />Code</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Project;