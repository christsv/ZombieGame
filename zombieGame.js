// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt. 

// ===========================================================================================================

var inquirer = require('inquirer');
var user = 60;
var zombie = 15;


function playRound(){

    inquirer.prompt([
        {
            message:"Try to stay alive, guess a number between 1-5",
            type: "list",
            choices: [1,2,3,4,5],
            name: "choice"

        }
    ])
    .then(function(response){
        var zombieRandom = Math.floor(Math.random() * 5) + 1;
        if(response.choice == zombieRandom) {
            var damage = Math.floor(Math.random() * 5) + 1;
            zombie = zombie - damage;
            console.log("Zombie Number was: " + zombieRandom + " you guessed correctly!");
            console.log("Zombie has this health: " + zombie);
            console.log("=============================");
            if(zombie <= 0){ 
                console.log("You defeated the Zombie! You Win!")
                console.log("=============================");
                // this exists the game
                process.exit();
            }
            else{
                playRound();
            }
        }
        if(response.choice != zombieRandom) {
            var damage = Math.floor(Math.random() * 5) + 1;
            user = user - damage;
            console.log("User number was incorrect. The correct number was: " + zombieRandom);
            console.log("User has this health: " + user);
            console.log("=============================");
            if(user <= 0) {
                console.log("You have no health. You Lose!")
                console.log("=============================");
                process.exit();
            }
            else{
                playRound();
            }
        }

    })
}

playRound();