import React from 'react';
import './../../App.css';
import Background from '../common/Background';

export default class Home extends React.Component {
    render() {
        return (
                <div>
                    <Background page="home" />
                    <div className="welcome d-flex justify-content-center">
                        <div className="container align-self-center">
                            <h1 className="p-2">Hi, my name's Agnieszka.</h1>
                            <h4 className="p-2">Let's build something cool together.</h4>
                        </div>
                    </div>
                </div>
        );
    }
}
