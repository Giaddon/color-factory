import React from "react";
import { Link } from "react-router-dom";


function ColorPage({ color }) {
  const style = {
    height: "100vh",
    width: "100vw",
    backgroundColor: `#${color.value}`,
    textalign: "center",
    color: "#fff",
    
  };

  const noMargins = {
    margin: "0",
  }

  return (
    <div style={style}>
      <h3 style={noMargins}>This is {color.name}</h3>
      <Link to="/">Back to the factory.</Link> 
    </div>
  )

}

export default ColorPage;