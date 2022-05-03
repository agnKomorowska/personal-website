import React from 'react';
import Background from '../common/Background';
import Frame from '../common/Frame';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <Background page="about" />
                <Frame title="About">
                    <div className="card bg-dark p-3 text-start">
                        <div>
                            <img src="../../img/avatar.png" className="float-start my-pic pe-3 pb-1" alt="..."></img>
                            <p className="pb-2">
                                Hi there! My name is Agnieszka Komorowska and I used to work in IT as a software tester. 
                                I ended up in this field because I'm curious about how things work, I always try to understand 
                                the end users' perspective and I have an innate talent for breaking things. At the moment, 
                                I'm trying to transition from testing to front-end development. 
                            </p> 
                            <p>
                                Why, you ask?
                            </p>
                            <p>
                                I spent 5 years in Quality Assurance. I started out by testing apps manually, 
                                later down the line I was maintaining existing automated tests and at some point I started 
                                writing my own tests. I really liked the creative aspect of writing tests! I guess my problem was 
                                that I couldn't see the effects of my work. I'm a visual person and coding tests was 
                                simply not rewarding. 
                            </p>
                            <p>
                                I decided to try to learn front-end technologies. Everyday I'm learning more about HTML, CSS, 
                                JavaScript. Currently, I'm trying to learn React. I'm doing it all by myself, using different 
                                resources available on the Internet. The best way to learn for me is to work on actual projects,
                                encountering problems and trying to solve them. 
                            </p>
                            <p>
                                I made this website to present my current skills and some examples of my code.  Hopefully, this website will help me land 
                                my first job as a front-end developer. Fingers crossed!
                            </p>
                        </div>
                        
                    </div>
                </Frame>
            </div>
        );
    }
}