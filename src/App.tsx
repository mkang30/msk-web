import "./styles/App.css"
import React from "react"
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
  EXPERIENCE
}

export function App() {
  // The data state is an array of strings, which is passed to our components
  // You may want to make this a more complex object, but for now it's just a string
  return (
    <div> 
      <Router>
        <Routes>
          <Route path='/' element={ <Page title="Hi I'm Min" subtitle='About me' pageContent={PageContent.HOME} themeColor={constants.SKY_BLUE}/> } />
          <Route path='/projects' element={ <Page title="Projects" subtitle='Software' pageContent={PageContent.PROJECTS} themeColor={constants.BLUE}/> }/>
          <Route path='/experience' element={ <Page title="Experience" subtitle='Technical' pageContent={PageContent.EXPERIENCE} themeColor={constants.LIGHT_PURPLE}/> }/>
        </Routes> 
      </Router>
    </div>
       
  );
}
