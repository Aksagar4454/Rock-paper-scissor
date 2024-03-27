let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw, Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin){
        userScore++;
        userscore.innerText = userScore; 
        msg.innerText = "Congrat's You Win!";
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compscore.innerText = compScore;
        msg.innerText = "Oops! You lose.";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // Generate computer choice
    const compChoice = genCompChoice();

    if (userChoice == compChoice) {
        // Draw game
        drawGame();
    }
    else {
        let userwin = true;
        if (userChoice == "rock") {
            // scissor, paper
            userwin = compChoice == "paper" ? false : true;
        }
        else if (userChoice == "paper") {
            //rock, scissor
            userwin = compChoice == "scissor" ? false : true;
        }
        else {
            // rock, paper
            userwin = compChoice == "rock" ? false : true;
        }

        showWinner(userwin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})