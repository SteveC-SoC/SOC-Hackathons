//import "./App.css";
import React, {useState} from "react";
import Recipe from "../Recipes/index";

function App() {
  
  const [id, setId] = useState();

  let randomRecipe = 2;

  function handleClick(){
     randomRecipe= Math.floor(Math.random()*4) + 1; 
     setId(randomRecipe);
     console.log(randomRecipe)
  }
  
  return (
    <div id="App">
      <h1>SPICE UP YOUR LIFE</h1>
      <h2>Make any meal spicey</h2>
      <img src="https://files.slack.com/files-pri/T6L933W4X-F01R19RFE1W/spice_girls__1_.png" width='600px'></img><br/>
    <button id='button' onClick = {(e) => handleClick(e.target.value)}>Get your Recipe</button>
    <Recipe id = {id}/>
    </div>
  );
}

export default App;
