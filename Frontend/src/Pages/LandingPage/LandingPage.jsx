import React, { useState, useEffect } from "react";
import image from "./image.png"

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
    
  };

  
    
  const titleContainerStyle = {
    display: "flex",
    backgroundColor: "transparent",
    padding: "20px",
    margin: "100px",
    marginTop: "300px",
    justifyContent: "center",
    alignItems: "center",
    border: "10px solid #7F7BFB ",
    borderRadius: "30px",
  };
  

  const titleStyle = {
    fontFamily: " sans-serif",
    color: "#3BB4A1",
    fontWeight: 700,
    fontSize: "5.5rem",
    textAlign: "center",
  };

  const contentTitleStyle = {
    textAlign: "center",
    color: "#2d2d2d",
    fontFamily: "Oswald",
    backgroundColor: "#3BB4A1",
    width: "100%",
    fontSize: "4rem",
    fontWeight: 700,
    marginTop: "300px",
  };

  const descriptionStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1.2rem",
    textAlign: "center",
    color: "white",
    maxWidth: "1000px",
    margin: "60px",
  };

  const buttonStyle = {
    backgroundColor: "#3BB4A1",
    color: "white",
    border: "none",
    padding: "12px 24px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const imageStyle = {
    position: "absolute",
    left: `${scrollPosition}px`,
    width: "400px",
    justifyContent: "center",
  };

  const imageBelowStyle = {
    position: "absolute",
    right: `${scrollPosition}px`,
    width: "400px",
    justifyContent: "center",
  };

  const textContainer = {
    textAlign: "center",
    alignItems: "center",
    marginBottom: "40px",
  };

  const handleButtonClick = () => {
    // Handle button click event
    console.log("Button clicked!");
  };

  return (
    <div style={containerStyle}>
      {/* <img src={image} alt="" ></img> */}
        <div style={containerStyle}>
          <div>
          
          <div style={titleContainerStyle}>
            <h1 style={titleStyle}>SKILLSWAP</h1>
          </div>
        </div>
        {/* <img/>   */}
      </div>
      <h2 style={contentTitleStyle}></h2>
      <div id="why-skill-swap" style={textContainer}>
        
      </div>
    </div>
  );
};

export default LandingPage;
