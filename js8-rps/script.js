let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // your code here!

    if (humanChoice == 'rock'){
        if(computerChoice == 'scissor'){
            console.log("You wins this round!")
            humanScore++;
        }else if(computerChoice == 'paper'){
            console.log("Computer wins this round!")
            computerScore++;
        }else{
            console.log("Game is draw")
        }
    }else if (humanChoice == 'paper'){
        if(computerChoice == 'scissor'){
            console.log("Computer wins this round!")
            computerScore++;
        }else if(computerChoice == 'rock'){
            console.log("You wins this round!")
            humanScore++;
        }else{
            console.log("Game is draw")
        }
    }else if (humanChoice == 'scissor'){
        if(computerChoice == 'rock'){
            console.log("Computer wins this round!")
            computerScore++;
        }else if(computerChoice == 'paper'){
            console.log("You wins this round!")
            humanScore++;
        }else{
            console.log("Game is draw")
        }
    }

  }

  function playgame(){


    for(let i = 0; i < 5; i++ ){
        const humanSelection = getHumanChoice();
        console.log(humanSelection);
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        playRound(humanSelection, computerSelection);
        console.log("you: " + humanScore);
        console.log("com: " + computerScore);
    }

    if (+ humanScore > + computerScore){
        console.log("You win")
    }else if(+ computerScore > + humanScore){
        console.log("Computer win")
    }else{
        console.log("Draw")
    }

    
  }

  
  function getHumanChoice(){
    let ask = prompt("Enter your choice -> rock, paper or scissor: ").toLowerCase();
    return ask
  }

  function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissor'];
    let result = choices[Math.floor(Math.random() * (3 - 0) + 0)];
    return result;
  }
  

  playgame();


 