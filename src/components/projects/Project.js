import React from "react";

function Project(props) {
    return (
        <div className="col-12 col-md-6 col-xl-4">
            <div className="card bg-dark h-100">
                <a href={props.link}><img src={props.src} className="card-img-top" alt={props.alt} /></a>
                <div className="bg-dark p-3">
                    <a href={props.link} className="link-light"><h5>{props.name}</h5></a>
                    <div className="card-text text-muted">{props.technologies}</div>
                     
                    <div className=" card-text p-3">{props.description}</div>
                </div>
            </div>
        </div>
    );
}

export default Project;