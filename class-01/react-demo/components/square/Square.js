import React from "react";

import "./Square.css";

export default function Square({ num }) {
  return (
    <div className="square">
      <p>{num}</p>
    </div>
  );
}
