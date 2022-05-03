import React from 'react';

function Background(props) {
    return (
        <div>
            <div className={`bg bg-${props.page}`}></div>
            <div className={`bg bg-2 bg-${props.page}`}></div>
            <div className={`bg bg-3 bg-${props.page}`}></div>
        </div>  
    );
}
export default Background;