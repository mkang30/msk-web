import React from 'react'
import '../styles/KeyBubble.css'

export default function KeyBubble(props: {text: string}){
    return (
        <div className='bubble'>
            <span>{props.text}</span>
        </div>
    )
}