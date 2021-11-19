import React from "react";
import "../styles/ContactForm.css"

function ContactForm() {
    return(
        <div className="container">
            <h2 style={{marginBottom: 20, fontSize: 40}}>Contact Me</h2>
            <label style={{fontSize: 20}} htmlFor="name">Name:</label>
            <input className="inputStyling" id="name" type="text" placeholder="Name"></input>
            <label style={{fontSize: 20}} htmlFor="email">Email:</label>
            <input className="inputStyling" id="email" type="text" placeholder="Email"></input>
            <label style={{fontSize: 20}} htmlFor="message">Message:</label>
            <textarea className="inputStyling" id="message" placeholder="Message" style={{height:300}}></textarea>
            <button className="button" type="submit">Submit</button>
        </div>
    )
}

export default ContactForm;