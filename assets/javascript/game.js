//left to do:
//clear wrong guesses in-between games
//handle duplicate letters
//figure out how to tell when the user has won
//make the wrong guesses move a boat towards an iceberg


    $(document).ready(function() {


      //Define the guessable words
      var words = ["ocean","ship","helm","deck","sail","wind"];
 

      $("#button-clear").on("click", function reStart() {

            //Reset variables
            var wrongGuesses = 0;
            var chosenWordArray = [];
            var guessedLettersArray = [];
            var guessesLimit = 10;


            // Generate a random number between 0 and the length of the words array
             var randomWordID =  Math.floor(Math.random()*(words.length-0+1)+0);

            // Get the word that's at that index
            var chosenWord = words[randomWordID];

            // Get the length of that word
            var chosenWordLength = chosenWord.length;

            // Turn that word into an array
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
                 // console.log(chosenWord[i]);

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

          //get the secret word div and update the hidden letter to display the guessed letter
          var secretWordDiv = document.getElementById(chosenWordArray.indexOf(guessedLetter));
          secretWordDiv.innerHTML = guessedLetter;

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

           //take the contents of the current pointer in the array and put it in the new div 
           wrongGuessedLetter.innerHTML = guessedLetter;

        }

      }



    });



      });




 

