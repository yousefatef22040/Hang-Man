//letters
const letters = "abcdefghijklmnopqrstuvwxyz";

//get array from letters
let lettersArray = Array.from(letters)

//sellect letters container
let lettersContainer = document.querySelector(".letters");

//generate letters
lettersArray.forEach(letter => {

    //create span
    let span = document.createElement("span");

    //create letter text node
    let theLetter = document.createTextNode(letter)

    //append the letter to span
    span.appendChild(theLetter);

    //add class on span
    span.className = 'letter-box'

    //append span to the letters container
    lettersContainer.appendChild(span)
});

//object of words + categories
const words = {
    programming: ["php", "javascript", "go", "scale", "frotran", "r", "mysql", "python"],
    movies: ["prestige", "inception", "parasite", "interstellar", "whiplash", "memento", "coco", "up"],
    people: ["albert einstine", "hitchcock", "alexander", "cleopatra", "mahatma ghandi"],
    contries: ["syria", "palestine", "yemen", "egypt", "bahrain", "qatar"]
}

//get random property

let allKeys = Object.keys(words);

//random number depend on keys length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

//category
let randomPropName = allKeys[randomPropNumber];

//category words
let randomPropValue = words[randomPropName];

//random number depend on words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

//category 
let randomValueValue = randomPropValue[randomValueNumber];

//set category info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

//select letters guess elemnt
let letterGuessContainer = document.querySelector(".letters-guess");

//convert chosen word to array
let lettersAndSpace = Array.from(randomValueValue);

//create spans depened on word
lettersAndSpace.forEach(letter => {

    //create empty span
    let emptySpan = document.createElement("span");

    //if letter is space
    if (letter === " ") {

        //add class to span
        emptySpan.className = "with-space"
    }

    //append span to the letters guess container
    letterGuessContainer.appendChild(emptySpan);

});

//select guess spans
let guessSpans = document.querySelectorAll(".letters-guess span");

//set wrong attempts
let wrongAttempts = 0;

//select the draw element
let theDraw = document.querySelector(".hangman-draw");

//handle clicking on letters
document.addEventListener("click", (e) => {

    //set the chose status
    let theStatus = false;

    if (e.target.className === 'letter-box') {

        e.target.classList.add("clicked");

        //get clicked letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();

        //the chosen word
        let theChosenWord = Array.from(randomValueValue.toLowerCase());

        // console.log(lettersAndSpace);

        theChosenWord.forEach((wordLetter, WordIndex) => {

            //if the clicked letter equal to one of the chosen word letter
            if (theClickedLetter == wordLetter) {

                //set status to correct
                theStatus = true;


                //loop on all guess spans
                guessSpans.forEach((span, spanIndex) => {

                    if (WordIndex === spanIndex) {

                        span.innerHTML = theClickedLetter;

                    }

                });

            }

        });

        // if letter is wrong
        if (theStatus !== true) {

            //increase the wrong attempts
            wrongAttempts++;

            //add class wrong on the draw element
            theDraw.classList.add(`wrong-${wrongAttempts}`);

            //play fail sound

            if (wrongAttempts === 8) {
                endGame();

                lettersContainer.classList.add("finished")
            }
        }
        //else{
        //     // play success sound
        // 
        // }

    }
});

//end game function
function endGame() {
    
    //create popuo div
    let div = document.createElement("div");

    //create text
    let divText = document.createTextNode(`Game Over The Word Is ${randomValueValue}`);

    //append text to div 
    div .appendChild(divText);

    //add class on div 
    div.className = 'popup';

    //append to the body
    document.body.appendChild(div);
    
}