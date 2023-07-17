import React from "react";
import "./Grid.css";

import Row from "../row/Row";

export default function Grid() {
  return (
    <div className="grid-div">
      <Row startNum={1} />
      <Row startNum={4} />
      <Row startNum={7} />
      {/* <div className="grid-box"></div>
      <div className="grid-box"></div>
      <div className="grid-box"></div>
      <div className="grid-box"></div>
      <div className="grid-box"></div>
      <div className="grid-box"></div>
      <div className="grid-box"></div>
      <div className="grid-box"></div>
      <div className="grid-box"></div> */}
    </div>
  );
}
