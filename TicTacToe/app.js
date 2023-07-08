const gameboard = [['', '', ''],
['', '', ''],
['', '', ''],
]

let moves = []
let winner = null
let playersTurn = 'player1'
let opponent = 'computer'
let opponentSymbol = 'O'
let Difficulty = 'easy'


function resetBoard(){
moves = []
winner = null
playersTurn = 'player1'
opponent = opponents.value
opponentSymbol = 'O'

const cells = document.querySelectorAll('.cell')

for (let i = 0; i < gameboard.length; i++) {
  for (let j = 0; j < gameboard[0].length; j++) {
    if (gameboard[i][j] !== '') {
      gameboard[i][j] = ''
    }
  }
}

cells.forEach(cell=>{
  cell.textContent = ''
})

}

function players(name,symbol){
  const getPlayersName = ()=>{
    return name
  }
  const getPlayerSymbol = ()=>{
    return symbol
  }
  return {getPlayersName,getPlayerSymbol}
}


const opponents = document.getElementById('opponents')
const difficulty = document.getElementById('difficulty')

window.addEventListener('DOMContentLoaded',()=>{
  opponents.selectedIndex = 0
  console.log(opponent)
})


opponents.addEventListener('input', selectOpponent)

function selectOpponent(){
    let selectedPlayer = opponents.value
    const Player = players(selectedPlayer,'O')
    opponent = Player.getPlayersName()
    opponentSymbol = Player.getPlayerSymbol()
    console.log({opponent,opponentSymbol})
    
    resetBoard()
}

function possibleMoves(originBoard) {
  const freeSpaces = []
  for (let i = 0; i < originBoard.length; i++) {
    for (let j = 0; j < originBoard[0].length; j++) {
      if (originBoard[i][j] === '') {
        freeSpaces.push([i,j])
      }
    }
  }
  return freeSpaces
}


function displayGameBoard() {
  const gameBoardContainer = document.querySelector('.gameboard')

  for (let i = 0; i < gameboard.length; i++) {
    for (let j = 0; j < gameboard[0].length; j++) {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      cell.setAttribute('data', `${i},${j}`)
      gameBoardContainer.appendChild(cell)

    }
  }
}
displayGameBoard()


function bestMove() {
  let bestScore = -Infinity
  let bestMove;
  const freeSpace = possibleMoves(gameboard)
  // console.log(freeSpace)
  if (freeSpace.length > 0 && playersTurn === 'computer' && !winner && Difficulty === 'easy') {
    const randMove = Math.round(Math.random() * (freeSpace.length - 1))
    const randArr = freeSpace[randMove]
    moves.push([randArr[0], randArr[1]])
    gameboard[randArr[0]][randArr[1]] = 'O'
    updateCellDisplay(randArr[0], randArr[1], "O")
    playersTurn = 'player1'
    getWinner(moves)
  }

  // if(Difficulty === 'unbeatable'){
  //   console.log('un')
  //   for(let i = 0; i<freeSpace.length; i++){
  //     let score = minimax(gameboard,0,false)
  //     if(score>bestScore){
  //       bestScore = score
  //       bestMove = freeSpace[i]
  //     }
  //   }

  //   gameboard[bestMove[0]][bestMove[1]] = '0'
  //   moves.push([bestMove[0],bestMove[1]])
  //   updateCellDisplay(bestMove[0],bestMove[1],'O')
  //   playersTurn = 'player1'
  //   getWinner(moves)
  // }
}

const cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
  cell.addEventListener('click', makeMove)
})

// function minimax(board,depth,isMaximising){
//   // const freeSpace = possibleMoves(gameboard)
 
//   let results = getWinner(moves)
//   if(results){
//     console.log(results)
//   }
  
//   return 1
// }


function makeMove() {
  const cordinate = this.getAttribute('data')
  const coArr = cordinate.split(',')
  // console.log(coArr)

  const freeSpace = possibleMoves(gameboard)

  if (freeSpace.length > 0 && playersTurn === 'player1' && !winner &&!this.textContent) {
    const row = parseInt(coArr[0])
    const col = parseInt(coArr[1])
    moves.push([row, col])
    gameboard[row][col] = 'x'
    this.textContent = 'x'
    updateCellDisplay(coArr[0], coArr[1], "X")
    if(opponent === 'computer'){
      // console.log(opponent)
      playersTurn = 'computer'
      bestMove()
    }else if(opponent === 'player2'){
      // console.log(opponent)
      playersTurn = 'player2'
    }

    getWinner(moves)

  }

 else if (freeSpace.length > 0 && opponent === 'player2' && playersTurn === 'player2' && !winner) {
    const row = parseInt(coArr[0])
    const col = parseInt(coArr[1])
    moves.push([row, col])
    gameboard[row][col] = opponentSymbol
    this.textContent = opponentSymbol
    updateCellDisplay(coArr[0], coArr[1], opponentSymbol)
    playersTurn = 'player1'
    getWinner(moves)
  }
}


function updateCellDisplay(row, col, value) {
  const cells = document.querySelectorAll('.cell')
  cells.forEach(cell => {
    const cellData = cell.getAttribute('data').split(',')
    const cellRow = parseInt(cellData[0])
    const cellCol = parseInt(cellData[1])

    if (cellRow === row && cellCol === col) {
      cell.textContent = value
    }
  })
}


function getWinner(moves) {
  let rows = [0, 0, 0]
  let cols = [0, 0, 0]
  let diagonal = 0
  let antiDiag = 0
  let count = 0
  let score = null

  for (let [row, column] of moves) {
    let value = (count % 2) === 0 ? 1 : -1
    // console.log(value)
    rows[row] += value
    cols[column] += value

    if (row === column) {
      diagonal += value
    }
    if (row + column == 2) {
      antiDiag += value
    }

    // console.log([rows[row], cols[column], diagonal, antiDiag, count])

    if ([rows[row], cols[column], diagonal, antiDiag].includes(3)) {
      winner = 'a'
      console.log(winner)
      score = -10
      return {winner,score}
    }
    else if([rows[row], cols[column], diagonal, antiDiag].includes(-3)) {
      winner = 'computer'
      console.log(winner)
      score = 10
      return {winner,score}
    }
    count++
  }
  if (count < 9) {
    console.log('pending')
    return 'pending'
  }
  else {
    winner = 'draw'
    score = 0
    return {winner,score}
  }
}

