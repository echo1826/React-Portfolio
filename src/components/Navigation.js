import React from "react";
import "./styles/Navigation.css";

function Navigation(props) {
    

    return(
        <div className="header">
            <h1 className="">
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
                        <a className="linkDecoration" href="#contactme" onClick={() => props.handlePageChange("Contact Me")}>Contact</a>
                    </li>
                    <li className="btn black spaceOut">
                        <a className="linkDecoration" href="#">Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;