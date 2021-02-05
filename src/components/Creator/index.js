import React from 'react'
import "./Creator.css"
import background from "../../assets/Creator Background.svg"
import playerGraphic from "../../assets/Creator Graphic.png"

function Creator() {
    return (
        <div>
            <img src={playerGraphic} className="player-graphic"/>
            <img src={background} className="player-main"/>
        </div>
    )
}

export default Creator
