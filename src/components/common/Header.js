import React from "react";

function Header(props) {
    return (
        <div className="row mb-5 mt-5 text-light">
            <h3 className="mt-5">{ props.title }</h3>
        </div>
    );
}

export default Header;