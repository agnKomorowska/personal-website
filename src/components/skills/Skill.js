import React from "react";

function Skill(props) {
    
    let skills;
    let listItems;
    if (props.skills) {
        skills = props.skills;
        listItems = skills.map(skill => (
            <div className="text-center " style={{ display: "inline-block", width: "70px"}}>
                <h3 className="text-center align-self-center">{skill.icon}</h3>
                <p className="text-center align-self-center"> {skill.name}</p>
            </div>
            
        ));
    };

    return (
        
        <div className="col-12 col-md-6 col-xl-4">
            <div className="card bg-dark h-100">
                <div className="bg-dark p-3">
                    <h5>{props.title}</h5>
                    <p>{props.description}</p>
                    <div className="card-text p-2 text-centers">                        
                        {listItems}
                    </div>
                </div>
            </div>
        </div>
        
        
    );
}

export default Skill;