import React from "react";
import "../styles/ContactForm.css"

function ContactForm() {
    return(
        <div className="container">
            <h2>Contact Me</h2>
            <label htmlFor="name">Name:</label>
            <input className="inputStyling" id="name" type="text" placeholder="Name"></input>
            <label htmlFor="email">Email:</label>
            <input className="inputStyling" id="email" type="text" placeholder="Email"></input>
            <label htmlFor="message">Message:</label>
            <textarea className="inputStyling" id="message" placeholder="Message" style={{height:300}}></textarea>
            <button className="button" type="submit">Submit</button>
        </div>
    )
}

export default ContactForm;