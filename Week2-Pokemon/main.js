// Set up constants for our game
const noOfPokemon = 150;
const noOfCards = 10;
const totalCards = noOfCards * 2;

// this method runs our whole program
async function start()
{// PLayers cards
    let player = [];

    // variables for fetch
    let random, response, data;

    // Get the cards for all players with no duplicates
    while(player.length < totalCards)
    {
        random = Math.floor((Math.random()*noOfPokemon))+1;
        response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`);
        // data is the pokemon
        data = await response.json();

       // If not a duplicate then add it to the cards to play with
        if (!isDuplicate(data,player))
        {
            player.push(data);
        }
    }

    // The computers cards
    let computer = [];

    // give the first 10 cards from player to the computer
    // issue is that the gamePool pop function is not working for some reason
    for(let i=0; i < noOfCards; i++)
    {
        computer.push(player.pop());
    }

    // Test the arrays are actually there
    console.log(player);
    console.log(computer); 


    //we want to pick a pokemon from hand 
// on HTML we want to show the pokemon in player hand
// pick first element for now
let playerPokemon = player[0];
let computerPokemon = computer[0];

//HTML to display the sprite
// use the DOM to change the image
let playerImage = document.getElementById("playerImage");
playerImage.setAttribute("src",playerPokemon.sprites.front_default);

let computerImage = document.getElementById("computerImage");
computerImage.setAttribute("src",computerPokemon.sprites.front_default);

//player and computer names
//player to pick pokemon
    // pokemon 

let playerName = document.getElementById("playerName");
playerName.innerText = playerPokemon.name;
let computerName = document.getElementById("computerName");
computerName.innerText = computerPokemon.name;

// now add stats

// base_experience ( and can add more later)
let playerStat = document.getElementsByClassName("playerStat");
playerStat.innerText = playerPokemon.base_experience;
let computerStat = document.getElementsByClassName("computerStat");
computerStat.innerText = computerPokemon.base_experience;



// compare base exp and higher wins
let outcome = document.getElementById("outcome");

if (playerPokemon.base_experience > computerPokemon.base_experience) 
{
    outcome.innerText = playerPokemon.name +" wins!!"
} else if (playerPokemon.base_experience < computerPokemon.base_experience)
{
    outcome.innerText = computerPokemon.name +" wins!!"
}
else
{
    outcome.innerText = "Draw"
}

// other states
// get all stats as a node list
let playerStats = playerPokemon.stats;
let computerStats = computerPokemon.stats;
console.log(playerStats);


// Player
// HP
let playerHp = document.getElementById("playerHp");
playerHp.innerText = playerStats[0].base_stat;
let computerHp = document.getElementById("computerHp");
computerHp.innerText = computerStats[0].base_stat;
// Attack
let playerAttack = document.getElementById("playerAttack");
playerAttack.innerText = playerStats[1].base_stat;
let computerAttack = document.getElementById("computerAttack");
computerAttack.innerText = computerStats[1].base_stat;

// Defense
let playerDefense = document.getElementById("playerDefense");
playerDefense.innerText = playerStats[2].base_stat;
let computerDefense = document.getElementById("computerDefense");
computerDefense.innerText = computerStats[2].base_stat;

// Special attack
let playerSpecialAttack = document.getElementById("playerSpecialAttack");
playerSpecialAttack.innerText = playerStats[3].base_stat;
let computerSpecialAttack = document.getElementById("computerSpecialAttack");
computerSpecialAttack.innerText = computerStats[3].base_stat;

// Special defense
let playerSpecialDefense = document.getElementById("playerSpecialDefense");
playerSpecialDefense.innerText = playerStats[4].base_stat;
let computerSpecialDefense = document.getElementById("computerSpecialDefense");
computerSpecialDefense.innerText = computerStats[4].base_stat;

// Speed
let playerSpeed = document.getElementById("playerSpeed");
playerSpeed.innerText = playerStats[5].base_stat;
let computerSpeed = document.getElementById("computerSpeed");
computerSpeed.innerText = computerStats[5].base_stat;


// Computer



// close start function brace...


}

// This runs the whole program, everything is started in start()
start();



// checks to see if a pokemon is already in our playing deck
function isDuplicate(pokemon, allPokemon) {
    for (let i = 0; i < allPokemon.length; i++){
        
        if(pokemon.name === allPokemon[i].name)
        {
            // pokemon is already there
            return true;
        }
    }
}

