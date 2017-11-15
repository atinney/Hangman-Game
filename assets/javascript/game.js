//left to do:
//make the wrong guesses move a boat towards an iceberg


    $(document).ready(function() {


      //Define the guessable words
      var words = ["ocean","ship","helm","deck","sail","wind","keel","rudder","captain"];
      // var words = ["keel","rudder"]

      $("#button-clear").on("click", function reStart() {

            //Reset variables
            var wrongGuesses = 0;
            var chosenWordArray = [];
            var guessedLettersArray = [];
            var guessesLimit = 10;

            //Clears the divs in case there's anything in them
           var secretWordDiv = document.getElementById("secret-word");
           $(secretWordDiv).empty();

           var secretWordDiv = document.getElementById("wrong-guesses");
           $(secretWordDiv).empty();

            // Generate a random number between 0 and the length of the words array
             var randomWordID =  Math.floor(Math.random()*(words.length)+0);

            // Get the word that's at that index
            var chosenWord = words[randomWordID];

            // Get the length of that word
            var chosenWordLength = chosenWord.length;

            // Also store the length into a variable to see if they've won. 
            var hasWon = chosenWordLength;

            // Turn the word into an array
            var chosenWordArray = chosenWord.split("");

            //Get the div to print to
            var secretWordDiv = document.getElementById("secret-word");

            // Dynamically print out underscores to represent the hidden letters
            for (var i = 0; i < chosenWordArray.length; i++) {

                  var blankLetter = document.createElement("div");
                  //append the new div to the existing div
                  secretWordDiv.appendChild(blankLetter);

                 //take the contents of the current pointer in the array and put it in the newdiv 
                 blankLetter.innerHTML = "___";

                 //Test helper to print the word to the console
                 console.log(chosenWord[i]);

                 //add a class of the letter # to the array to target later
                 blankLetter.setAttribute('id',i);
                 blankLetter.setAttribute('class','letter');
            }

            alert("New game initialized, pick your first letter!");



      document.onkeyup = function(event) {

        // Determines which key was pressed.
        var guessedLetter = String.fromCharCode(event.keyCode).toLowerCase();


        //check if letter was already guessed
        if (guessedLettersArray.indexOf(guessedLetter) != -1) {
            alert("You've already guessed that letter!");
        }

        //check if guessed letter is in the chosen word array
        else if (chosenWordArray.indexOf(guessedLetter) != -1) {
          alert("You guessed a correct letter!");

          //store the guessed letter into a guessed letters array
          guessedLettersArray.push(guessedLetter);

          //get the secret word div and update all hidden letters display the guessed letter
          for (i=0; i < chosenWordArray.length; i++) {
            if (chosenWordArray[i] == guessedLetter) {
                  var secretWordDiv = document.getElementById(i);
                  secretWordDiv.innerHTML = guessedLetter;
                  hasWon--;

                  //check if user won
                  if(hasWon==0){
                        alert("You win! Press restart to start over.")
                  }
                 
            }
          }

          //original code...doesn't handle duplicate letters
          // var secretWordDiv = document.getElementById(chosenWordArray.indexOf(guessedLetter));
          // secretWordDiv.innerHTML = guessedLetter;
                       
          }

        else {
            //increment the wrong guesses variable
            wrongGuesses++;

            if (wrongGuesses==guessesLimit){
                  alert ("You sank the ship!");
            }

            //store the guessed letter into a guessed letters array
            guessedLettersArray.push(guessedLetter);
            
            //grab the wrong guesses counter div and updated it
            var wrongCounterDiv = document.getElementById("wrong-guesses-counter");
            wrongCounterDiv.innerHTML = wrongGuesses;

            //grab the wrong guesses div
            var wrongGuessesDiv = document.getElementById("wrong-guesses");

            //create a new div for the wrong guesses
            var wrongGuessedLetter = document.createElement("div");
            wrongGuessedLetter.setAttribute('class','letter');

            //append the new div to the existing div
            wrongGuessesDiv.appendChild(wrongGuessedLetter);

           //print out the wrongly guessed letter
           wrongGuessedLetter.innerHTML = guessedLetter;

        }

      }




    });

});






 

