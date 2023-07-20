import { useState } from "react";
import "./App.css";

import Header from "./Header";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
  });

  function handleFormData(event) {
    setFormData((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
    console.log(formData);
  }

  function handleForm(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="App">
      <Header />
      <form onSubmit={handleForm}>
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" onChange={handleFormData} />
        <label htmlFor="dob">Date of Birth</label>
        <input type="date" id="dob" name="dob" onChange={handleFormData} />
        <button type="submit">Submit</button>
      </form>
      <div className="container">
        <h1>{formData.name}</h1>
        <p>{formData.dob}</p>
      </div>
    </div>
  );
}

export default App;
