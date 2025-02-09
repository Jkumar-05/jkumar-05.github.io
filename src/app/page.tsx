"use client";
//import { abort } from "process";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";



export default function HomePage () {
  return(
    <>
<div style={{
     background: "radial-gradient(600px at 1087px 190px, rgba(29, 100, 216, 0.5), transparent 80%)",
     height: "100vh",
     display: "flex"
} }
   
   >
    <div style={{
    background: "radial-gradient(600px at 1087px 190px, rgba(29, 100, 216, 0.5), transparent 80%)",
    height: "100vh",
    display: "flex"
}}></div>


  

  <h1 style={{
    color: "whitesmoke", 
    fontSize : "50px", 
    position: "absolute", 
    left: "30px",
    top: "67.5px",
    fontFamily: "Montserrat"}}>
    Jatin Kumar</h1>

    <h2 style={{
    color: "whitesmoke", 
    fontSize : "25px", 
    position: "absolute",
    left: "35px",
    top: "130px",
    fontFamily: "Lora",}}>
      Future Software Engineer
    </h2>

    <div
  style={{
    position: "absolute",
    top: "85px",
    right: "100px",
    color: "whitesmoke",
    fontSize: "20px",
    maxWidth: "700px",
  }}
>
  <p>
  
  I’m a developer passionate about building intelligent, efficient, and scalable software systems.
    My interests lie at the intersection of AI, data science, and software engineering, where I aim to create 
    innovative solutions that enhance automation and decision-making.
  </p>
<br></br>
  <p>
   
  Currently, I am a Software Engineering Intern at BawsHuman, contributing to the development of a fitness app.
    My focus is on writing clean, maintainable code and improving system performance to deliver a seamless user experience.
  </p>
<br></br>
  <p>
  
  As a computer science student at Ohlone College, I’ve built projects in C++, Python, and Next.js, collaborating 
    with teams to develop software solutions assigned by my professors. I also have experience tutoring peers in STEM 
    subjects, reinforcing my understanding of complex concepts while helping others succeed.
  </p>
<br></br>
  <p>
  
  My long-term goal is to work in Silicon Valley’s tech industry, specializing in AI-driven software and robotic automation. 
    I’m continuously learning, experimenting with new technologies, and refining my skills to contribute meaningfully to the 
    future of AI.
  </p>
<br></br>
  <p>
   
  In my spare time, I’m either reading, working out, or diving into psychology and AI research.
  </p>
</div>


<div style={{ maxWidth: "100%", maxHeight: "500px", overflow: "hidden",
position:"absolute",
top: "175px",
left: "20px" }}>
  <Image
    src="/replacePhoto.png"
    width={300}
    height={300}
    alt="Description of the image"
    
  
  />
</div>


   
 
 
 

    <a href = "https://drive.google.com/file/d/1VSKx2pYx44PIbchwcF8e2--Lo1QZcCDv/view" target = "blank"
    style={{display: "inline-block",
    padding: "10px 20px",
    background: "linear-gradient(to right,blue, teal )", // Blue color
    color: "white",
    textAlign: "center",
    textDecoration: "none", // Removes the underline
    borderRadius: "5px", // Rounded corners
    fontSize: "30px",
    fontWeight: "bold",
    position: "absolute",
    top: "600px",
    left: "30px"
  }}
    >Resume</a>


<a href ="https://www.linkedin.com/in/jatin-kumar-5b79672a4/" target="_blank" >
  <FontAwesomeIcon icon={faLinkedin} size="xs" color="grey" 
  style={{fontSize:"30px",
  maxWidth: "30px",
  position: "absolute",
  bottom: "10px",
  left: '30px'}}></FontAwesomeIcon>
</a>


<a href="https://github.com/Jkumar-05" target="_blank">
  <FontAwesomeIcon icon={faGit} size="xs" color="grey"
  style={{fontSize:"30px",
  maxWidth: "30px",
  position: "absolute",
  bottom: "10px",
  left: '80px'}}></FontAwesomeIcon>
</a>






</div>
    </>

  );

}