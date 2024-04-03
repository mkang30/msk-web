import "./styles/App.css"
import './styles/index.css'
import React, { useEffect, useState } from "react"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from "./components/Page";
import * as constants from './Constants'

export type PageProps = {
  title: string,
  subtitle: string,
  pageContent: PageContent,
  themeColor: string
}

export enum PageContent {
  HOME,
  PROJECTS,
  COOKIE
}

export function App() {
  // The data state is an array of strings, which is passed to our components
  // You may want to make this a more complex object, but for now it's just a string
  const [dimensions, setDimensions] = useState({height: window.innerHeight,width: window.innerWidth})
  useEffect(() => {
    function handleResize() {
      setDimensions({height: window.innerHeight, width: window.innerWidth})
    }
    window.addEventListener('resize', handleResize)
  },[])
  return (
    <div id="app" style={{height:dimensions.height}}> 
      <Router>
        <Routes>
          <Route path='/' element={ <Page title="Hi I'm Min" subtitle='About me' pageContent={PageContent.HOME} themeColor={constants.SKY_BLUE}/> } />
          <Route path='/projects' element={ <Page title="Projects" subtitle='Software' pageContent={PageContent.PROJECTS} themeColor={constants.BLUE}/> }/>
          <Route path='/cookie' element={ <Page title="Cookie" subtitle='Technical' pageContent={PageContent.COOKIE} themeColor={constants.LIGHT_PURPLE}/> }/>
        </Routes> 
      </Router>
    </div>
       
  );
}
