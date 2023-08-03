import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from "../components/ProjectCard"
import ProjectPopup from "../components/ProjectPopup"
import "../styles/Projects.css"

export enum ProjectPop{
    GB, BV, WP, ES, DE, RV, NO
}

function Projects() {
    const [currentPop, setPop] = useState(ProjectPop.NO)
    useEffect(() => {
        setPop(ProjectPop.NO)
    }, []);

    function displayPopup(project: ProjectPop){
        setPop(project)
        document.getElementById("nav-box")?.classList.add("blur")
        document.getElementById("projects-box")?.classList.add("blur")
    }
    

    return (
        <div className="main-box">
            <div id="projects-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4" onClick={()=>{displayPopup(ProjectPop.GB)}}>
                            <ProjectCard name="Gravity Balling" img="/images/projects/gb_play.jpg"  tags={["swift","ios"]} ghLink="https://github.com/mkang30/GravityBalling"/>
                        </div>
                        <div className="col-md-4">
                            <ProjectCard name="Bird View" img="/images/projects/terrain.png" tags={["swift","ios"]} ghLink="https://github.com/mkang30/GravityBalling"/>
                        </div>
                        <div className="col-md-4">
                            <ProjectCard name="Gravity Balling" img="/images/projects/wikipedle.png" tags={["swift","ios"]} ghLink="https://github.com/mkang30/GravityBalling"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <ProjectCard name="Gravity Balling" img="/images/projects/eyespy.png" tags={["swift","ios"]} ghLink="https://github.com/mkang30/GravityBalling"/>
                        </div>
                        <div className="col-md-4">
                            <ProjectCard name="Gravity Balling" img="/images/projects/decomposer.png" tags={["swift","ios"]} ghLink="https://github.com/mkang30/GravityBalling"/>
                        </div>
                        <div className="col-md-4">
                            <ProjectCard name="Gravity Balling" img="/images/projects/rearview.png" tags={["swift","ios"]} ghLink="https://github.com/mkang30/GravityBalling"/>
                        </div>
                    </div>
                </div>
                
            </div>
            {currentPop != ProjectPop.NO ? 
                (<ProjectPopup project={currentPop} setPop={setPop}></ProjectPopup>) : null}

        </div>
    )
}

export default Projects 