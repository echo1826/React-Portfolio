import React from "react";
import "../styles/Project.css";

function Project({project}) {
    return(
        
        <li className="card">
            <a href={project.repo} style={{textDecoration: "none", color: "black"}}>
                <img className="image" src={project.image} alt={project.title} />
                <h3 style={{marginTop: "1rem", fontSize: "1.25rem"}}>{project.title}</h3>
                <p>{project.stack}</p>
            </a>
         </li>
    )
}

export default Project;