import React from "react";

function Project(props) {
    return (
        <div className="col-12 col-md-6 col-xl-4">
            <div className="card bg-dark">
                <a href={props.link}><img src={props.src} className="card-img-top" alt={props.alt} /></a>
                <div className="card-header p-3">
                    <h5>{props.name}</h5>
                    <div className="card-text text-muted">{props.technologies}</div>
                </div>          
                <div className="bg-dark card-text p-3">{props.description}</div>
            </div>
        </div>
    );
}

export default Project;