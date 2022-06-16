import React from "react";
import './Aboutpage.css';

const AboutPage = () =>(
    <div className="about">
        
          {/* My pfp image card */}
      <div className="container">
                <div className="card card0">
                      <h2>Gagandeep singh</h2>
                </div>
      </div> 


      <h1 id="about1">About me</h1>

         <p id="P1">Hello,
                My name is Gagandeep Singh. I wanted to introduce myself and let you know a
                little bit about myself. I am a current graduate from Queens College with my 
                Bachelor's degree. I am an effective student committed to learning, developing 
                skills in web development and team contribution. I am self-directed and energetic 
                with superior performance in both autonomous or collaborative environments working
                independently and collaborating with others on group projects. I am a good fit for 
                this position because I love to learn and help others learn. I am currently working 
                on learning to develop in React and TypeScript projects.
            </p>

            <p id="P2"> On my last project, I created an application which supported distance-remote learning 
                for students. I used Html, Css, Node.js and Express, and mySql and mongoose db. Users 
                can log in and log out, I integrated user auth using passport to create persistent logins.
            </p>

            <p id="P3">
                
                Last month, I joined a DevPath Hackathon where my team and I were placed first position.
                We created a web app in react and android application in java called Parkout. Park Out is 
                a user-friendly website/application which allows any user the ability to find an available 
                parking spot near their location using the enlisted parking spots. This is done so by the 
                opposing user who has reserved a parking spot for the arriving user.
            </p>

                <h4 id="last-header">And much more coming soon...</h4>

</div>


)

export default AboutPage;