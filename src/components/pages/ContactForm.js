import React from "react";

function ContactForm(props) {
    return(
        <div>
            <h2>Contact Me</h2>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text"></input>
            <label htmlFor="email">Email:</label>
            <input id="email" type="text"></input>
            <label htmlFor="message"></label>
            <textarea id="message"></textarea>
        </div>
    )
}

export default ContactForm;