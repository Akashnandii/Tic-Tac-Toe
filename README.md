This is a Tic-Tac-toe Game. Which we all played in childhood and loved to play.

I have used HTML, CSS & Javascripts in this project and I will describe each of them in details.

HTML:

In html, first I used boiler plate & gave the title there and linked my CSS & created a navbar in the body and I created a div with UL and LI inside the div.
Then I made a game container div, and inside that div I made more divs so that I could play the game through the divs.And during those divs I attached classes like(class="box bt-0 bl-0", class="box bt-0",class="box bb-0 br-0") for positoning the game structure. 
Then I created another div with the name of the gameInfo class, in which I wrote the heading of my game, [Welcome to Tic-Tac-Toe], using the span tag, and created another div with button in it. which is basically reset the game.
I added a funny gif to the game to make it more realistic and funny. 
And linked my JavaScript file at the end.

CSS:

Fonts: Uses the "Roboto" and "Baloo Bhai 2" fonts for a modern and playful look.

Navigation: A dark-themed navigation bar with centered text.

Grid Layout: A responsive grid layout for the game board, adjusting automatically based on screen size.

Box Styling: Each game square (.box) has a border, is clickable, and changes color on hover.

Navigation: A dark navigation bar with a flexible layout for easy alignment.

Game Board: The game board (.container) is set up as a grid with 3x3 squares. Each square adjusts its size based on the viewport.

Hover Effects: Interactive squares (.box) change color when hovered over to provide visual feedback.

Mobile Responsiveness: The grid layout adapts to smaller screens, ensuring the game is playable on mobile devices.The layout adapts for smaller screens (below 950px wide) 
for better usability on mobile devices.

JavaScript:

Variables:
music, audioTurn, gameover: These are Audio objects that store sound files for various actions in the game (win sound, turn sound, and game over sound).
turn: Keeps track of whose turn it is (either "X" or "O").
isgameover: A boolean flag to track whether the game is over.

Functions:
changeTurn(): Switches between "X" and "O" after each turn.
showPopupMessage(message): Displays a pop-up message on the screen for 3 seconds, such as when someone wins or the game ends in a draw.
checkWin(): This function checks if any of the possible winning conditions have been met by comparing the game board’s boxes. If there’s a winner, it:
Displays the winning message.
Plays the winning sound.
Shows a pop-up message indicating the winner.
Animates a line across the winning combination.

Game Logic:
The game board is made up of clickable elements (boxes). When a user clicks on a box, if it's empty and the game isn't over, the current player's symbol ("X" or "O") is placed in the box.
The game alternates turns between "X" and "O". After each move, it checks whether there is a winner using checkWin(). If the board is full and there’s no winner, a draw message is displayed.

Reset Game:
A reset button allows the game to be restarted by clearing the board, resetting the turn to "X", and stopping any playing music. The reset also removes any winning line animation.
