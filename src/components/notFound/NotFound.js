import React from 'react';
import './../../App.css';
import Background from '../common/Background';
import { Link } from 'react-router-dom'

export default class NotFound extends React.Component {
    render() {
        return (
            <div>
                <Background page="notfound" />
                <div className="welcome d-flex justify-content-center">
                    <div className="container align-self-center">
                        <h1 className="text-light p-2">Oops, 404!</h1>
                        <h4 className="text-light p-2">Page not found.</h4>
                    </div>
                </div>
            </div>
        );
    }
}
