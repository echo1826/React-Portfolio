import React from "react";
import "../styles/AboutMe.css";


function AboutMe() {

    return(
        <div className="backgroundColor aboutMeSection">
            <div>
                <img style={{height:"100%", borderRadius: "2rem", marginLeft:"2%", boxShadow:"0.2rem 0.2rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)", width: '90%'}} alt="Ethan Cho" src="./images/IMG_1105.JPG" />
            </div>
            <div style={{marginLeft: '10px'}}>
                <h2 className="title" style={{textAlign: 'center'}}>About Me</h2>
                {/* profile pic goes here */}
                <article className="article">
                    <p>
                        Hi, my name is Ethan Cho and I am a recently graduated fullstack web developer from the University of Texas At Austin Fullstack Coding Bootcamp. Hobbies that I enjoy during my free time includes tennis, reading, listening to K-pop, keyboard building, and computer building.
                    </p>
                    <br/>
                    <p>
                        Software development intrigued me when I began to build computers and started diving into the world of tech when I graduated high school. Eventually as I started to become more comfortable with computer hardware, as I researched more for building computers, I became interested in learning about software on a computer. So I self-taught myself the basics of programming in C++, and enrolled in a coding bootcamp in order to learn more about developing applications. I am proficient in JavaScript with some basic knowledge of C++. The technologies I am proficient in are react.js, node.js, express.js, bootstrap, mySQL, mongoDB, sequelize, and mongoose.
                    </p>
                </article>
            </div>
            
        </div>
    )
}

export default AboutMe;