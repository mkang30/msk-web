import React from 'react'
import {PageContent, PageProps} from '../App'
import PageTitle from './PageTitle'
import NavBar from './NavBar'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Experience from '../pages/Experience'

export default function Page(props: PageProps){
    return(
            <div id="page-container">
                <NavBar pageContent={props.pageContent}></NavBar>
                {(()=>{
                    switch(props.pageContent){
                        case PageContent.HOME:
                            return <Home/>
                        case PageContent.PROJECTS:
                            return  <Projects/>
                        case PageContent.EXPERIENCE:
                            return <Experience/>
                        default:
                            return
                    }
                })()}
                
            </div>
       
    )
}