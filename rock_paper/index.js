let humanScore = 0;
let computerScore = 0;
const human_view = document.querySelector('#human');
const score_view = document.querySelector('#score')

const human_content = document.createElement('div');
human_content.setAttribute("id", "human_content");

const winner = document.querySelector('#winner');



weakness_dict = {
    "rock" : "paper",
    "paper" : "scissors",
    "scissors" : "rock"

}


function getComputerChoice() {
    let ran = Math.random();
    if(ran < 0.34){
        return "rock";
    } else if(ran < 0.67) {
        return "paper";
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    return prompt().toLowerCase();
}



function playRound(humanChoice, computerChoice) {
    
    if(humanScore == 5 || computerScore == 5) {
        humanScore = 0;
        computerScore = 0;
        score_view.textContent = ""
        winner.textContent = "";
        human_content.textContent = "";

    }

    
    if(humanChoice == weakness_dict[computerChoice]) {
        humanScore++;
        console.log("You win, " + humanChoice[0].toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice[0].toUpperCase() + computerChoice.slice(1));
        human_content.textContent = "You win, " + humanChoice[0].toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice[0].toUpperCase() + computerChoice.slice(1);
        human_view.append(human_content)

    } else if(computerChoice == weakness_dict[humanChoice]) {
        computerScore++;
        console.log("You lose, " + computerChoice[0].toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice[0].toUpperCase() + humanChoice.slice(1));
        human_content.textContent = "You lose, " + computerChoice[0].toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice[0].toUpperCase() + humanChoice.slice(1);
        human_view.append(human_content)


    } else {
        console.log("Tie");
         human_content.textContent = "TIE, " + computerChoice[0].toUpperCase() + computerChoice.slice(1) + " ties " + humanChoice[0].toUpperCase() + humanChoice.slice(1);
    }

    score_view.textContent = "HUMAN: " + humanScore +  "     COMPUTER: " + computerScore;

    if(humanScore == 5) {
        winner.textContent = "YOU ARE THE WINNER AFTER 5 ROUNDS";
    }

    if(computerScore == 5) {
        winner.textContent = "YOU LOSE AFTER 5 ROUNDS";
    }
}

/*
function playGame() {
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
}

//console.log(getComputerChoice());
//console.log(getHumanChoice()); 

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection); */


