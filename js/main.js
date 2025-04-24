/*----- constants -----*/


/*----- state variables -----*/
// Define, but do not assign to (initialize)
let board;  // 2DArray / 1/-1 -> player value; null -> cell is empty
let winner; // null -> no winner or tie, game is in progress; 1/-1 -> the player that won; 'Tie' -> the game has tied
let turn;   // 1/-1 -> the player whose turn it is

/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/

// The init function's purpose is to initialize
// all state, then call render()
function init() {

  winner = null;
  turn = 1;
  // render();
}