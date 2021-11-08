// Variables declaration section

let playerOne = document.getElementById('player1');
let playerTwo = document.getElementById('player2');
let playerThree = document.getElementById('player3');
let computerOne = document.getElementById('computer1');
let computerTwo = document.getElementById('computer2');
let computerThree = document.getElementById('computer3');

// let buttons = document.getElementsByClassName('num-button');

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
    // let num1 = Math.floor(Math.random() * 3) + 1;
    // let num2 = Math.floor(Math.random() * 3) + 1;
    // let num3 = Math.floor(Math.random() * 3) + 1;
    // let num4 = Math.floor(Math.random() * 3) + 1;
    // let num5 = Math.floor(Math.random() * 3) + 1;
    // let num6 = Math.floor(Math.random() * 3) + 1;

    let nums = [];
    for (let i = 0; i < 6; i++) {
        nums[i] = Math.floor(Math.random() * 3) + 1;
    }

    let playerAnswer = nums[0] + nums[1] + nums[2];
    let computerAnswer = nums[3] + nums[4] + nums[5];

    // playerOne.innerText = nums[0];
	// playerTwo.innerText = nums[1];
	// playerThree.innerText = nums[2];
	// computerOne.innerText = nums[3];
	// computerTwo.innerText = nums[4];
	// computerThree.innerText = nums[5];

    if (playerAnswer > computerAnswer) {
        playerWin();
        playerScore();
    } else if (playerAnswer === computerAnswer) {
        draw();
    } else {
        computerWin();
        computerScore();
    }

    playerOne.innerText = nums[0];
	playerTwo.innerText = nums[1];
	playerThree.innerText = nums[2];
	computerOne.innerText = nums[3];
	computerTwo.innerText = nums[4];
	computerThree.innerText = nums[5];

    let chars = [];

    for (let i = 0; i < 6; i++) {
        chars[i] = replaceFunctions(nums[i]);
    }
    console.log(chars);
}

function replaceFunctions(num) {
    switch (num) {
        case 1:
            // return '<i class="fas fa-cat"></i>';
            // return '\uf6d3';
        case 2:
            // return '<i class="fas fa-dog"></i>';
            // return 'uf6be';
        case 3:
            // return '<i class="fas fa-dragon"></i>';
            // return 'uf6d5';
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