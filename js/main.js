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
const markerEls = [...document.querySelectorAll('#markers > div')];  // Convert the NodeList into an Array

/*----- event listeners -----*/
document.getElementById('markers').addEventListener('click', handleDrop);

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

// In response to user interaction, update all impacted
// state, then call render()
function handleDrop(evt) {
  // 1) Determine the index of the clicked column marker.
  const colIdx = markerEls.indexOf(evt.target);
  // 2) If not a valid index, do nothing(return from function).
  if (colIdx === -1) return;
  // 3) Create a shortcut variable to the clicked column array, e.g., `colArr`.
  const colArr = board[colIdx];
  // 4) Determine the index of the first available "cell" (first `null` element in `colArr`).
  const rowIdx = colArr.indexOf(null);
  console.log(rowIdx);
  // 5) Update the "cell" in `colArr` with whose turn it is.
  colArr[rowIdx] = turn;
  // 6) Compute and update the state of the game (winner ?).
  winner = getWinner();
  // 7) Update whose turn it is.
  turn *= -1;
  // 8) All state has been updated - call render()!
  render();
}

function getWinner() {
  return null;
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