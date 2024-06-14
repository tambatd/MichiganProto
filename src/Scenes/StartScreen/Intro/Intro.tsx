import React, { useState, useEffect } from "react";
import "./ImageFader.css";
import ProjectMichiganImage from "./Assets/ProjectMichigan.gif";
import StudioBiwakoImage from "./Assets/StudioBiwako.gif";
import BlankImage from "./Assets/blank.png";

const images = [BlankImage, ProjectMichiganImage, StudioBiwakoImage];

function Intro() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < images.length) {
        setCurrentIndex((currentIndex) => currentIndex + 1);
      } else {
        console.log("End Intro and move to Menu");
        clearInterval(intervalId); // Stop the interval when the last image is reached
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex]);

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
