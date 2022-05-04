import React from "react";
import Header from "./Header";

function Frame(props) {
    return (
        <div className="d-flex justify-content-center text-center mb-4">
            <div className="container align-self-center">
                <div className="container-fluid">
                    <Header title={props.title} />
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Frame;