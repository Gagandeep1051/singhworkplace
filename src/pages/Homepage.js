import React from "react";
import { FaUniversity } from 'react-icons/fa';
import { BsLinkedin, BsCodeSlash } from 'react-icons/bs';

import { TbCertificate } from 'react-icons/tb';
import { SiJava } from 'react-icons/si';





//swiper imports 
// import SwiperCore, { Autoplay, EffectCoverflow } from "swiper";
// import { Swiper, SwiperSlide } from 'swiper/react';


// import { Virtual } from 'swiper';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


//swiper css
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import './Homepage.css';




//swiper images. 

// import pic2 from "../photo/pic2.png";
// import video1 from "../photo/Walkthrough4.gif";
// import websitepic from "../photo/Website.png";
// import chalkboardgif from "../photo/Chalkboard.gif"
// import background from "../photo/HomePage-background.jpg"

// SwiperCore.use([EffectCoverflow, Pagination]);


const Homepage = () =>(
  <div>
    <div className="home-container">
        <img className="background-img" alt="" />
        <div className="title">
          <h1>Singh's WorkPlace<span>Web developer</span></h1>
          </div>
    </div>
    

    <div>
      <h1 className="container-Certifications">Certifications</h1>
      <div className="all-cert">
        <div>
          <div className="Link-cert-icon"><TbCertificate /></div> 
          <p className="Link-cert"><strong>Linkedin Certifications</strong></p>
                             
                      <div className="Link-cert-list">
                          <h6>CSS Essential Training.</h6>
                          <h6>JavaScript Essential Training.</h6>
                          <h6>Vanilla JavaScript: Ajax and Fetch.</h6>
                          <h6>Learning Responsive Web Design in the Browser.</h6>
                          <h6>Networking Foundations: Networking Basics.</h6>
                          <h6>Learning Full-Stack JavaScript Development: MongoDB, Node, and React.</h6>
                          <h6>Programming Foundations: Web Security.</h6>
                          <h6>Networking Foundations: Protocols and CLI Tools.</h6>
                          <h6>Databases for Node.js Developers.</h6>
                          <h6>Building a Website with Node.js and Express.js.</h6>
                        
                        
                      </div>
                        
                </div>
                
                <div>
                  <p className="codepath-title"><strong>CodePath.org </strong> </p>
                  <div className="Link-cert-icon"><SiJava /></div> 
                  <p className="para">I learned to develop Android apps in Java. I developed SimpleToDo, 
                    Flixter, Twitter and Instagram. 
                    I learned to Use APi, XML, used persistent and recycler view to display data, 
                  </p>
                </div>
         


          
            
            <div >
              <p className="codepath-title"><strong>Hackathon</strong></p>
              <div className="Link-cert-icon"><BsCodeSlash /></div> 
              
              <p className="para">Park Out is a user-friendly website/application which allows
               any user the ability to find an available parking spot near their location using 
               the enlisted parking spots. This is done so by the opposing user who has reserved 
               a parking spot for the arriving user.</p>
            </div>
    
          </div>
          
    </div>

    <div className="container-eduction">
      <h1>Education</h1>
          <div class="col-md-4"><i className="UniversityIcon"><FaUniversity /></i><br></br>
            <p><strong>Queens College, CUNY</strong></p>
            <p>Development in different activities like Flash animations, Flash games, websites, logos, corporate image design, validations in php and js. </p>
          </div>
    </div>
  
    </div>
    


)

export default Homepage;



// I created a swiper but later delete it. the css is still avaiable in the css folder.





{/* <h1 id="Hometitle">Projects</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        effect={"coverflow"}
        grabCursor={true}
        navigation
        scrollbar={{ draggable: true }}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper">

              {/* style={{ height:550, width: 550,  alignItems: "center",}} */}
        {/* <SwiperSlide>
          <img style={{ height: 550}} src={chalkboardgif} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src={websitepic} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src={pic2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img   src={video1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
        </SwiperSlide>
      </Swiper> */}