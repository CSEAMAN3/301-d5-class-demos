import "./Reset.css";
import "./App.css";

import { useState } from "react";

import Parent from "./components/Parent/Parent";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

// import data from "./data.json";

function App() {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
    console.log(showModal);
  }

  function closeModal() {
    setShowModal(false);
    console.log(showModal);
  }

  return (
    <div className="App">
      {/* <h1>Props and State</h1>
      <ul>
        <li>{data[0].name}</li>
        <li>{data[1].name}</li>
        <li>{data[2].name}</li>
      </ul> */}
      <Header openModal={openModal} />
      <Parent />
      {showModal && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default App;
