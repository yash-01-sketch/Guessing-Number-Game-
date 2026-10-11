# Number Guessing Game

A simple browser game built with **HTML, CSS and JavaScript**. The computer picks a random number between 1 and 100, and the player has 10 attempts to guess it. The project is made to practice **DOM manipulation**.

## Features

- Random number between 1 and 100 on every page load
- 10 attempts per game
- Hints after every wrong guess ("Too Low" / "Too High")
- Shows the history of previous guesses
- Shows the number of guesses remaining
- Input validation (non-numeric, out-of-range values)
- Game ends on a correct guess or when attempts run out
- Start a new game without reloading the page just on clicking

## Tech Stack

| Technology | Used for |
| ---------- | -------- |
| HTML5 | Page structure (form, input, result paragraphs) |
| CSS3 | Styling and layout |
| JavaScript (ES6) | Game logic and DOM manipulation |

## Project Structure

```
number-guessing-game/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Clone or download the project.
2. Open the folder in VS Code.
3. Run `index.html` with the **Live Server** extension, or just double-click the file to open it in a browser.

## How to Play

1. Type a number between 1 and 100 in the input box.
2. Click **Submit guess**.
3. Read the hint and adjust your next guess.
4. Guess the number within 10 attempts to win.

## DOM Concepts Used

- `document.querySelector()` to select elements
- `addEventListener('click' / 'submit', ...)` to handle user events
- `e.preventDefault()` to stop the form from reloading the page
- `element.value` to read and clear input
- `element.innerHTML` / `textContent` to update text on the page
- `document.createElement()` and `appendChild()` to create and add new elements (e.g. the "Start new game" button)
- `setAttribute()` / `removeAttribute()` to disable and enable the input and button

## Game Logic (Flow)

1. Generate the random number: `Math.floor(Math.random() * 100) + 1`
2. On submit, read and validate the input
3. Store the guess in an array and show it on the page
4. Compare with the random number and show a hint
5. Reduce the remaining attempts by one
6. If the guess is correct or attempts reach 0, end the game and show the "Start new game" button
7. On "Start new game", reset the number, the guess history, the counter and enable the input again

## Possible Improvements

- Add a difficulty level (change the range or the number of attempts)
- Add a score or best-score using `localStorage`
- Add animations and sound for correct and wrong guesses
- Make the layout fully responsive for mobile screens
