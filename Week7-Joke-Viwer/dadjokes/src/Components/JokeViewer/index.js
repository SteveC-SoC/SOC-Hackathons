import React, { useEffect, useReducer } from "react";
import "./index.css";
import useRandomiser from "../../Hooks/useRandomiser";

function reducer(state, action) {
  switch (action.type) {
    case "DAD-JOKES":
      return action.payload;
    default:
      return state;
  }
}

function JokeViewer() {
  const [joke, dispatch] = useReducer(reducer, null);
  const [computerMove, randomise] = useRandomiser("");

  async function getJoke() {
    let result = await fetch(process.env.REACT_APP_API_URL, {
      headers: { accept: "application/json" },
    });
    let data = await result.json();
    dispatch({ type: "DAD-JOKES", payload: data.joke });
  }

  useEffect(() => {
    getJoke();
  }, []);

  function handleClick() {
    getJoke();
  }

  // function compareMove (computerMove){
  //   if (computerMove ===0 ){
  //   return getJoke();}
  //   else {console.log("Trophy")}
  // }

  return (
    <body>
      <div className="App">
        <header className="App-header">
          <h1 data-testid="title"> Do you feel lucky punk?... Well do ya? </h1>
          <div class="row">
            <div class="column">
              <button className="homerButton" onClick={handleClick}>
                Homer
              </button>
              <br/>
              <img
                className="homer"
                src="https://i.pinimg.com/originals/d8/55/9f/d8559f57d2cfcc8db35f032b424f1fe8.gif"
                alt="homer"
              />
              <p className="quote">{joke}</p>
            </div>
            <div class="column">
              <button className="bartButton" onClick={randomise}>
                Bart
              </button>
              <br/>
              <img
                className="bart"
                src="https://thumbs.gfycat.com/PaleFriendlyGoral-max-1mb.gif"
                alt="Bart"
              />
              <p className="quote">{computerMove}</p>
            </div>
          </div>
        </header>
      </div>
    </body>
  );
}

export default JokeViewer;

//click Homer to have a dad joke appear
//bart randomly replies, using the randomizer, using a useEffect
