import React from "react";
import "./Modal.css";

export default function Modal({ closeModal }) {
  return (
    <div className="modal">
      <div className="modal-container">
        <h2>All time top 10</h2>
        <p>Life lessons from bob!</p>
        <ul>
          <li>Accept that nothing is permanent</li>
          <li>Understand that change is the law of nature</li>
          <li>Practise tolerance and forgiveness</li>
          <li>You become what you believe in yourself</li>
          <li>Change the way you think</li>
          <li>Stay calm</li>
          <li>Work for the welfare of the world</li>
          <li>Be fearless</li>
          <li>Manage your anger</li>
          <li>Dream big</li>
        </ul>
        <span className="modal-button" onClick={closeModal}>
          X
        </span>
      </div>
    </div>
  );
}
