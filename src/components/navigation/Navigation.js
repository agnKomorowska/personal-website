import React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {

    render() {
        return (
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li> <Link to="/timeline">Timeline</Link></li>
                    <li> <Link to="/skills">Skills</Link></li>
                    <li> <Link to="/projects">Projects</Link></li>
                    <li> <Link to="/contact">Contact</Link></li>

                    <li> <Link to="/articles">Articles</Link></li>
                    <li> <Link to="/alwwid">Bad Link</Link></li>
                </ul>
            </nav>
        );
    }
}