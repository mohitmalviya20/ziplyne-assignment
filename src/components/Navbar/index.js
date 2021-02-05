import React from 'react'
import "./Navbar.css"
import logo from "../../assets/With Drop Shadow.png"
import Button from '@material-ui/core/Button';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo-container">
            <img src={logo} className="logo"/>
            </div>
            <div className="nav-items">
                <div className="tabs">
                    <h2>
                        Home
                    </h2>
                    <h2>
                        Product
                    </h2>
                    <h2>
                        Personas
                    </h2>
                    <h2>
                        Blog 
                    </h2>
                    <h2>
                        Meet The Zipsters
                    </h2>

                </div>
               <Button className="navbar-button">Request a Demo</Button>
            </div>
        </div>
    )
}

export default Navbar
