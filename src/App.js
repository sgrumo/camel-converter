import React, { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState("");
  const random = Math.floor(Math.random() * 10) + 1;
  const camelImg = require("./camel.svg");
  const imageArray = Array.from({ length: random }).fill(
    <img src={camelImg} alt="camel" />
  );

  const displayImage = image ? (
    <div className="results-container">
      <img className="princess" src={image} alt="Princess" />
      <h4>Results: </h4>
      <div className="camels-container">{imageArray}</div>
    </div>
  ) : (
    <div className="choose-container">
      <p>How much is your woman worth?</p>
      <div className="input-container">
        <label>
          Choose the bitch:
          <input
            type="file"
            onChange={e => setImage(URL.createObjectURL(e.target.files[0]))}
            accept="image/x-png,image/gif,image/jpeg"
          />
        </label>
      </div>
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <h3>Camel Converter</h3>
      </header>
      {displayImage}
    </div>
  );
}

export default App;
