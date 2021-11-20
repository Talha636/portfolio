import React, { useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'

export default function Portfolio () {
    const [selected,setSelected] = useState("featured");
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "aboutMe",
            title: "About Me",
        },
        {
            id: "resume",
            title: "Resume",
        },
    ]
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList 
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}