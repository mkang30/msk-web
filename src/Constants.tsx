import React from "react"
export const BLUE = "rgb(13,110,253)"
export const SKY_BLUE = "rgb(32,178,170)"
export const LIGHT_PURPLE = "rgb(171,32,253)"
export const DEEP_PURPLE = "rgb(125,18,255)"
export const GREY = "rgb(46,46,46)"

export enum ProjectPop{
    GB, BV, WP, ES, DE, RV, NO
}

export type PopupContent = {
    github: string,
    pages: any[]
}
export const NO_CONTENT: PopupContent = {
    github: "",
    pages: []
}
export const GB_CONTENT: PopupContent = {
    github: "https://github.com/mkang30/GravityBalling",
    pages: [
        { 
            pageType: "title",
            title: "Gravity Balling",
            logo: "./images/gb_logo.jpg",
            tags: ["ios","mobile","swift", "wwdc", "3D"],
            description: (
                <div className="pcb-desc">
                    <p><b>Gravity Balling</b> is a mobile game for IOS platform. With 3D graphics that imitate physics on different planets in the
                    solar system, the game serves an educational purpose to teach the concept of gravity in different environments. The gameplay involves simple 
                    <i> swipe-and-shoot</i> motion aiming the targets placed inside the goal-frame.</p>
                    <h2>Technichal Features</h2>
                    <ul>
                        <li>2D and 3D graphics modelling and rendering</li>
                        <li>Physics simulation algorithm</li>
                        <li>Gesture recognition and "force" calculation in the render cycle</li>
                    </ul>
                    <p>Apple WWDC2020 Swift Student Challenge Winner</p>
                </div>
            ),
        },
        {
            pageType: "custom",
            element: (<img src="./images/menu.jpg" style={{width:"80%"}}></img>),
        },
        {
            pageType: "custom",
            element: (<img src="./images/planets.jpg" style={{width:"80%"}}></img>),
        },
        {
            pageType: "custom",
            element: (<img src="./images/earth.jpg" style={{width:"80%"}}></img>),
        },
        {
            pageType: "custom",
            element: (<img src="./images/jupiter.jpg" style={{width:"80%"}}></img>),
        },
        {
            pageType: "custom",
            element: (<img src="./images/mars.jpg" style={{width:"80%"}}></img>),
        }
    ]
}

export const BV_CONTENT: PopupContent = {
    github: "",
    pages: [
        { 
            pageType: "title",
            title: "Bird View",
            logo: "./images/bv_logo.jpg",
            tags: ["OpenGL","graphics","C++", "3D"],
            description: (
                <div className="pcb-desc">
                    <p><b>Bird View</b> is a 3D OpenGL graphics project built from scratch. The app is composed of two different scenes - the view of a natural terrain 
                    from the bird's height and the simulation of reflection physics. Various graphical techniques such as <i>Depth of Field and Procedural 
                    Terrain Generation</i> were used to bring more realistic rendering.</p>
                    <h2>Technichal Features</h2>
                    <ul>
                        <li><i>Real-time grpahics</i> tenchnique 3D render</li>
                        <li>Implementation of customizable <i>Depth of Field</i></li>
                        <li><i>Procefural Terrain Generation</i>  with the Perlin noise map</li>
                        <li><i>Environment mapping</i> for reflection imitation</li>
                    </ul>
                    <p>With <b>Cathy Gao, Vincent Zhu</b></p>
                </div>
            ),
        },
        {
            pageType: "custom",
            element: (
                <iframe width="400" height="270" allow="fullscreen" src="https://www.youtube.com/embed/120-L-li8_g">
                </iframe>
            ),
        },
    ]
}

export const WP_CONTENT: PopupContent = {
    github: "",
    pages: [
        { 
            pageType: "title",
            title: "Wikipedle",
            logo: "./images/wp_logo.jpg",
            tags: ["react","typescript","fastAPI", "python"],
            description: (
                <div className="pcb-desc">
                    <p><b>Wikipedle</b> is a wordle-type web game based on <i>Wikipedia</i>. The goal of the game is to guess the title of a Wiki-article 
                    given its content with keywords hidden. As a player makes incorrect guesses, keywords are revealed in the order from less relevant to more 
                    relevant.</p>
                    <h2>Technichal Features</h2>
                    <ul>
                        <li>REST API backend with web-scrapping from <i>Wikipedia</i></li>
                        <li>Semantic Similarity with <b>HuggingFace</b> DL API for keyword detection</li>
                        <li>DFS graph search algorithm for link distance calculation (from guess to answer)</li>
                    </ul>
                    <p>With <b>Jason Silva, John Finberg, Luke Hammer</b></p>
                </div>

            ),
        },
        {
            pageType: "custom",
            element: (<img src="./images/wp_1.jpg"></img>),
        },
        {
            pageType: "custom",
            element: (<img src="./images/wp_2.jpg"></img>),
        },
        {
            pageType: "custom",
            element: (<img src="./images/wp_3.jpg"></img>),
        },
    ]
}

export const ES_CONTENT: PopupContent = {
    github: "",
    pages: [
        { 
            pageType: "title",
            title: "Eye Spy",
            logo: "./images/es_logo.jpg",
            tags: ["react", "web", "tensorflow"],
            description: (
                <div className="pcb-desc">
                    <p><b>Eye Spy</b> is a live web application that predicts user's gazepoints on the screen based on the webcam feed. The underlying Deep Learning model 
                    learns everytime an user clicks one of the calibration points while looking at it. After a few clicks you can see how the redpoint follows your gaze on 
                    the screen.</p>
                    <h2>Technichal Features</h2>
                    <ul>
                        <li>Feature extraction with <i>MediaPipe Facemesh</i></li>
                        <li>Multilayer Perceptron model for prediction</li>
                    </ul>
                    <p>With <b>Gus LeTourneau</b></p>
                </div>

            ),
        },
        {
            pageType: "custom",
            element: (<img src="./images/es_1.jpg"></img>),
        }
    ]
}

export const DE_CONTENT: PopupContent = {
    github: "",
    pages: [
        { 
            pageType: "title",
            title: "Img Decomposer",
            logo: "./images/id_logo.jpg",
            tags: ["web", "streamlit", "fastAPI", "detectron2"],
            description: (
                <div className="pcb-desc">
                    <p><b>Img Decomposer</b> is a web application for extracting objects from an image. The backend pipeline generates a 
                    segmentation map of the given file from which separate images of objects are created. <b>Facebook</b> developed <b>Detectron2</b> library 
                    was used for <i>Instance Segmentation</i>.</p>
                    <h2>Technichal Features</h2>
                    <ul>
                        <li>Mask-R CNN model wrapper for <i>Instance Segmentation</i></li>
                        <li><b>Streamlit</b> framework for a clean data app frontend with &#60;50 lines of code</li>
                    </ul>
                </div>

            ),
        },
        {
            pageType: "custom",
            element: (<img src="./images/id_1.jpg"></img>),
        },
        {
            pageType: "custom",
            element: (<div className="id-custom">
                        <img src="./images/apples.jpeg" width="200px"></img>
                        <p>Original image</p>
                    </div>),
        },
        {
            pageType: "custom", 
            element: (<div className="id-custom">
                        <img src="./images/apple1.png" style={{width: "150px"}}></img>
                        <img src="./images/apple2.png" style={{width: "150px"}}></img>
                        <img src="./images/apple3.png" style={{width: "150px"}}></img>
                        <p>Segmented images</p>
                    </div>),
        }  
    ]
}

export const RV_CONTENT: PopupContent = {
    github: "",
    pages: [
        { 
            pageType: "title",
            title: "Rear View",
            logo: "./images/rv_logo.jpg",
            tags: ["swift", "ios", "mobile", "figma"],
            description: (
                <div className="pcb-desc">
                    <p><b>Rear View</b> is a virtual investing mobile app. The idea of the project is to provide a 'playground' for beginner investors, 
                    where everything functions just like on a real stock market platform, with the exception of money. The virtual currency 
                    in the app &#9408;  is allocated only once at the beginning and cannot be replenished.</p>
                    <h2>Technichal Features</h2>
                    <ul>
                        <li>Caching to minimize API calls</li>
                        <li>Complex data structures to process and wrap stocks data</li>
                        <li>Lo-Fi and Hi-Fi(Figma) design prototyping</li>
                    </ul>
                    <p>The app is currently in the development process after finishing investigation and design cycles.</p>
                </div>

            ),
        },
        {
            pageType: "custom",
            element: (<img src="./images/rearview.png" style={{width:"80%"}}></img>),
        }
        ,
        {
            pageType: "custom",
            element: (<img src="./images/rv_1.jpeg" style={{width:"80%"}}></img>),
        }
        ,
        {
            pageType: "custom",
            element: (<img src="./images/rv_2.jpeg" style={{width:"70%"}}></img>),
        }
        ,
        {
            pageType: "custom",
            element: (<img src="./images/rv_3.jpeg" style={{width:"70%"}}></img>),
        }
        ,
        {
            pageType: "custom",
            element: (<img src="./images/rv_4.jpeg" style={{width:"80%"}}></img>),
        }
    ]
}
export const popupContents = [GB_CONTENT,BV_CONTENT,WP_CONTENT,ES_CONTENT,DE_CONTENT,RV_CONTENT]
