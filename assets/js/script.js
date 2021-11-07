// Variables declaration section

let playerOne = document.getElementById('player1');
let playerTwo = document.getElementById('player2');
let playerThree = document.getElementById('player3');
let computerOne = document.getElementById('computer1');
let computerTwo = document.getElementById('computer2');
let computerThree = document.getElementById('computer3');

// Random number generator function and output to HTML

function numbers() {
    let num1 = Math.floor(Math.random() * 3) + 1;
    let num2 = Math.floor(Math.random() * 3) + 1;
    let num3 = Math.floor(Math.random() * 3) + 1;
    let num4 = Math.floor(Math.random() * 3) + 1;
    let num5 = Math.floor(Math.random() * 3) + 1;
    let num6 = Math.floor(Math.random() * 3) + 1;

    let playerAnswer = num1 + num2 + num3;
    let computerAnswer = num4 + num5 + num6;

    playerOne.innerText = num1;
	playerTwo.innerText = num2;
	playerThree.innerText = num3;
	computerOne.innerText = num4;
	computerTwo.innerText = num5;
	computerThree.innerText = num6;

    if (playerAnswer > computerAnswer) {
        alert("Congratulations! You're a winner!");
    } else if (playerAnswer === computerAnswer) {
        alert("It's a draw!")
    }
        else {
        alert("Sorry, better luck next time!");
    }
}

// Check answer function and alert



// Score section