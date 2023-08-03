import React from "react"
import "../styles/Home.css"

function Home() {
    return (
        <div className="main-box home-box">
            <div className="profile-pic-box">
                <img className="profile-pic" src="/images/profile.jpg"/>
            </div>
            <div className="social-box">
                <a className="social-icons" href = "https://github.com/mkang30">
                    <i className="fab fa-github fa-xl" aria-hidden="true"></i>
                </a>
                <a className="social-icons" href = "https://www.linkedin.com/in/min-seong-kang-b2955b263/">
                    <i className="fab fa-linkedin fa-xl" aria-hidden="true"></i>
                </a> 
                <a className="social-icons" href = "mailto:minseongkang18@gmail.com">
                    <i className="fas fa-envelope fa-xl" aria-hidden="true"></i>
                </a>
            </div>
            <div className="bio-box">
                <p>Hello! My name is Min Seong Kang! I am a junior at Brown University studying Computer Science.</p>
                <p>Currently I am specializing in Mobile Development, but my core passion is <em>creation</em>. I have a wide variety of interests, so I am always open to learn
                    new technology in pursuit of my goals.</p>
                <p>I am dedicated to making a positive impact on our lives through my work!</p>
                <p>Thanks for dropping by!</p>
            </div>
            
        </div>
    )
}

export default Home