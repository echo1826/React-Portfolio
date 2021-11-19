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
                return(
                    <div>
                        <Project />
                        <Project />
                        <Project />
                    </div>
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