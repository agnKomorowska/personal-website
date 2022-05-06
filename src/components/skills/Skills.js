import React from 'react';
import Background from '../common/Background';
import Frame from '../common/Frame';
import Skill from './Skill';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3, faSass, faBootstrap, faReact, faJava, faGitSquare, faJenkins, faAtlassian } from '@fortawesome/free-brands-svg-icons';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'; 
import { ReactComponent as IconMaven } from './icons/apachemaven-svgrepo-com.svg';
import { ReactComponent as IconGradle } from './icons/gradle-svgrepo-com.svg';
import { ReactComponent as IconJunit } from './icons/junit5-svgrepo-com.svg';


export default class Skills extends React.Component {
    
    
    
    render() {

        let frontEndSkills = [];
        frontEndSkills.push({
            icon: <FontAwesomeIcon icon={faJs} />,
            name:"JavaScript"});
        frontEndSkills.push({
            icon: <FontAwesomeIcon icon={faHtml5} />,
            name: "HTML"
        });
        frontEndSkills.push({
            icon: <FontAwesomeIcon icon={faCss3} />,
            name: "CSS"
        });
        frontEndSkills.push({
            icon: <FontAwesomeIcon icon={faSass} />,
            name: "Sass"
        });
        frontEndSkills.push({
            icon: <FontAwesomeIcon icon={faBootstrap} />,
            name: "Bootstrap"
        });
        frontEndSkills.push({
            icon: <FontAwesomeIcon icon={faReact} />,
            name: "React"
        });

        let backEndSkills = [];
        backEndSkills.push({
            icon: <FontAwesomeIcon icon={faJava} />,
            name: "Java"
        });
        backEndSkills.push({
            icon: <IconMaven fill="#d3d3d3" stroke="#212529"/>,
            name: "Maven"
        });
        backEndSkills.push({
            icon: <IconGradle fill="#d3d3d3" stroke="#212529" />, 
            name: "Gradle"
        });
        backEndSkills.push({
            icon: <IconJunit fill="#d3d3d3" stroke="#212529" />, 
            name: "JUnit"
        });
        backEndSkills.push({
            icon: <FontAwesomeIcon icon={faScrewdriverWrench} />, 
            name: "Rest Assured"
        });
        backEndSkills.push({
            icon: <FontAwesomeIcon icon={faScrewdriverWrench} />,
            name: "SOAtest"
        });
        backEndSkills.push({
            icon: <FontAwesomeIcon icon={faScrewdriverWrench} />,
            name: "SQL"
        });

        let otherSkills = [];
        otherSkills.push({
            icon: <FontAwesomeIcon icon={faGitSquare} />,
            name: "Git"
        });
        otherSkills.push({
            icon: <FontAwesomeIcon icon={faJenkins} />,
            name: "Jenkins"
        });
        otherSkills.push({
            icon: <FontAwesomeIcon icon={faScrewdriverWrench} />,
            name: "Bash"
        });
        otherSkills.push({
            icon: <FontAwesomeIcon icon={faAtlassian} />,
            name: "JIRA Xray"
        });

        return (
            <div>
                <Background page="skills" />
                <Frame title="Skills">
                    <div className="row g-5">
                        <Skill title="Front-End Development" skills={frontEndSkills}
                        description="Tools and technologies I'm currently trying to learn by taking different courses, watching tutorials and working on my own projects. "/>
                        <Skill title="Back-End Testing and Integration" skills={backEndSkills} 
                        description="Tools I used for test automation when working as a QA Engineer. Mostly used to test Java plugins and REST APIs."/>
                        <div className="d-none d-md-flex d-xl-none col-3"></div>
                        <Skill title="Version control, CI/CD and Project Management" skills={otherSkills} 
                            description="Tools I used to run scripts on different environments and manage tasks." />
                    </div>
                </Frame>
            </div>
        );
    }
}