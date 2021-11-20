import React, { useState } from "react";
import "../styles/ContactForm.css";
import {validateEmail} from "../utils/helpers";

function ContactForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if(inputType === "name") {
            setName(inputValue);
        }else if(inputType === "email") {
            setEmail(inputValue);
        }else if(inputType === "message") {
            setMessage(inputValue);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name) {
            console.log("error message firing");
            setErrorMessage("Name field is required!");
            return;
        }else if(!validateEmail(email)) {
            setErrorMessage("Invalid email submitted!");
            return;
        }else if(!message) {
            setErrorMessage("Message field is required!");
            return;
        }
        setName("");
        setEmail("");
        setMessage("");
        alert("Message submitted!");
    }

    return(
        <div className="container">
            <form>
                <h2 style={{marginBottom: 20, fontSize: 40}}>Contact Me</h2>
                <label style={{fontSize: 20}} htmlFor="name">Name:</label>
                <input className="inputStyling" id="name" name="name" type="text" placeholder="Name" onChange={handleInputChange}></input>
                <label style={{fontSize: 20}} htmlFor="email">Email:</label>
                <input className="inputStyling" id="email" name="email" type="text" placeholder="Email" onChange={handleInputChange}></input>
                <label style={{fontSize: 20}} htmlFor="message">Message:</label>
                <textarea className="inputStyling" id="message" name="message" placeholder="Message" style={{height:300}} onChange={handleInputChange}></textarea>
                <button className="button" type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            {errorMessage ? (
                <div>
                    <p>{errorMessage}</p>
                </div>
            ) : undefined}
        </div>
    )
}

export default ContactForm;