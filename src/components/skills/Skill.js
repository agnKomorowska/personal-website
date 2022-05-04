import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Skill(props) {
    
    let skills;
    let listItems;
    if (props.skills) {
        skills = props.skills;
        listItems = skills.map(skill => (
            <div className="text-center " style={{ display: "inline-block", width: "90px"}}>
                <h3 className="text-center align-self-center">{skill.icon}</h3>
                <p className="text-center align-self-center"> {skill.name}</p>
            </div>
            
        ));
    };

    return (
        
        <div className="col-12 col-sm-6 col-xl-4">
            <div className="card bg-dark h-100">
                <div className="bg-dark p-3">
                    <h5>{props.title}</h5>
                    <div className="card-text p-3 text-centers">
                        
                            {listItems}
                           
                    </div>
                </div>
            </div>
        </div>
        
        
    );
}

export default Skill;