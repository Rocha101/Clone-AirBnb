import React from "react"
import Katie from '../images/katie.png'
import Star from '../images/Star 1.png'

export default function Card() {
    return (
        
        <div className="card">
            <img src={Katie} alt='katie-pic' className="card--image"/>
            <div className="card--stats">
            <img src={Star} alt='star' className="card--star"/>
            <span className="gray">5.0</span>
            <span className="gray">(6) • </span>
            <span>USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}