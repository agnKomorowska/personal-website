import React from 'react';
import Background from '../common/Background';
import Frame from '../common/Frame';
import Skill from './Skill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3, faSass, faBootstrap, faReact, faJava, faGit, faJenkins, faJira, faAtlassian } from '@fortawesome/free-brands-svg-icons';


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
            icon: "",
            name: "Maven"
        });
        backEndSkills.push({
            icon: "",
            name: "Gradle"
        });
        backEndSkills.push({
            icon: "",
            name: "JUnit"
        });
        backEndSkills.push({
            icon: "",
            name: "RestAssured"
        });
        backEndSkills.push({
            icon: "",
            name: "SOAtest"
        });
        backEndSkills.push({
            icon: "",
            name: "MySQL"
        });
        backEndSkills.push({
            icon: "",
            name: "Bash"
        });

        let otherSkills = [];
        otherSkills.push({
            icon: <FontAwesomeIcon icon={faGit} />,
            name: "Git"
        });
        otherSkills.push({
            icon: <FontAwesomeIcon icon={faJenkins} />,
            name: "Jenkins"
        });
        otherSkills.push({
            icon: <FontAwesomeIcon icon={faAtlassian} />,
            name: "JIRA Xray"
        });

        return (
            <div>
                <Background page="skills" />
                <Frame title="Skills">
                    <div className="row g-5 mb-3">
                        <Skill title="Front-End Development" skills={frontEndSkills}/>
                        <Skill title="Back-End, Integration and Testing" skills={backEndSkills} />
                        <div className="d-none d-sm-flex d-xl-none col-3"></div>
                        <Skill title="Version control, CI/CD and Project Management Tools" skills={otherSkills} />                        
                    </div>
                </Frame>
            </div>
        );
    }
}