import React from "react";
import {useState} from "react";
import Project from "./pages/Project";
import Footer from "./Footer";
import Navigation from "./Navigation";
import ContactForm from "./pages/ContactForm";
import AboutMe from "./pages/AboutMe";
import "./styles/Header.css"


function Header() {
    const [currentPage, setCurrentPage] = useState("About Me");
    
    const handlePageRender = () => {
        console.log(currentPage);
        switch(currentPage) {
            case "About Me": {
                return(<AboutMe />);
            }
            case "Projects": {
                // pass props that give the project data, title, image, technologies used?
                const projectOne = {
                    title: "Tech Blog",
                    image: "./images/tech-blog.png",
                    stack: "Handlebars, express.js, node.js",
                    repo: "https://github.com/echo1826/Tech-Blog",
                    deloyed: ""
                };
                const projectTwo = {
                    title: "Express.gym",
                    image: "../images/express-gym.png",
                    stack: "Handlebars, express.js, node.js",
                    repo: "https://github.com/nicoledodge/express.gym",
                    deployed: ""
                };
                const projectThree = {
                    title: "Mafia Employee Tracker backend",
                    image: "./images/mafia-tracker.PNG",
                    stack: "mySQL, node.js, express.js",
                    repo: 'https://github.com/echo1826/Mafia-Employee-Tracker',
                    deployed: "#"
                };
                const projectFour = {
                    title: "National Parks Wildfire Tracker",
                    image: "./images/wildfire-tracker.PNG",
                    stack: "HTML, CSS, JavaScript",
                    repo: "https://github.com/chuck2076/Weather_Wildfire_App",
                    deployed: ""
                };
                const projectFive = {
                    title: "Fitness Tracker",
                    image: "./images/fitness-tracker.PNG",
                    stack: "mongoDB, node.js, express.js",
                    repo: "https://github.com/echo1826/Fitness-Tracker",
                    deployed: ""
                };
                const projectSix = {
                    title: "Weather Tracker",
                    image: "./images/weather-app.png",
                    stack: "HTML, CSS, JavaScript",
                    repo: "https://github.com/echo1826/Weather-Checker",
                    deployed: ""
                };
                return(
                    <ul className="card-wrapper">
                        <Project project={projectOne}/>
                        <Project project={projectTwo}/>
                        <Project project={projectThree}/>
                        <Project project={projectFour}/>
                        <Project project={projectFive}/>
                        <Project project={projectSix}/>
                    </ul>
                );
            }
            case "Contact Me": {
                return (<ContactForm />);
            }
            default: {
                console.log("Something went wrong");
                break;
            }
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            {handlePageRender()}
            <Footer />
        </div>
        
        );
}

export default Header;