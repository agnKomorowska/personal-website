import React from 'react';
import Background from '../common/Background';
import Frame from '../common/Frame';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <Background page="about" />
                <Frame title="About">
                    <div className="card bg-dark p-3">
                        <div>
                            <img src="../../img/avatar.png" className="float-start my-pic pe-3 pb-1" alt="..."></img>
                            <p className="pb-2">
                                Hi there! My name is Agnieszka Komorowska and I used to work in IT as a software tester. I ended up in this field because I'm curious about how things work, I try to understand the end users' perspective and I have an innate talent for breaking things. At the moment, I'm trying to transition testing to software development. 
                            </p> 
                            

                            <p>I made this website to present my current skills and examples of my code. Hopefully, it will help me land my first job as a front-end developer. </p>
                        </div>
                        
                    </div>
                </Frame>
            </div>
        );
    }
}