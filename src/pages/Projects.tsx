import React, { useState, useEffect, useRef } from 'react';
import ProjectCard from "../components/ProjectCard"
import ProjectPopup from "../components/ProjectPopup"
import "../styles/Projects.css"
import { GB_CONTENT, NO_CONTENT, PopupContent, ProjectPop, popupContents } from '../Constants';

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
                        <div className="col-lg-4 col-md-6 col-sm-12" onClick={()=>{displayPopup(ProjectPop.GB)}}>
                            <ProjectCard name="Gravity Balling" img="/images/gb_play.jpg"  tags={["swift","ios"]} ghLink="https://github.com/mkang30/GravityBalling"/>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" onClick={()=>{displayPopup(ProjectPop.BV)}}>
                            <ProjectCard name="Bird View" img="/images/bv_main.jpg" tags={["swift","ios"]} ghLink="https://github.com/mkang30/GravityBalling"/>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" onClick={()=>{displayPopup(ProjectPop.WP)}}>
                            <ProjectCard name="Gravity Balling" img="/images/wp_main.jpg" tags={["swift","ios"]} ghLink="https://github.com/mkang30/GravityBalling"/>
                        </div>
                        <div className=" col-lg-4 col-md-6 col-sm-12" onClick={()=>{displayPopup(ProjectPop.ES)}}>
                            <ProjectCard name="Gravity Balling" img="/images/es_main.jpg" tags={["swift","ios"]} ghLink="https://github.com/mkang30/GravityBalling"/>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" onClick={()=>{displayPopup(ProjectPop.DE)}}>
                            <ProjectCard name="Gravity Balling" img="/images/id_main.jpg" tags={["swift","ios"]} ghLink="https://github.com/mkang30/GravityBalling"/>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" onClick={()=>{displayPopup(ProjectPop.RV)}}>
                            <ProjectCard name="Gravity Balling" img="/images/rearview.png" tags={["swift","ios"]} ghLink="https://github.com/mkang30/GravityBalling"/>
                        </div>
                    </div>
                </div>
                
            </div>
            {currentPop != ProjectPop.NO ? 
                (<ProjectPopup project={currentPop} setPop={setPop} content={popupContents[currentPop]}></ProjectPopup>) : null}

        </div>
    )
}

export default Projects 