import React from 'react'

export default function PageTitle(props: {title: string, subtitle: string, themeColor: string}) {
    return (
        <div className='title-box' >
            <h2 style={{color: props.themeColor}}>{props.subtitle}</h2>
            <h1>{props.title}</h1>
        </div>
    )
}