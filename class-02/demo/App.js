import "./Reset.css";
import "./App.css";

import Parent from "./components/Parent/Parent";

import data from "./data.json";

function App() {
  return (
    <div className="App">
      <ul>
        <li>{data[0].name}</li>
        <li>{data[1].name}</li>
        <li>{data[2].name}</li>
      </ul>
      <h1>Props and State</h1>
      <Parent />
    </div>
  );
}

export default App;
