import React from "react";
import "./styles/Navigation.css";

function Navigation(props) {
    

    return(
        <div className="header">
            <h1 style={{color: "#3A506B"}}>
                Ethan Cho
            </h1>
            <nav>
                <ul className="navbar">
                    <li className="btn black spaceOut">
                        <a className="linkDecoration" href="#home" onClick={() => props.handlePageChange("About Me")}>About Me</a>
                    </li>
                    <li className="btn black spaceOut">
                        <a className="linkDecoration" href="#projects" onClick={() => props.handlePageChange("Projects")}>Projects</a>
                    </li>
                    <li className="btn black spaceOut">
                        <a className="linkDecoration" href="#resume" onClick={() => props.handlePageChange("Resume")}>Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;