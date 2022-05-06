import React from 'react';
import Background from '../common/Background';
import Frame from '../common/Frame';
import '../common/BackgroundColor.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faC, faV } from '@fortawesome/free-solid-svg-icons'; 



export default class About extends React.Component {
    render() {
        return (
            <div>
                <Background page="about" />
                <Frame title="About">
                    <div className="card bg-dark-blue p-4 text-start">
                        <div>
                            <img src="../../img/avatar.png" className="float-start my-pic pe-4 pb-1" alt="..."></img>
                            <p className="pb-2">
                                Hi there! My name is Agnieszka Komorowska and I used to work in IT as a software tester. 
                                I ended up in this field because I'm curious about how things work and I have an innate 
                                talent for breaking things. At the moment, I'm trying to transition from testing to front-end development. 
                            </p> 
                            <p>
                                Why, you ask?
                            </p>
                            <p>
                                I spent 5 years in Quality Assurance. I started out by testing apps manually, overtime I
                                did more and more of test automation. I liked it but I couldn't really see the effects of my work. 
                                I'm a visual person and coding tests was simply not rewarding. 
                            </p>
                            <p>
                                I decided to try to learn front-end technologies. Everyday I'm learning more about HTML, CSS, 
                                JavaScript. Currently, I'm trying to learn React. I'm doing it all by myself, using different 
                                resources available on the Internet. For me, the best way to learn is to work on actual projects,
                                encountering problems and trying to solve them. 
                            </p>
                            <div className="float-right pe-4" >
                                <p>
                                    I made this website to present my current skills and some examples of my code. I hope it will help me land
                                    my first job as a front-end developer. Fingers crossed!
                                </p>
                                <h4 className="text-end">
                                    <Link to="./Komorowska_Agnieszka_CV.pdf" target="_blank" download className="link-light pe-3"><FontAwesomeIcon icon={faC} /><FontAwesomeIcon icon={faV} /></Link>
                                    <a href="https://github.com/agnKomorowska" className="link-light pe-3"><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="https://www.linkedin.com/in/agnieszka-komorowska-628411b3/" className="link-light"><FontAwesomeIcon icon={faLinkedin} /></a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </Frame>
            </div>
        );
    }
}