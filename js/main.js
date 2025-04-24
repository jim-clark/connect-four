/*----- constants -----*/
// look-up data structure
const COLORS = {
  '1': 'purple',
  '-1': 'orange',
  'null': 'white',
};

/*----- state variables -----*/
// Define, but do not assign to (initialize)
let board;  // 2DArray / 1/-1 -> player value; null -> cell is empty
let winner; // null -> no winner or tie, game is in progress; 1/-1 -> the player that won; 'Tie' -> the game has tied
let turn;   // 1/-1 -> the player whose turn it is

/*----- cached elements  -----*/
const msgEl = document.querySelector('h1');
const playAgainBtn = document.getElementById('play-again');

/*----- event listeners -----*/


/*----- functions -----*/
init();

// The init function's purpose is to initialize
// all state, then call render()
function init() {
  // To visualize the mapping (connection) between
  // the board array and the "cells"/divs in the DOM,
  // "rotate" the board 90 degrees counter-clockwise
  board = [
    [null, null, null, null, null, null], // col 0
    [null, null, null, null, null, null], // col 1
    [null, null, null, null, null, null], // col 2
    [null, null, null, null, null, null], // col 3
    [null, null, null, null, null, null], // col 4
    [null, null, null, null, null, null], // col 5
    [null, null, null, null, null, null], // col 6
  ];
  winner = null;
  turn = 1;
  render();
}

// The purpose of the render() function is to 
// "transfer"/visualize ALL state to/in the DOM
function render() {
  renderBoard();
  renderMessage();
  renderControls();
}

function renderControls() {
  // ternary expression - use when you want to return one of two values
  // <conditional exp> ? <truthy exp> : <falsy exp>
  playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
  // TODO: conditionally render the markers
}

function renderMessage() {
  if (winner === null) {
    msgEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s Turn`;
  } else if (winner === 'Tie') {
    msgEl.innerHTML = "It's a Tie!";
  } else {
    // There's a winner!
    msgEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> Wins!`;
  }
}

function renderBoard() {
  board.forEach((colArr, colIdx) => {
    colArr.forEach((cellVal, rowIdx) => {
      const cellEl = document.getElementById(`c${colIdx}r${rowIdx}`);
      cellEl.style.backgroundColor = COLORS[cellVal];
    });
  });
}