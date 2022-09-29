// get element ID from HTML file and set variables for userChoice, computerChoice and result
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice
let computerChoice
let result

//activate the click to button to display the user's choices and then call 2 functions for generating the computer's choice and getting the result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id 
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice();
    getResult();
}))

//2 functions for generating the computer's choice and getting the result

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3) + 1;
    
    switch (randomNumber){
        case 1:
        computerChoice = "Rock";
        console.log(computerChoice) ;
        break;
        case 2:
        computerChoice = "Paper";
        console.log(computerChoice) ;
        break;
        case 3:
        computerChoice = "Scissors";
        console.log(computerChoice) ;
        break;                
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice){
        result = "It's a draw!";
    }
    if (computerChoice === "Rock" && userChoice === "Paper"){
        result = "You Win!";
    }
    if (computerChoice === "Rock" && userChoice === "Scissors"){
        result = "You Lose!";
    }
    if (computerChoice === "Paper" && userChoice === "Rock"){
        result = "You Lose!";
    }
    if (computerChoice === "Paper" && userChoice === "Scissors"){
        result = "You Win!";
    }
    if (computerChoice === "Scissors" && userChoice === "Paper"){
        result = "You Lose!";
    }
    if (computerChoice === "Scissors" && userChoice === "Rock"){
        result = "You Win!";
    }
    resultDisplay.innerHTML = result;

/*
    if (randomNumber === 1){
        computerChoice = "Rock"
    }
    else if (randomNumber === 2){
        computerChoice = "Paper"
    }
    else if (randomNumber === 3)
    */ 
}