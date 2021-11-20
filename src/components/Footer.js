import React from "react";
import "./styles/Footer.css";

function Footer() {
    return(
        <footer style={{marginTop: 20}}>
            <nav>
                <ul className="footerNavbar">
                    <li>
                        <a className="footerLink" href="https://github.com/echo1826" target="_blank"><i className="fab fa-github fa-5x"></i></a>
                    </li>
                    <li>
                        <a className="footerLink" href="https://www.linkedin.com/in/ethan-cho-51a138221/" target="_blank"><i className="fab fa-linkedin fa-5x"></i></a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;