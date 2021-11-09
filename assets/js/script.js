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
 * Main function to generate a random number for each variable using a for loop.
 * if/else statement used to compare results between player and computer.
 */

function numbers() {
    
    let nums = [];
    let boxes = document.querySelectorAll('.icon');

    for (let i = 0; i < 6; i++) {
        nums[i] = Math.floor(Math.random() * 3) + 1;
        if (nums[i] === 1) {
            boxes[i].className = 'icon fas fa-cat';
        } else if (nums[i] === 2) {
            boxes[i].className = 'icon fas fa-dog';
        } else {
            boxes[i].className = 'icon fas fa-dragon';
        }
    }

    let playerAnswer = nums[0] + nums[1] + nums[2];
    let computerAnswer = nums[3] + nums[4] + nums[5];

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

// Increment score follows the same method as the Love Maths project

function playerScore() {
    let playerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore;
}

function computerScore() {
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
}