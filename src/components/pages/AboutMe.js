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
                        Hi, my name is Ethan Cho and I am a tutor and teaching asssistant for the Web Development Boot Camp at the University of Texas at Austin. Hobbies that I enjoy during my free time includes tennis, reading, listening to K-pop, keyboard building, and computer building.
                    </p>
                    <br/>
                    <p>
                        Full-Stack Developer and bootcamp graduate from the University of Texas at Austin; certified in JavaScript, CSS, HTML5, and the MERN stack. Recognized as an inventive problem-solver with an intense drive to learn new technologies and concepts. Keen knowledge on applying aspects of agile development and effective, efficient solutions. Worked on a team of five to develop a MERN application that helps local future pet adopters to view, save, and filter out current dogs up for adoption in local shelters in their area. Exhilarated to use the advantage of being a part of a fast-paced, quality-driven environment to help build solutions to practical problems experienced by everyday users.
                    </p>
                    
                </article>
            </div>
            
        </div>
    )
}

export default AboutMe;