let humanScore = 0;
let computerScore = 0;
const human_view = document.querySelector('#human');
const computer_view = document.querySelector('#comp');

const human_content = document.createElement('div');
human_content.setAttribute("id", "human_content");

const comp_content = document.createElement('div');
comp_content.setAttribute("id", "comp_content");


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
    if(humanChoice == weakness_dict[computerChoice]) {
        humanScore++;
        console.log("You win, " + humanChoice[0].toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice[0].toUpperCase() + computerChoice.slice(1));
        // human_view.

    } else if(computerChoice == weakness_dict[humanChoice]) {
        computerScore++;
        console.log("You lose, " + computerChoice[0].toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice[0].toUpperCase() + humanChoice.slice(1));


    } else {
        
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

console.log(getComputerChoice());
console.log(getHumanChoice()); */

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);


