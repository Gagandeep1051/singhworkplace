import React from "react";
import Kingscollege from "../photo/pic1.png";
import Freecodecamp from "../photo/pic2.png";
import websitepic from "../photo/Website.png"
import flixter from "../photo/flixter.png"
import insta from "../photo/insta.png"
import parkout from "../photo/Parkout.png"
import simpletodo from "../photo/simpletodo.png"
import twitter from "../photo/twitter.png"




const Projectlist = () =>{
    return (
        <div>
            <h1> Projects List </h1>
            {/* <img id="Project-1"  src={pic1} alt="" /> */}

            <div className="Project-1-card">
                <h5>Singh's WorkPlace</h5>
                <h6>(React.js, Node.js, Express.js, Local MongoDB)</h6>
                <img id="Project-1"  src={websitepic} alt="" />

                <p className="Description-1">
                    <li>Designed a full, Client-side and server-side, website to showcase my projects,
                         show my frontend skills in css and animation.</li>
                    <li>Implemented Local mongoDb for users to like and comment on the Riddles
                        and articles.</li>
                    <li>Created an react interface by designing user-friendly forms</li>
                    <li>Full-stack development</li>
                    <a href="" className="bttnLive">Current</a> 
                    <a href="https://github.com/Gursharn/Chalk" target={"_blank"} className="bttnGithub">Github</a> 
                </p>

            </div>
            <div className="Project-1-card">
                <h5>Parkout</h5><p>#HACKATHON</p>
                <h6>(React.js, Node.js, Express.js, Local MongoDB)</h6>
                <img id="Project-1"  src={parkout} alt="" />
                
                <p className="Description-1">
                    <li>Park Out is a user-friendly website/application which allows any user the
                         ability to find an available parking spot near their location using the 
                         enlisted parking spots. This is done so by the opposing user who has reserved 
                         a parking spot for the arriving user.</li>
                         <li>More details and links coming soon</li>
                    <a href="https://devpost.com/software/park-out" target={"_blank"} className="bttnLive">Live demo</a> 
                    <a href="" target={"_blank"} className="bttnGithub">Comingsoon</a> 
                </p>

            </div>

            


            <div className="Project-1-card">
                <h5>Kings college Chalkboard</h5>
                <h6>(HTML,CSS,Node.js, Express, MongoDB)</h6>
                <img id="Project-1"  src={Kingscollege} alt="" />

                

                <p className="Description-1">
                    <li>Designed a full, Client-side and server-side, website to support
                         distance-remote learning for Students and Professors.</li>
                    <li>Integrating user authentication with Passport on the backend and
                         Node.js Router on the frontend to persist login with session cookies.</li>
                    <li>Implemented MySQL workbench to store all the user data.</li>
                    <a href="https://chalk-1.gagandeepsingh9.repl.co/login" target={"_blank"} className="bttnLive">Live</a> 
                    <a href="https://github.com/Gursharn/Chalk" target={"_blank"} className="bttnGithub">Github</a> 
                </p>

            </div>



            <div className="Project-1-card">
                <h5>Free CodeCamp Projects </h5>
                <h6>(HTML,CSS, Github pages)</h6>
                <img id="Project-1"  src={Freecodecamp} alt="" />

                

                <p className="Description-1">
                    <li>Worked on 10+ mini projects on Codecamp to improve skills.</li>
                    <li>Learned how to implement mongodb into projects, Node.js, express.js, 
                        Headerparser, Urlshortener, File Metadata Microservice
                    </li>
                    <li>Development in different activities like HTML new pages, CSS decorations
                         & best practices, JS from learning to programming OOP. Algorithms for 
                         programming and Anothers.</li>
                    <a href="https://course-dashboard.gagandeepsingh9.repl.co" target={"_blank"} className="bttnLive">Live</a> 
                    <a href="https://github.com/Gagandeep1051/SinghGagandeep355" target={"_blank"}   className="bttnGithub">Github</a> 
                </p>

            </div>


            <div className="Project-1-card">
                <h5>Simple ToDo</h5>
                <h6>(Java)</h6>
                <img id="Project-1"  src={simpletodo}  alt="" />

                <p className="Description-1">
                    <li>Designed an android app using Java and XML</li>
                    <li>User can Add/remove items from a list</li>
                    <li>Used persistent and recycler view to display data.</li>
                    <a href="https://github.com/Gagandeep1051/SimpleToDo/blob/master/Walkthrough4.gif" target={"_blank"}  className="bttnLive">Live</a> 
                    <a href="https://github.com/Gagandeep1051/SimpleToDo" target={"_blank"} className="bttnGithub">Github</a> 
                </p>

            </div>


            <div className="Project-1-card">
                <h5>Flixter</h5>
                <h6>(Java)</h6>
                <img id="Project-1"  src={flixter} alt="" />

                <p className="Description-1">
                    <li>Designed an Android app using Java, XML and APi</li>
                    <li>User can view all the movies currently playing in the theaters</li>
                    <li>Implemented Youtube APi to show the movie trailer of the user choice</li>
                    <a href="https://github.com/Gagandeep1051/Flixter/blob/master/FlixterWalkthrough1.gif" target={"_blank"}  className="bttnLive">Live</a> 
                    <a href="https://github.com/Gagandeep1051/Flixter" target={"_blank"} className="bttnGithub">Github</a> 
                </p>

            </div>
            <div className="Project-1-card">
                <h5>Twitter clone</h5>
                <h6>(Java)</h6>
                <img id="Project-1"  src={twitter} alt="" />

                <p className="Description-1">
                    <li>Designed an Android app using Java, XML and APi</li>
                    <li>Implemented Twitter APi</li>
                    <li>User can Post, edit, remove tweet from their accounts</li>
                    <a href="https://github.com/Gagandeep1051/SimpleTwitter-2/blob/master/walkthroughTwitter.gif" target={"_blank"}  className="bttnLive">Live</a> 
                    <a href="https://github.com/Gagandeep1051/SimpleTwitter-2" target={"_blank"} className="bttnGithub">Github</a> 
                </p>

            </div>
            <div className="Project-1-card">
                <h5>Instagram clone</h5>
                <h6>(Java)</h6>
                <img id="Project-1"  src={insta} alt="" />

                <p className="Description-1">
                    <li>Designed an Android app using Java, XML and APi</li>
                    <li>Implemented Instagram APi</li>
                    <li>User can Post, edit, remove Post from their accounts</li>
                    <li>Users can use the device camera to take pictures.</li>
                    <a href="https://github.com/Gagandeep1051/Instagram/blob/master/walkthroughTwitter.gif" target={"_blank"}  className="bttnLive">Live</a> 
                    <a href="https://github.com/Gagandeep1051/Instagram" target={"_blank"} className="bttnGithub">Github</a> 
                </p>

            </div>

            
            


            <div className="fire">
                <div className="fire-left"> 
                    <div className="main-fire"></div>
                    <div className="particle-fire"></div>
                </div>

            <div className="fire-center">
                <div className="main-fire"></div>
                <div className="particle-fire"></div>
            </div>

            <div className="fire-right">
                <div className="main-fire"></div>
                <div className="particle-fire"></div>
            </div>

            <div className="fire-bottom">
                <div className="main-fire"></div>
            </div>
        </div>
    </div>

    )
}




export default Projectlist;