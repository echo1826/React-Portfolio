import React from "react";
import "./styles/Footer.css";

function Footer() {
    return(
        <footer>
            <h2 style={{textAlign: "center", fontSize: "20px", marginTop: '20px'}}>Check out my socials, or email me here!</h2>
            <nav >
                <ul style={{margin: 40, position: "relative", bottom: 0}} className="footerNavbar">
                    <li>
                        <a className="footerLink" href="https://github.com/echo1826" target="_blank" rel="noreferrer"><i className="fab fa-github fa-5x footerIcon"></i></a>
                    </li>
                    <li>
                        <a className="footerLink" href="https://www.linkedin.com/in/ethan-cho-51a138221/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-5x footerIcon"></i></a>
                    </li>
                    <li>
                        <a className="footerLink" href="https://stackoverflow.com/users/17466878/ephexs" target="_blank" rel="noreferrer"><i className="fab fa-stack-overflow fa-5x footerIcon"></i></a>
                    </li>
                    <li>
                        <a className="footerLink" href="mailto:ethan.cho1826@gmail.com"><i className="fas fa-envelope fa-5x footerIcon"></i></a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;