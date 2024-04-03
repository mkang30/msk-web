import React from 'react'

const colors = ['rgb(13,110,253)', 'rgb(171,32,253)', "rgb(125,18,255)","rgb(57,255,20)","rgb(224,231,34)","rgb(6,94,99)"]

function randomElement(items: any[]){
    return items[Math.floor(Math.random()*items.length)]

}

export default function ProjectCard(props: {name: string, img: string, tags: string[], ghLink: string | null}){
    return(
        <div className="card mb-4">
            <img className="card-img-top" src={props.img}/>
        </div>
    )
}


