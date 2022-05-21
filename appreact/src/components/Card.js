import React from "react"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    const imgSrc = require(`../../public/images/${props.coverImg}`)
    const star = require(`../images/Star 1.png`)
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={imgSrc} className="card--image" alt=""/>
            <div className="card--stats">
                <img src={star} className="card--star" alt=""/>
                <div className="card--stats">
                    <span className="card--rate">{props.stats.rating}</span>
                    <span className="gray">({props.stats.reviewCount}) • </span>
                </div>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}