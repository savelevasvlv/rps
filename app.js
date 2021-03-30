//storing for future using
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_score");
const scoreBoard_div = document.querySelector(".score_board");
const results_p = document.querySelector(".results > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(user, computer) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    results_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${(smallComputerWord)}. You win!`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function() {document.getElementById(user).classList.remove('green-glow') }, 300 );
}

function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    results_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses ${convertToWord(computer)}${(smallComputerWord)}. You lost...!`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 300 );
}

function draw(user, computer) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    results_p.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(computer)}${(smallComputerWord)}. Its a draw!`;
    document.getElementById(user).classList.add('yellow-glow');
    setTimeout(() => document.getElementById(user).classList.remove('yellow-glow'), 300 );
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice) {
       case "rs":
       case "pr":
       case "sp":
           win(userChoice, computerChoice);  
           break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice); 
            break;   
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice); 
            break;      

   }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () =>  game("p"));
    scissors_div.addEventListener('click', () => game("s"));  
}
main();

