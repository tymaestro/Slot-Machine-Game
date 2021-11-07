// Variables declaration section

let playerOne = document.getElementById('player1');
let playerTwo = document.getElementById('player2');
let playerThree = document.getElementById('player3');
let computerOne = document.getElementById('computer1');
let computerTwo = document.getElementById('computer2');
let computerThree = document.getElementById('computer3');
let playerAnswer = playerOne + playerTwo + playerThree;
let computerAnswer = computerOne + computerTwo + computerThree;

// Random number generator function and output to HTML

function numbers() {
    let num1 = Math.floor(Math.random() * 3) + 1;
    let num2 = Math.floor(Math.random() * 3) + 1;
    let num3 = Math.floor(Math.random() * 3) + 1;
    let num4 = Math.floor(Math.random() * 3) + 1;
    let num5 = Math.floor(Math.random() * 3) + 1;
    let num6 = Math.floor(Math.random() * 3) + 1;

    playerOne.innerText = num1;
	playerTwo.innerText = num2;
	playerThree.innerText = num3;
	computerOne.innerText = num4;
	computerTwo.innerText = num5;
	computerThree.innerText = num6;
}

// Check answer function and alert

function check() {
    if (playerAnswer === computerAnswer) {
        alert("Congratulations! You're a winner!");
    } else {
        alert("Sorry, better luck next time!");
    }
}

// Score section