import React from "react";
import "../styles/Resume.css";

function Resume() {
    return (
        <div style={{ textAlign: "center" }}>
            <a
                className="resume"
                href="./images/Resume.pdf"
                target="_blank"
                rel="noreferrer"
            >
                <i className="far fa-file"></i> Download my Resume here
            </a>
            <h3 style={{ fontSize: 35, paddingTop: 10 }}>Languages:</h3>
            <ul className="proficiency-wrapper">
                <li>JavaScript</li>
                <li>Python</li>
                <li>Solidity</li>
            </ul>
            <h3 style={{ fontSize: 35, paddingTop: 15 }}>Frontend:</h3>
            <ul className="proficiency-wrapper">
                <li>HTML5</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>jQuery</li>
                <li>Next.js</li>
                <li>web3.js</li>
            </ul>
            <h3 style={{ fontSize: 35, paddingTop: 15 }}>Backend:</h3>
            <ul className="proficiency-wrapper">
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>Sequelize</li>
                <li>Mongoose</li>
                <li>GraphQL</li>
                <li>Socket.io</li>
            </ul>
        </div>
    );
}

export default Resume;
