import React from 'react'
import "./Dashboard.css"
import background from "../../assets/Dashboard Background.svg"
import playerGraphic from "../../assets/Dashboard Graphic.png"

function Dashboard() {
    return (
        <div>
            <img src={playerGraphic} className="player-graphic"/>
            <img src={background} className="player-main"/>
        </div>
    )
}

export default Dashboard
