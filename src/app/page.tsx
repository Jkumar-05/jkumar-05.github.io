//import { abort } from "process";
import Image from "next/image";
//import photo from "...public/photo.jpeg"



export default function HomePage () {
  return(
    <>
  <h1 style={{color: "green", fontSize : "50px", textAlign: "center"}}>
    Jatin Kumar</h1>

    <h2 style = {{
      position: "absolute",
      top: "150px",
      left: "30px", 
      color: "Green", fontSize: "40px", textAlign: "center"}}>About</h2>

    <p style = {{
      position: "absolute",
      top: "200px",
      left: "30px",
      color: 'purple',
      fontSize: "20px", 
    }}>Hi there! I’m an aspiring software engineer<br></br> 
    passionate about creating impactful and innovative solutions.<br></br>
     Currently, I’m gaining valuable experience as an intern for <br></br>
     a fitness app, where I’m learning the ropes and building my skills. As a <br></br>
     second-year college student, I’m driven by my love for coding and <br></br>
     the excitement of continuous growth.</p>
    
    <div style = {{ position: "relative", height: "500px"}}>
     <Image 
      src="/photo.jpeg"  // Path is relative to the public folder
      alt="Description of the image"
      width={300}
      height={300}
      style={{position: "absolute", top: "2px", right: "100px", border: "10px solid green"}}
    />
      </div>
 

    <a href = "https://drive.google.com/file/d/1VSKx2pYx44PIbchwcF8e2--Lo1QZcCDv/view"
    style={{fontSize: "30px",
       textDecoration: "underline",
      position: "absolute", 
      top: "380px",
      left: "25px",
      color: "green"
  }}
    >Resume</a>


    </>

    
  );

}