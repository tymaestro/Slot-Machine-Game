let playerOne = document.getElementById('player1');
let playerTwo = document.getElementById('player2');
let playerThree = document.getElementById('player3');
let computerOne = document.getElementById('computer1');
let computerTwo = document.getElementById('computer2');
let computerThree = document.getElementById('computer3');

function numbers() {
    let num1 = Math.floor(Math.random() * 3);
    let num2 = Math.floor(Math.random() * 3);
    let num3 = Math.floor(Math.random() * 3);
    let num4 = Math.floor(Math.random() * 3);
    let num5 = Math.floor(Math.random() * 3);
    let num6 = Math.floor(Math.random() * 3);

    playerOne.innerText = num1;
	playerTwo.innerText = num2;
	playerThree.innerText = num3;
	computerOne.innerText = num4;
	computerTwo.innerText = num5;
	computerThree.innerText = num6;
}