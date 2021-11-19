import React from "react";

function Navigation(props) {
    

    return(
        <div>
            <h1>
                Ethan Cho
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href="#home" onClick={() => props.handlePageChange("About Me")}>About Me</a>
                    </li>
                    <li>
                        <a href="#projects" onClick={() => props.handlePageChange("Projects")}>Projects</a>
                    </li>
                    <li>
                        <a href="#contactme" onClick={() => props.handlePageChange("Contact Me")}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;