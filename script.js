var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

var ai = "X";
var human = "O";
var currentPlayer = ai;
var matchEnded = true;
var aiScore = 0;
var humanScore = 0;

const clickEventHandler = (event) => {
  if (currentPlayer == ai) playerHighlighter("ai");

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
      if (winner !== null) {
        matchEnded = true;
        if (winner == "ai") aiScore += 1;
        else if (winner == "human") humanScore += 1;
        console.log(aiScore);
        document.getElementById("ai-score").innerHTML = aiScore;
        document.getElementById("human-score").innerHTML = humanScore;
      }
    }
  }
};

let cells = document.getElementsByClassName("board-cell");
for (const cell of cells) {
  cell.addEventListener("click", clickEventHandler);
}
