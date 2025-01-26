"use client"
import "./Hero.css";

const Hero = () => {
  const handleButtonClick = () => {

    console.log("Get Started button clicked!");
  };

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-title">
            Care You Can Trust,
            <h1 className="block mt-2"> Support You Deserve!</h1>
          </span>
          <p className="hero-subtitle">
            At <span className= "blue-color">Care Just 4U</span> , we provide compassionate
            and professional care tailored to meet your needs or those of your
            loved ones.Whether it's a helping hand, a listening ear, or
            personalized support, our dedicated team is here to make a
            difference in your daily life. Because with us, it's more than just
            care—it's family
          </p>
          <div className="hero-actions">
            <button className="default-button" onClick={handleButtonClick}>
              Get Started
            </button>
            <img
              src="play-button-green-icon.png"
              alt="play-icon"
              className="play-icon" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
