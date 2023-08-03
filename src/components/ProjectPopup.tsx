import React from "react"
import { ProjectPop } from "../pages/Projects"
import "../styles/ProjectPopup.css"


type PopMutator = (a: ProjectPop) => void
 
export default function ProjectPopup(props: {project: ProjectPop, setPop: PopMutator}){
    function closePopup(){
        props.setPop(ProjectPop.NO)
        document.getElementById("nav-box")?.classList.remove("blur")
        document.getElementById("projects-box")?.classList.remove("blur")
    }
    return(
        <div className="popupbg">
            <div className="carousel slide popupcard">
                <div className="closebox" data-bs-theme="dark">
                    <button type="button" className="btn-close" onClick={closePopup}></button>
                </div>
                <div className="project-content-box">
                    <img src="/images/projects/gb_logo.jpg" width="150px"></img>
                </div>
            </div>
        </div>
    )
}