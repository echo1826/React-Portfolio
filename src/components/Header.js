import React from "react";
import {useState} from "react";
import Project from "./pages/Project";
import Footer from "./Footer";
import Navigation from "./Navigation";
import ContactForm from "./pages/ContactForm";
import AboutMe from "./pages/AboutMe";


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
                    image: "",
                    stack: "Handlebars, express.js, node.js",
                    repo: "https://github.com/echo1826/Tech-Blog"
                };
                const projectTwo = {
                    title: "Express.gym",
                    image: "",
                    stack: "Handlebars, express.js, node.js",
                    repo: "https://github.com/nicoledodge/express.gym"
                };
                const projectThree = {
                    title: "Mafia Employee Tracker backend",
                    image: "",
                    stack: "mySQL, node.js, express.js",
                    repo: 'https://github.com/echo1826/Mafia-Employee-Tracker'
                };
                const projectFour = {
                    title: "National Parks Wildfire Tracker",
                    image: "",
                    stack: "HTML, CSS, JavaScript",
                    repo: "https://github.com/chuck2076/Weather_Wildfire_App"
                };
                const projectFive = {
                    title: "Fitness Tracker",
                    image: "",
                    stack: "mongoDB, node.js, express.js",
                    repo: "https://github.com/echo1826/Fitness-Tracker"
                };
                const projectSix = {
                    title: "Weather Tracker",
                    image: "",
                    stack: "HTML, CSS, JavaScript",
                    repo: "https://github.com/echo1826/Weather-Checker"
                };
                return(
                    <ul style={{listStyle: "none"}}>
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