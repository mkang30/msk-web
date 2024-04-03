import React from "react"
import "../styles/ProjectPopup.css"
import Carousel from 'react-bootstrap/Carousel';
import KeyBubble from "./KeyBubble";
import { PopupContent, ProjectPop } from "../Constants";

type PopMutator = (a: ProjectPop) => void
 
export default function ProjectPopup(props: {project: ProjectPop, setPop: PopMutator, content: PopupContent}){
    function closePopup(){
        props.setPop(ProjectPop.NO)
        document.getElementById("nav-box")?.classList.remove("blur")
        document.getElementById("projects-box")?.classList.remove("blur")
    }
    return(
        <div className="popupbg">
            <div className="popupcard">
                <div className="closebox" data-bs-theme="dark">
                    <button type="button" className="btn-close" onClick={closePopup}></button>
                    <div className="left"></div>
                    {props.content.github === "" ? null : (
                        <a className="gitlink" href = {props.content.github} target="_blank">
                            <i className="fab fa-github fa-xl" aria-hidden="true"></i>
                        </a>
                    )}
                    
                </div>
                <Carousel interval={null}>

                    {props.content.pages.map( item=>{
                        return (
                            <Carousel.Item>
                                {item.pageType === "title" ? (
                                    <div className="project-content-box">
                                        <img src={item.logo} width="125px"></img>
                                        <div className="pcb-title">
                                            <h3>{item.title}</h3>
                                            <div className="keywords">
                                                {item.tags.map( (tag: string) => {
                                                    return (
                                                        <KeyBubble text={tag}></KeyBubble>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        {item.description}
                                    </div>
                                ):(
                                    <div className="project-demo-box">
                                        {item.element}
                                    </div>
                                )}
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}