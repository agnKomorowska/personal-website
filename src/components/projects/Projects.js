import React from 'react';
import Frame from '../common/Frame';
import Project from './Project';
import Background from '../common/Background';

export default class Projects extends React.Component {
    render() {
        return (
            <div>
                <Background page="projects" />
                <Frame title="Projects">
                    <div className="row g-5 mb-3 ">
                        <Project name="A SIMPLE TO DO LIST" src="../../img/todo.png" alt="To Do List"
                            link="https://agnkomorowska.github.io/portfolio/todolist/todo.html"
                            technologies="HTML, CSS, JavaScript"
                            description="Everybody starts somewhere. 
                            My very first JavaScript project. " />
                        <Project name="EXPENSE TRACKER" src="../../img/expensetracker.png" alt="Expense Tracker"
                            link="https://agnkomorowska.github.io/portfolio/expensetracker/expensetracker.html"
                            technologies="HTML, CSS, JavaScript"
                            description="One of my very first projects, basic JavaScript"/>
                        <div className="d-none d-md-flex d-xl-none col-3"></div>
                        <Project name="IT FESTIVAL WEBSITE" src="../../img/festival.png" alt="Explorer IT Festival"
                            link="https://agnkomorowska.github.io/portfolio/festival/index.html"
                            technologies="HTML, CSS, Sass, Bootstrap, JavaScript"
                            description="One of my very first projects, basic JavaScript"/>
                    </div>
                </Frame>
            </div>
        );
    }
}