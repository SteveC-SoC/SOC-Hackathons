import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import StarRatingMod from "../StarRating";
import SubmitButton from "../Button";
import Heading from "../Heading";

function App() {
  const [rating, setRating] = useState("")

  function handleClick() {
    let rand = Math.floor(Math.random() * 6);
    if (rand === 1) {
      setRating("boo");
      // console.log("boo");
    } else if (rand === 2) {
      setRating("we can do better");
    } else if (rand === 3) {
      setRating("you're just being lazy");
    } else if (rand === 4) {
      setRating("almost perfect");
    } else {
      setRating("We're the best");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Heading title={"Random React Comments"} />
        <img src={logo} className="App-logo" alt="logo" />
        <StarRatingMod />
        <SubmitButton handleClick={handleClick} name={"Rate It!"} />
        <span>{rating}</span>

        {/* Can we run handleCLick here? */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
}

export default App;
