console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3"); // Sound for Win
let audioTurn = new Audio("game.mp3"); // Sound for Turn
let gameover = new Audio("gameover.mp3"); // Sound for Draw
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Function to show pop-up message
const showPopupMessage = (message) => {
    let popup = document.createElement("div");
    popup.innerText = message;
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, +170%)";
    popup.style.backgroundColor = "black";
    popup.style.color = "white";
    popup.style.padding = "20px";
    popup.style.fontSize = "20px";
    popup.style.borderRadius = "10px";
    popup.style.zIndex = "1000";
    document.body.appendChild(popup);

    // Remove the message after 3 seconds
    setTimeout(() => {
        popup.remove();
    }, 3000);
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];

    wins.forEach(e => {
        if (
            (boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "")
        ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won!";
            isgameover = true;

            // Play winning sound
            music.play();

            // Show win pop-up
            showPopupMessage(boxtext[e[0]].innerText + " Wins! HaHa");

            // Show winning animation
            document.querySelector('.imgbox img').style.width = "200px";
            document.querySelector(".line").style.width = '20vw';
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    });

    // Check for a draw (only if there is NO winner)
    if (!isgameover) {
        let isDraw = Array.from(boxtext).every(element => element.innerText !== "");

        if (isDraw) {
            isgameover = true;

            // Play game over sound
            gameover.play();

            // Show game over pop-up
            showPopupMessage("Game Over! It's a Draw!");

            document.querySelector('.info').innerText = "Game Over!";
        }
    }
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isgameover) {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});

// Reset Game
document.getElementById("reset").addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });

    turn = "X";
    isgameover = false;
    document.querySelector(".line").style.width = '0vw';
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox img').style.width = "0px";

    // Stop any playing music
    music.pause();
    music.currentTime = 0;
    gameover.pause();
    gameover.currentTime = 0;
});


