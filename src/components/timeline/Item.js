import React from 'react';
import '../../App.scss';

function Item(props) {

    //let todos = this.props.todos.map((todo) => { return <h1>{todo.title}</h1> })

    let responsibilities;
    let listItems;
    if (props.responsibilities) {
        responsibilities = props.responsibilities;
        listItems = responsibilities.map(responsibility => (
            <li>{responsibility}</li>
        ));
    };

    let sTechnologies;
    if(props.technologies) {
        sTechnologies = "Technologies and Tools: ";
    }
    let sDescription;
    if (props.description) {
        sDescription = props.description;
    }

    return (
        
        <div className="card bg-dark-blue p-3 pb-0 mb-5">
            <div className="row">
                <div className="col-12 col-md-3 text-center">
                    <p>{props.time}</p>
                </div>
                <div className="col-12 col-md-9 text-start">
                    <h5 className="text-center text-md-start">{props.title}</h5>
                    <p className="text-center text-md-start text-muted">{props.company}, {props.city}, {props.country}</p>
                    <p>{sDescription}</p>
                    <ul>
                        {listItems}
                    </ul>
                    <p className="">{sTechnologies} {props.technologies}</p>

                </div>
            </div>
        </div>
    );
}

export default Item;