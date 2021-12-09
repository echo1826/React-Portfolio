import React from "react";
import {useState} from "react";
import Project from "./pages/Project";
import Footer from "./Footer";
import Navigation from "./Navigation";
import ContactForm from "./pages/ContactForm";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import "./styles/Header.css"


function Header() {
    const [currentPage, setCurrentPage] = useState("About Me");
    
    const handlePageRender = () => {
        // console.log(currentPage);
        switch(currentPage) {
            case "About Me": {
                return(<AboutMe />);
            }
            case "Projects": {
                // pass props that give the project data, title, image, technologies used?
                const projects = [
                {
                    title: "Sheltr",
                    image: "./images/sheltr.PNG",
                    stack: "MERN stack with GraphQL",
                    repo: "https://github.com/echo1826/sheltr",
                    deployed: "https://sheltr-app.herokuapp.com/"
                },
                {
                    title: "Tech Blog",
                    image: "./images/tech-blog.png",
                    stack: "Handlebars, express.js, node.js, sequelize",
                    repo: "https://github.com/echo1826/Tech-Blog",
                    deployed: "https://tech-blog-ec.herokuapp.com/"
                },
                {
                    title: "Express.gym",
                    image: "../images/express-gym.png",
                    stack: "Handlebars, express.js, node.js, sequelize",
                    repo: "https://github.com/nicoledodge/express.gym",
                    deployed: "https://express-gym.herokuapp.com/"
                },
                {
                    title: "Mafia Employee Tracker backend",
                    image: "./images/mafia-tracker.PNG",
                    stack: "mySQL, node.js, express.js",
                    repo: 'https://github.com/echo1826/Mafia-Employee-Tracker',
                    deployed: "https://watch.screencastify.com/v/f5uqZP3bk0R7u0S3FCI8"
                },
                {
                    title: "National Parks Wildfire Tracker",
                    image: "./images/wildfire-tracker.PNG",
                    stack: "HTML, CSS, JavaScript",
                    repo: "https://github.com/chuck2076/Weather_Wildfire_App",
                    deployed: "https://chuck2076.github.io/Weather_Wildfire_App/"
                },
                {
                    title: "Fitness Tracker",
                    image: "./images/fitness-tracker.PNG",
                    stack: "HTML, mongoDB, node.js, express.js",
                    repo: "https://github.com/echo1826/Fitness-Tracker",
                    deployed: "https://ec-fitness-tracker.herokuapp.com/?id=6192c8bdb3399b7d14624dbc"
                }
                ]
                return(
                    <div>
                        <h3 style={{marginLeft: "2%"}}>Click the images to see the application in action!</h3>
                        <ul className="card-wrapper">
                            {projects.map((project) => {
                                return <Project project={project} />;
                            })}
                        </ul>
                    </div>
                    
                );
            }
            case "Contact Me": {
                return (<ContactForm />);
            }
            case "Resume": {
                return (<Resume />);
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