const equal3 = (a, b, c) => {
  return a == b && b == c && a != "";
};

const updateBoard = (id, player) => {
  document.getElementById(id).innerHTML = player;
};

const checkWinner = () => {
  let winner = null;

  // Horizontal Check
  for (let i = 0; i < 3; i++) {
    if (equal3(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
    }
  }

  // Vertical Check
  for (let i = 0; i < 3; i++) {
    if (equal3(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];
    }
  }

  // Vertical Check
  for (let i = 0; i < 3; i++) {
    if (equal3(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];
    }
  }

  // Diagonal Check
  if (equal3(board[0][0], board[1][1], board[2][2])) {
    winner = board[0][0];
  }
  if (equal3(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0];
  }

  let emptyCell = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == "") emptyCell++;
    }
  }

  if (winner == null && emptyCell == 0) return "tie";
  return winner;
};

const changePlayer = (aiSign, humanSign) => {
  console.log("i");
  ai = aiSign;
  human = humanSign;

  if (ai === "X") {
    currentPlayer = ai;
  } else {
    currentPlayer = human;
  }
};

const playerHighlighter = (playerId) => {
  document.getElementById(playerId).style.filter = "grayscale(1)";
};

const startMatch =() =>{
  console.log("a");
  if(matchEnded){
    matchEnded = false;
    bestMove();
  }
}
