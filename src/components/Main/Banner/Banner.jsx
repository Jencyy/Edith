import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import videoFile from '../../../assets/img/v.mp4'; // Adjust the path if necessary
import './Banner.css';

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="banner">
      <video className="background-video" autoPlay muted loop>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="black-cover"></div>
      <div className="banner-content">
        <h1 className="headline">Accelerate your code with <span className="third-color">AI</span></h1>
        <button className="cta-button" data-aos="zoom-in">Get Started</button>
      </div>
    </div>
  );
};

export default Banner;
