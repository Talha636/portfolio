import React from 'react'
import './intro.scss'

export default function Intro () {
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="" alt="me" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Talha Latif</h1>
                    <h3>Web Developer<span></span></h3>
                </div>
            </div>
        </div>
    )
}