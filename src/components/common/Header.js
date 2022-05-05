import React from "react";

function Header(props) {
    return (
        <div className="row mb-5 mt-5">
            <div className="mt-5 mb-5">
                <h3 className="mt-5">{ props.title }</h3>
            </div>
        </div>
    );
}

export default Header;