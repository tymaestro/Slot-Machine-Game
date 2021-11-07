// Variables declaration section

let playerOne = document.getElementById('player1');
let playerTwo = document.getElementById('player2');
let playerThree = document.getElementById('player3');
let computerOne = document.getElementById('computer1');
let computerTwo = document.getElementById('computer2');
let computerThree = document.getElementById('computer3');

// Random number generator function and output to HTML

function playerWin() {
    setTimeout(function(){alert("Congratulations! You're a winner!");}, 100);
}

function computerWin() {
    setTimeout(function(){alert("Sorry, better luck next time!");}, 100);
}

function draw() {
    setTimeout(function(){alert("It's a draw!");}, 100);
}

function numbers() {
    let num1 = Math.floor(Math.random() * 3) + 1;
    let num2 = Math.floor(Math.random() * 3) + 1;
    let num3 = Math.floor(Math.random() * 3) + 1;
    let num4 = Math.floor(Math.random() * 3) + 1;
    let num5 = Math.floor(Math.random() * 3) + 1;
    let num6 = Math.floor(Math.random() * 3) + 1;

    // let num1, num2, num3, num4, num5, num6
    // for (let i = 0; i < 7; i++) {
    //     num[i] = Math.floor(Math.random() * 3) + 1;
    // }

    let playerAnswer = num1 + num2 + num3;
    let computerAnswer = num4 + num5 + num6;

    playerOne.innerText = num1;
	playerTwo.innerText = num2;
	playerThree.innerText = num3;
	computerOne.innerText = num4;
	computerTwo.innerText = num5;
	computerThree.innerText = num6;

    // num1 = playerOne.innerHTML;

    if (playerAnswer > computerAnswer) {
        playerWin();
        playerScore();
    } else if (playerAnswer === computerAnswer) {
        draw();
    } else {
        computerWin();
        computerScore();
    }
}

// Check answer function and alert



// Score section

function playerScore() {
    let playerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore;
}

function computerScore() {
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
}