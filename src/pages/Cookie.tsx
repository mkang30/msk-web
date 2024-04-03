import React, {useState} from "react"
import "../styles/Cookie.css"
import {quotes} from "../quotes"

function Cookie() {
    const [cracked, setCracked] = useState(true)
    return (
        <div className="main-box cookie-box">
            {cracked ? <img src="/images/cookie.png" width="400px" onClick={()=>{setCracked(false)}}></img> : 
            <p>"{quotes[Math.floor(Math.random() * quotes.length)]}"</p>}
        </div>
    )
}

export default Cookie