import React from "react";
import "./Row.css";

import Square from "../square/Square";

export default function Row({ startNum }) {
  return (
    <div className="row-div">
      <Square num={startNum} />
      <Square num={startNum + 1} />
      <Square num={startNum + 2} />
    </div>
  );
}
