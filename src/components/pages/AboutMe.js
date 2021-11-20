import React from "react";
import "../styles/AboutMe.css";

function AboutMe() {
    return(
        <div className="backgroundColor">
            <h2 className="title">About Me</h2>
            {/* profile pic goes here */}
            <article className="article">
                <p>
                    Hi, my name is Ethan Cho and I am currently a web developer in training at the UT Coding Bootcamp. Hobbies that I enjoy during my free time includes tennis, reading, listening to K-pop, keyboard building, and computer building. I am proficient in JavaScript with some basic knowledge of C++. The technologies I am proficient in are react.js, node.js, express.js, bootstrap, mySQL, mongoDB, sequelize, and mongoose.
                </p>
                <br/>
                <p>
                    Software development intrigued me when I began to build computers and started diving into the world of tech when I graduated high school. Eventually as I started to become more comfortable with computer hardware as I researched more for building computers I became interested in learning about software on a computer. So I self-taught myself the basics of programming in C++. I hit a snag along my learning and realized I needed professional help in trying to sort out the information I learned through the bootcamp.
                </p>
            </article>
        </div>
    )
}

export default AboutMe;