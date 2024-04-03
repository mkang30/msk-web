import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import * as constants from '../Constants'
import { PageContent } from '../App';
import Resume from '../resume.pdf';
import "../styles/NavBar.css"


function selectStyles(pc: PageContent){
    const selectedStyle = {backgroundColor: constants.GREY, borderTopLeftRadius: 15, borderTopRightRadius: 15, borderWidth: 0}
    let styles = [{backgroundColor: constants.SKY_BLUE, borderTopLeftRadius: 15, borderTopRightRadius: 0},
                {backgroundColor: constants.BLUE, borderTopLeftRadius: 0, borderTopRightRadius: 0},
                {backgroundColor: constants.LIGHT_PURPLE, borderTopLeftRadius: 0, borderTopRightRadius: 0},
                {backgroundColor: constants.DEEP_PURPLE, borderTopLeftRadius: 0, borderTopRightRadius: 15}]
    switch(pc){
        case PageContent.HOME:
            styles[0] = selectedStyle;
            styles[1].borderTopLeftRadius = 15
            break
        case PageContent.PROJECTS:
            styles[0].borderTopRightRadius = 15
            styles[1] = selectedStyle
            styles[2].borderTopLeftRadius = 15
            break
        case PageContent.COOKIE:
            styles[1].borderTopRightRadius = 15
            styles[2] = selectedStyle
            styles[3].borderTopLeftRadius = 15
            break
        default:
            break
    }
    return  styles
}

export default function NavBar(props: {pageContent: PageContent}){
    const [dimensions, setDimensions] = useState({height: window.innerHeight,width: window.innerWidth})
    useEffect(() => {
        function handleResize() {
          setDimensions({height: window.innerHeight, width: window.innerWidth})
        }
        window.addEventListener('resize', handleResize)
      },[])
    const navigate = useNavigate();
    const styles = selectStyles(props.pageContent)
    function handleClick(path: string) {
        navigate(path);
    }
    function openResume(){
        window.open(Resume);
    }
    return (
        <div className="btn-group" id="nav-box" role="group">
            <button type="button" className="btn btn-primary" style={styles[0]} onClick={()=>handleClick('/')}>{dimensions.width<820 ? (<i className="fa-solid fa-house fa-lg" style={{color: "#f7f7f7"}}></i>):"Home"}</button>
            <button type="button" className="btn btn-primary" style={styles[1]} onClick={()=>handleClick('/projects')}>{dimensions.width<820 ? (<i className="fa-solid fa-code fa-lg" style={{color: "#ffffff;"}}></i>):"Projects"}</button>
            <button type="button" className="btn btn-primary" style={styles[2]} onClick={()=>handleClick('/cookie')}>{dimensions.width<820 ? (<i className="fa-solid fa-cookie fa-lg" style={{color: "#f7f7f7"}}></i>):"Cookie"}</button>
            <button type="button" className="btn btn-primary" style={styles[3]} onClick={()=>openResume()}>{dimensions.width<820 ? (<i className="fa-solid fa-briefcase fa-lg" style={{color: "#f7f7f7"}}></i>):"Resume"}</button>
        </div>
    )
}