import React from "react";
import {useState, useEffect} from "react";
import Project from "./pages/Project";
import Footer from "./Footer";
import Navigation from "./Navigation";
import ContactForm from "./pages/ContactForm";
import AboutMe from "./pages/AboutMe";


function Header() {
    const [currentPage, setCurrentPage] = useState(true);

    const handlePageRender = () => {
        switch(currentPage) {
            case "About Me": {
                return(<AboutMe />);
                // break;
            }
            case "Projects": {
                // pass props that give the project data, title, image, technologies used
                return(
                    <div>
                        <Project />
                        <Project />
                        <Project />
                    </div>
                );
                // break;
            }
            case "Contact Me": {
                return (<ContactForm/>);
            }
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Navigation />
            {handlePageRender}
            <Footer />
        </div>
        
        );
}

export default Header;