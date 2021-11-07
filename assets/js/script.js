// Variables declaration section

let playerOne = document.getElementById('player1');
let playerTwo = document.getElementById('player2');
let playerThree = document.getElementById('player3');
let computerOne = document.getElementById('computer1');
let computerTwo = document.getElementById('computer2');
let computerThree = document.getElementById('computer3');

/**
 * Time delay function for when the player wins so that
 * numbers can generate before alert message is shown
 */

function playerWin() {
    setTimeout(function(){alert("Congratulations! You're a winner!");}, 100);
}

/**
 * Time delay function for when the computer wins so that
 * numbers can generate before alert message is shown
 */

function computerWin() {
    setTimeout(function(){alert("Sorry, better luck next time!");}, 100);
}

/**
 * Time delay function for when it's a draw so that
 * numbers can generate before alert message is shown
 */

function draw() {
    setTimeout(function(){alert("It's a draw!");}, 100);
}

/**
 * Main function to generate a random number for each variable
 */

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

// Score section

function playerScore() {
    let playerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore;
}

function computerScore() {
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
}