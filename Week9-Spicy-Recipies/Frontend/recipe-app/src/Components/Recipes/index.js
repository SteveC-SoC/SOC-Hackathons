import React, {useState, useEffect} from "react";
import "../App/App.css";

function Recipe({id}){
    const[Recipe,setRecipe]= useState("Spice up your meal");
    const [Method, setMethod] = useState("Spice up your meal")
    const [Author, setAuthor] = useState("Spice up your meal")
    const [Time, setTime] = useState("Spice up your meal")
    
    useEffect(() => {
        getRecipe();
}, [id]);

async function getRecipe(){
    let res = await fetch (`http://localhost:5000/recipes/${id}`);
    let data = await res.json();
    console.log(data);
    setRecipe(data.title)
    setMethod(data.method)
    setAuthor(data.author)
    setTime(data.timeTaken)
}
 


    return (
        <div >
            <ul>
           <li> {Recipe} </li>
           <li>{Method} </li> 
            {/* {Author} */}
           <li> {Time} hours to make</li>
            </ul>
        </div>
    )
}

export default Recipe;