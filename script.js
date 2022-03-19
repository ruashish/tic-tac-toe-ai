var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let ai = "X";
let human = "O";
let currentPlayer = ai;
let matchEnded = false;

const clickEventHandler = (event) => {
  if (!matchEnded) {
    let cellId = event.srcElement.id;
    if (document.getElementById(cellId).innerHTML == "") {
      let dataI = document.getElementById(cellId).getAttribute("dataI");
      let dataJ = document.getElementById(cellId).getAttribute("dataJ");
      if (currentPlayer == human) {
        board[dataI][dataJ] = human;
        updateBoard(cellId, human);
        currentPlayer = ai;
      }
      bestMove();
      checkWinner();
      currentPlayer = human;
      winner = checkWinner();
      if (winner !== null) matchEnded = true;
    }
  }
};

let cells = document.getElementsByClassName("board-cell");
for (const cell of cells) {
  cell.addEventListener("click", clickEventHandler);
}
