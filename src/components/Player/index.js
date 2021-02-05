import React from 'react'
import "./Player.css"
import background from "../../assets/Player Background.svg"
import playerGraphic from "../../assets/Player Graphic.png"

function Player() {
    return (
        <div>
            <img src={playerGraphic} className="player-graphic"/>
            <img src={background} className="player-main"/>
        </div>
    )
}

export default Player
