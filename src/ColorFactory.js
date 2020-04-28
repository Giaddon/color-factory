import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * States:
 *   colors: all of the colors (array).
 */

function ColorFactory({ colorsList }) {

  return (
    <div>
      <h2>This is the color factory.</h2>
      <Link to="/colors/new">Add a color.</Link>
      <ul>
        {colorsList.map(color => 
          <li key={color.value}><Link to={`/colors/${color.value}`}>{color.name}</Link></li>)}
      </ul>
    </div>
  );
}

export default ColorFactory;