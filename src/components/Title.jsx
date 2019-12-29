import React from 'react'

const Title = ({upperTitle, lowerTitle}) => {
    return (
        <div className="section-title text-center pb50">
            <span className="title-text pink text-uppercase">{upperTitle}</span>
            <h1 className="title deep-black pb40">{lowerTitle}</h1>
        </div>
    )
}

export default Title
