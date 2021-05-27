function computerPlay(){
    //Generates a random number from 1 to 3
    randomInt =  Math.floor(Math.random() * 3) + 1;

    //Assigns randomly generated number to a rock, paper or scissors value
    if (randomInt == 1){
        return "rock";
    }else if(randomInt == 2){
        return "paper";
    }else if(randomInt == 3){
        return "scissors";
    }
}
function playRound(playerSelection){
    
    var computerSelection = computerPlay();
    compPlay.innerText = computerSelection;

    if(playerSelection == "rock"){
        if (computerSelection == "paper"){
            losses++;
            lossCount.textContent = losses; 
        }else if (computerSelection == "scissors"){
            wins++;
            winCount.textContent = wins;
        }
    }
    if(playerSelection == "paper"){
        if (computerSelection == "rock"){
            wins++;
            winCount.textContent = wins;
        }else if (computerSelection == "scissors"){
            losses++;
            lossCount.textContent = losses;
        }
    }
    if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            losses++;
            lossCount.textContent = losses;
        }else if (computerSelection == "paper"){
            wins++;
            winCount.textContent = wins;
        }
    }
    if (wins >= 5){
        wins = 0;
        winCount.textContent = wins;
        losses = 0;
        lossCount.textContent = losses;
        alert("You win!");
    }else if (losses >= 5){
        wins = 0;
        winCount.textContent = wins;
        losses = 0;
        lossCount.textContent = losses;
        alert("You lose!");
    }
}
let wins = 0;
let losses = 0;

const winCount = document.getElementById("winCount");
winCount.textContent = wins;
const lossCount = document.getElementById("lossCount");
lossCount.textContent = losses;

const compPlay = document.getElementById("compPlay");

const rockBtn = document.getElementById("rockBtn");
rockBtn.addEventListener("click", () => playRound("rock"));

const paperBtn = document.getElementById("paperBtn");
paperBtn.addEventListener("click", () => playRound("paper"));

const scissorsBtn = document.getElementById("scissorsBtn");
scissorsBtn.addEventListener("click", () => playRound("scissors"));


