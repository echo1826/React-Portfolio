import React from "react";
import "../styles/Project.css";

function Project({project}) {
    return(
        
        <li className="card">
            <a href={project.repo} style={{textDecoration: "none", color: "black"}} target="_blank">
                <img className="image" src={project.image} alt={project.title} />
                <div className="card-body">
                    <h3 style={{marginTop: "1rem", fontSize: "1.25rem"}}>{project.title}</h3>
                    <p>{project.stack}</p>
                    <button className="github-button">Github Repo</button>
                </div>
            </a>
         </li>
    )
}

export default Project;