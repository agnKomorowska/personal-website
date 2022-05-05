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
                        <Project name="A Simple To Do List" src="../../img/todo.png" alt="To Do List"
                            link="https://agnkomorowska.github.io/portfolio/todolist/todo.html"
                            githubLink="https://github.com/agnKomorowska/portfolio/tree/main/todolist"
                            technologies="HTML, CSS, JavaScript"
                            description="Everybody starts somewhere! 
                            My very first JavaScript project was a simple To Do list. I mostly focused on the functionality, though I tried to achieve basic responsiveness without using any frameworks." />
                        <Project name="Expense Tracker" src="../../img/expensetracker.png" alt="Expense Tracker"
                            link="https://agnkomorowska.github.io/portfolio/expensetracker/expensetracker.html" 
                            githubLink="https://github.com/agnKomorowska/portfolio/tree/main/expensetracker"
                            technologies="HTML, CSS, JavaScript"
                            description="Another project without using any frameworks, again, I focused mostly on JavaScript and the functionalities. These include: adding expenses in different currencies,
                            searching, filtering as well as categorizing expenses and calculating their percentages of all the expenses."/>
                        <div className="d-none d-md-flex d-xl-none col-3"></div>
                        <Project name="IT Festival Website" src="../../img/festival.png" alt="Explorer IT Festival"
                            link="https://agnkomorowska.github.io/portfolio/festival/index.html" 
                            githubLink="https://github.com/agnKomorowska/portfolio/tree/main/festival"
                            technologies="HTML, CSS, Sass, Bootstrap, JavaScript"
                            description="A website of an academic IT festiwal Explorer, using Bootsrap for responsiveness. In this project I focused on making the website informative and easy to navigate.
                            "/>
                    </div>
                </Frame>
            </div>
        );
    }
}