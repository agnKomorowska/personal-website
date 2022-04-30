import React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#">Navbar</a>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item"> <Link className="nav-link" to="/">Home</Link> </li>
                        <li class="nav-item"> <Link className="nav-link" to="/">Home</Link> </li>
                        <li class="nav-item"> <Link className="nav-link" to="/about">About</Link> </li>
                        <li class="nav-item"> <Link className="nav-link" to="/timeline">Timeline</Link> </li>
                        <li class="nav-item"> <Link className="nav-link" to="/skills">Skills</Link> </li>
                        <li class="nav-item"> <Link className="nav-link" to="/projects">Projects</Link> </li>
                        <li class="nav-item"> <Link className="nav-link" to="/contact">Contact</Link> </li>
                        <li class="nav-item"> <Link className="nav-link" to="/articles">Articles</Link> </li>
                        <li class="nav-item"> <Link className="nav-link" to="/alwwid">Bad Link</Link> </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}