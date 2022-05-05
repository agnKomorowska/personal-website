import React from 'react';
import Background from '../common/Background';
import Frame from '../common/Frame';
import Item  from './Item';

export default class Timeline extends React.Component {
    render() {

        let parasoftResponsibilities = [];
        parasoftResponsibilities.push("Performing various types of manual tests: functonal, exploratory, regression, usability, smoke tests, etc.");
        parasoftResponsibilities.push("Integraton testng with build systems (Maven, Gradle), IDEs and other tools");
        parasoftResponsibilities.push("Integraton testng with a web applicaton (manual and automated REST API");
        parasoftResponsibilities.push("Creatng and maintaining manual test scenarios with detailed use cases");
        parasoftResponsibilities.push("Creatng and maintaining automated tests and scripts(functonal, integraton and UI)");
        parasoftResponsibilities.push("Specifying and refning requirements, defning test scopes");
        parasoftResponsibilities.push("Creatng release test plans and coordinatng testng actvites");
        parasoftResponsibilities.push("Documentng test results and preparing certfcaton reports");
        parasoftResponsibilities.push("Ownership of the defect life cycle (reportng, tracking, verifcaton, etc.)");
        parasoftResponsibilities.push("Collaboratng with developers, testers and management");

        let epamResponsibilities = [];
        epamResponsibilities.push("Performing various types of manual tests: functional, exploratory, usability and regression tests");
        epamResponsibilities.push("Creating and maintaining manual test scenarios, preparing test sets");
        epamResponsibilities.push("Analysis of business and legal requirements");
        epamResponsibilities.push("Working with databases and preparing test data");
        epamResponsibilities.push("Reporting, tracking and verifying defects, documenting test results");
        epamResponsibilities.push("Collaborating with testers, developers, analysts and management");
        epamResponsibilities.push("Collaborating with external contacts: software vendors, integration services etc.");

        let ericpolResponsibilities = [];
        ericpolResponsibilities.push("Manual and automated regression testing");
        ericpolResponsibilities.push("Reporting, tracking and verifying defects, documenting test results");
        ericpolResponsibilities.push("Collaborating with testers, developers and management");

        let gapYearActivities = [];
        gapYearActivities.push("Traveling and volunteering");
        gapYearActivities.push("Learning Front-End Development");

        return (
            <div>
                <Background page="timeline" />
                <Frame title="Timeline">
                    <Item company="Turkey" city="Georgia, United Kingdom" country="Poland" time="Mar 2021 - Apr 2022" title="Gap Year"
                        description=""
                        responsibilities={gapYearActivities}
                        technologies=""
                    />
                    <Item company="Parasoft" city="Kraków" country="Poland" time="May 2018 - Feb 2021" title="Software QA Engineer" 
                        description="Testng of desktop and server testng tools for Java language (statc analysis, unit testng,
                        coverage, reportng, etc.)"
                        responsibilities={parasoftResponsibilities}
                        technologies="Java / JUnit / SOAtest / RCPTT / ECL / Bash / Jenkins / Git / JIRA
                        Xray / Scrum"
                    />
                    <Item company="EPAM Systems" city="Kraków" country="Poland" time="Jan 2017 - Apr 2018" title="Software Test Engineer"
                        description="End-to-end integration testing of desktop and web investment banking applications"
                        responsibilities={epamResponsibilities}
                        technologies="SQL / Bash / JIRA / QC"
                    />
                    <Item company="Ericpol" city="Kraków" country="Poland" time="Apr 2016 - Dec 2016" title="Junior Software Developer"
                        description="Integration testing of RNC (Radio Network Controller) embedded software"
                        responsibilities={ericpolResponsibilities}
                        technologies="C++ / Bash / OSS / Jenkins"
                    />
                    <Item company="Cranfield University" city="Cranfield" country="United Kingdom" time="Oct 2014 – Sep 2015" title="MSc in Computational and Software Techniques in Engineering"
                        description="Specialisation in Digital Signal and Image Processing"
                        responsibilities=""
                        technologies=""
                    />
                    <Item company="AGH University of Science and Technology" city="Kraków" country="Poland" time="Mar 2014 – Sep 2015" title="MSc in Acoustic Engineering"
                        description="Specialisation in Sound Engineering in Media and Culture"
                        responsibilities=""
                        technologies=""
                    />
                </Frame>
            </div>
        );
    }
}