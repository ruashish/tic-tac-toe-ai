var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let ai = "O";
let human = "X";
let currentPlayer = human;
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
      console.log(board.toString());
      checkWinner();
      currentPlayer = human;

      console.log(checkWinner());
      winner = checkWinner();
      if (winner !== null) matchEnded = true;
    }
  }
};

let cells = document.getElementsByClassName("board-cell");
for (const cell of cells) {
  cell.addEventListener("click", clickEventHandler);
}
