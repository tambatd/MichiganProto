// import React, { useEffect, useState } from "react";
// import ProjectMichiganImage from "./Assets/ProjectMichigan.gif";
// import StudioBiwakoImage from "./Assets/StudioBiwako.gif";

// const Intro = () => {
//   useEffect(() => {
//     console.log(ProjectMichiganImage);
//   }, []);

//   const images = [ProjectMichiganImage, StudioBiwakoImage];
//   const [imageIndex, setImageIndex] = useState(0);
//   return <img src={images[imageIndex]} onClick={() => setImageIndex(1)} />;
// };

import React, { useState, useEffect } from "react";
import "./ImageFader.css"; // Import the CSS for styling
import ProjectMichiganImage from "./Assets/ProjectMichigan.gif";
import StudioBiwakoImage from "./Assets/StudioBiwako.gif";

const images = [ProjectMichiganImage, StudioBiwakoImage];

function Intro() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < images.length - 1) {
        setCurrentIndex((currentIndex) => currentIndex + 1);
      } else {
        clearInterval(intervalId); // Stop the interval when the last image is reached
      }
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="image-container">
      {images.map((img, index) => (
        <div
          key={index}
          className={`fade ${index === currentIndex ? "visible" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </div>
  );
}

export default Intro;
