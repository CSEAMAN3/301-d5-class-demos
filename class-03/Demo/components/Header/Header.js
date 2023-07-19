import React from "react";
import "./Header.css";

export default function Header({ openModal }) {
  return (
    <header>
      <div className="header-container">
        <h1>Lets learn about Bob!</h1>
        <p className="lessons-button" onClick={openModal}>
          life lessons from Bob
        </p>
      </div>
    </header>
  );
}
