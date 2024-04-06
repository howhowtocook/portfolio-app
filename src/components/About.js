import React from "react";
import sadImage from "../assets/images/happy.png"; // Importing the image

const About = () => {
  return (
    <div className="about">
      <img src={sadImage} alt="Happy Me" />
      <div className="text">
        <p>
          With a background in statistics, I've developed a passion for data
          analysis. I'm also fascinated by computer science and its potential to
          drive innovation.
        </p>
        <p>
          I'm drawn to web development as a way to combine my analytical skills
          with my interest in technology. I believe that creating websites
          allows me to solve real-world problems and make a meaningful impact.
        </p>
        <p>
          My goal is to leverage data-driven insights and cutting-edge
          technology to develop innovative solutions that enhance user
          experiences and address complex challenges.
        </p>
      </div>
    </div>
  );
};

export default About;
