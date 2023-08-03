import React from 'react'
import { useNavigate } from "react-router-dom";
import "../styles/index.css"
import * as constants from '../Constants'
import { PageContent } from '../App';
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
        case PageContent.EXPERIENCE:
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
    const navigate = useNavigate();
    const styles = selectStyles(props.pageContent)
    function handleClick(path: string) {
        navigate(path);
      }
    return (
        <div className="btn-group" id="nav-box" role="group">
            <button type="button" className="btn btn-primary" style={styles[0]} onClick={()=>handleClick('/')}>Home</button>
            <button type="button" className="btn btn-primary" style={styles[1]} onClick={()=>handleClick('/projects')}>Projects</button>
            <button type="button" className="btn btn-primary" style={styles[2]} onClick={()=>handleClick('/experience')}>Experience</button>
            <button type="button" className="btn btn-primary" style={styles[3]} onClick={()=>handleClick('/experience')}>Resume</button>
        </div>
    )
}