import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import '../../App.scss';


export default class Navigation extends React.Component {

    

    render() {
        
        return (
            <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark-blue">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" > <Link className="nav-link link-light" to="/">Home</Link> </li>
                            <li className="nav-item" > <Link className="nav-link link-light" to="/about">About</Link> </li>
                            <li className="nav-item"> <Link className="nav-link link-light" to="/timeline">Timeline</Link> </li>
                            <li className="nav-item"> <Link className="nav-link link-light" to="/skills">Skills</Link> </li>
                            <li className="nav-item"> <Link className="nav-link link-light" to="/projects">Projects</Link> </li>
                            <li className="nav-item"> <Link className="nav-link link-light" to="/contact">Contact</Link> </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}