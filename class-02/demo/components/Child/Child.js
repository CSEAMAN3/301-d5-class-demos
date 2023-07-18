import React from "react";

import "./Child.css";

// You only need to import this on the final way of rendering the image onto the page.
import Boy from "../../assets/boy.jpg";

export default function Child({ name, pats, handleBobsPats }) {
  return (
    <div>
      <h2>{name}</h2>
      {/* <img src="../../assets/boy.jpg" alt="boy" /> */}
      {/* the above line will error but start with this to show how images work */}
      {/* <img src={require("../../assets/boy.jpg")} alt="Bob" /> */}
      <img onClick={() => handleBobsPats()} src={Boy} alt="boy" />
      <span>Number of pats on Bobs head: {pats}</span>
    </div>
  );
}
