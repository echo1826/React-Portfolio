import React from "react";
import "../styles/ContactForm.css"

function ContactForm(props) {
    return(
        <div className="container">
            <h2>Contact Me</h2>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" placeholder="Name"></input>
            <label htmlFor="email">Email:</label>
            <input id="email" type="text" placeholder="Email"></input>
            <label htmlFor="message">Message:</label>
            <textarea id="message" placeholder="Message" style={{height:200}}></textarea>
            <button>Submit</button>
        </div>
    )
}

export default ContactForm;