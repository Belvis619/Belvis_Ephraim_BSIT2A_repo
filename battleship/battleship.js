// VARIABLES DECLARATION

var location1 = 3;
var locatiion2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

//game logic

//while loop starting point
while (isSunk == false) {
    guess = prompt("Ready to shoot! (Enter Number 0-6");
    // (|| = or)
    if (guess <0 || guess >6){
        alert("Please enter a valid number!")
    }
    else{
        guesses = guesses + 1;

        if(guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("HIT!")

            if (hits == 3) {
                isSunk = true;
                alert("Battleship sank!!!")
            }
        }
    }

}

//end of the loop

var stats = "You sank the battleship at: " + guesses + "guesses" + "with the accuracy of: " + (3 / guesses);

alert(stats);