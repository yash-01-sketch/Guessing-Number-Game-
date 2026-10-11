let num = parseInt( Math.floor(Math.random()*100+1));

const submt = document.querySelector("#subt");
const input = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const remaining = document.querySelector(".lastResult");

const p = document.createElement('p');

let prevGuess = [];
let guessNum = 1;

let playGame = true;

if(playGame)
{
    submt.addEventListener('click', function(e)
    {
        e.preventDefault();
        const guessText = parseInt(input.value);
        validate(guessText);
    })
}

function validate(guess)
{
    if(isNaN(guess)) alert(`Give a correct input`);
    else if (guess > 100) alert(`Give a input less than 100`);
    else if(guess < 1) alert(`Give a input more than 1`);
    else {
        prevGuess.push(guess);
        if(guessNum === 11) 
        {
            displayGuess(guess);
            displayMessage(`Game Over Random Number was ${num}`);
            endGame();
        }
        else 
        {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess)
{
    if(guess === num) displayMessage(`Your Guessed is right`);
    else if(guess < num) displayMessage(`Number is Too Low`);
    else if(guess > num) displayMessage(`Number is Too High`);
}
function displayGuess(guess)
{
    input.value = " ";
    guessNum++;
    remaining.innerHTML =  `${11- guessNum}`;
    guessSlot.innerHTML += `${guess} `;
}

function displayMessage(message)
{
    lowOrHi.innerHTML =  `<h2>${message}</h2>`
}

function endGame()
{
    input.value = " "; 
    input.setAttribute("disabled", " ");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start NEW Game </h2>`;
    playGame = false;
    startOver.appendChild(p);
    newGame();
}


function  newGame()
{
    const button = document.querySelector('#newGame');
    button.addEventListener('click', function(e){
        num = parseInt(Math.random()*100+1);
        guessNum = 1;
        prevGuess = [];
        guessSlot.innerHTML = " ";
        remaining.innerHTML = `${11- guessNum}`;
        input.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;     
    })
}

