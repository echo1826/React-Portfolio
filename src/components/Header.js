import React from "react";
import { useState } from "react";
import Project from "./pages/Project";
import Footer from "./Footer";
import Navigation from "./Navigation";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import "./styles/Header.css";

function Header() {
    const [currentPage, setCurrentPage] = useState("About Me");
    const [modalOpen, setModalOpen] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    });
    const handleModalOpen = (e) => {
        e.preventDefault();
        const id = e.target.getAttribute("id");
        console.log(id);
        if (!modalOpen[id]) {
            setModalOpen({ ...modalOpen, [id]: true });
        } else {
            setModalOpen({ ...modalOpen, [id]: false });
        }
    };

    const handlePageRender = () => {
        // console.log(currentPage);
        switch (currentPage) {
            case "About Me": {
                return <AboutMe />;
            }
            case "Projects": {
                // pass props that give the project data, title, image, technologies used?
                const projects = [
                    {
                        title: "Sheltr",
                        image: "./images/sheltr.PNG",
                        stack: "MERN stack with GraphQL",
                        repo: "https://github.com/echo1826/sheltr",
                        deployed: "https://sheltr-app.herokuapp.com/",
                        description:
                            "A tinder clone MERN application that allows users to easily adopt a rescue pet from nearby Austin shelters",
                    },
                    {
                        title: "Tech Blog",
                        image: "./images/tech-blog.png",
                        stack: "Handlebars, express.js, node.js, sequelize",
                        repo: "https://github.com/echo1826/Tech-Blog",
                        deployed: "https://tech-blog-ec.herokuapp.com/",
                        description:
                            "A fullstack application that enable users to post blog threads, and comment on those threads about anything",
                    },
                    {
                        title: "kickstarter",
                        image: "../images/kickstarter.PNG",
                        stack: "Next.js, semantic-ui, web3, Solidity, infura",
                        repo: "https://github.com/echo1826/kickstarter-nextjs",
                        deployed:
                            "https://github.com/echo1826/kickstarter-nextjs",
                        description:
                            "A web3 platform for tracking kickstarter campaigns on the Ethereum network. You can deploy a kickstarter campaign onto the network and people can contribute to the campaign using ether",
                    },
                    {
                        title: "Mafia Employee Tracker backend",
                        image: "./images/mafia-tracker.PNG",
                        stack: "mySQL, node.js, express.js",
                        repo: "https://github.com/echo1826/Mafia-Employee-Tracker",
                        deployed:
                            "https://watch.screencastify.com/v/f5uqZP3bk0R7u0S3FCI8",
                        description:
                            "A backend application that can update/add/remove employee/department data in a company",
                    },
                    {
                        title: "National Parks Wildfire Tracker",
                        image: "./images/wildfire-tracker.PNG",
                        stack: "HTML, CSS, JavaScript",
                        repo: "https://github.com/chuck2076/Weather_Wildfire_App",
                        deployed:
                            "https://chuck2076.github.io/Weather_Wildfire_App/",
                        description:
                            "A frontend application that shows the current weather and fire dangers of any national parks in the US",
                    },
                    {
                        title: "Fitness Tracker",
                        image: "./images/fitness-tracker.PNG",
                        stack: "HTML, mongoDB, node.js, express.js",
                        repo: "https://github.com/echo1826/Fitness-Tracker",
                        deployed:
                            "https://ec-fitness-tracker.herokuapp.com/?id=6192c8bdb3399b7d14624dbc",
                        description:
                            "A fullstack application that can track exercise data inputted by the user and displays the aggregate data over the past 7 workouts inputted in a chart",
                    },
                ];
                return (
                    <div>
                        <h3 style={{ marginLeft: "2%" }}>
                            Click the images to see the application in action!
                        </h3>
                        <ul className="card-wrapper">
                            {projects.map((project, i) => {
                                return (
                                    <Project
                                        project={project}
                                        modalOpen={modalOpen}
                                        handleModalOpen={handleModalOpen}
                                        cardNumber={i}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                );
            }
            case "Resume": {
                return <Resume />;
            }
            default: {
                console.log("Something went wrong");
                break;
            }
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className={`${modalOpen ? null : "modalOpen"}`}>
            <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            {handlePageRender()}
            <Footer />
        </div>
    );
}

export default Header;
