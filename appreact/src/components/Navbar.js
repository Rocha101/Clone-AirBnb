import React from "react"
import AirLogo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={AirLogo} alt='airlogo' className="nav--logo"></img>
        </nav>
    )
}