import React, { useState, useEffect } from "react";

// Custom Hook
const  UseCustomhook = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

// Main Component
const App = () => {
  const width = useWindowWidth(); // Using the custom hook

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Custom Hook Example: Window Width</h1>
      <p>Current window width: <strong>{width}px</strong></p>
    </div>
  );
};

export default UseCustomhook;
