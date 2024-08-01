import GameBoard from "./gameBoard";
import gameLoop from "./gameLoop";
import Players from './player'
import './app.css'
import Turns from "./turns";
const {getTurn, changeTurn} = Turns()
const { isValidMove,
    isAllShipSunked, } = GameBoard()

let { playerBoard, enemyBoard, placeComputerShipsRandomly, placePlayerShipsRandomly, playerShips, enemyShips } = gameLoop()
const { playerMove, computersMove } = Players(playerShips)

const [playerCarrier, playerBattleship, playerCruiser, playerSubmarine, playerDestroyer] = playerShips

const Dom = ()=> {
    
   let playerGridCells;
   document.addEventListener('DOMContentLoaded', ()=> {
       playerGridCells = document.querySelectorAll('.player-board div')
    //    console.log(playerGridCells)
   })
    const playerGrid = document.querySelector('.player-board')
    const enemyGridArea = document.querySelector('.e-board')
    const enemyGrid = document.querySelector('.enemy-board')
    
    const createBoard = (board) => {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('div')
                cell.classList.add('cell')
                cell.setAttribute('x', i)
                cell.setAttribute('y', j)
                
                board.appendChild(cell)
            }
        }
    }
    
        // Drag and Drop ------
        const playerShipIndicator = document.querySelector('.player-ship-indicator')
        const enemyShipIndicator = document.querySelector('.enemy-ship-indicator')
        
        // end of drag and drop------
        const updateGrid = (board, grid) => {       
            // console.log(playerGridCells)
            console.log(board)
            playerGridCells.forEach(cell => {
                cell.innerHtml = ''
                cell.classList.remove('ship')
            })
            
            board.forEach((row, rowIdx) => {
                row.forEach((col, colIdx) => {
                    const element = grid.querySelector(`[x="${rowIdx}"][y="${colIdx}"]`)
                    
                    if (board[rowIdx][colIdx] === false) {
                        element.innerHtml = ''
            }
            else if (board[rowIdx][colIdx] === 'missed') {
                element.textContent = 'Ⓜ️'
                element.classList.add('missed')
                
            } else if (board[rowIdx][colIdx] === 'reveled') {
                element.textContent = '❌'
                element.classList.add('hit')
            }
        })
    })
}



// random ship placement: = 
const placeRandomShip = (playerBoard) => {
    const startGameBtn = document.querySelector('.start')
    playerBoard = placePlayerShipsRandomly(playerBoard)
    updateGrid(playerBoard, playerGrid)
    startGameBtn.removeAttribute('disabled')

    return playerBoard
}

// start game.
const playerShipCoordinate = {
    'carrier': [],
    'battleship': [],
    'cruiser': [],
    'submarine': [],
    'destroyer': [],
}
const enemyShipCoordinate = {
    'carrier': [],
    'battleship': [],
    'cruiser': [],
    'submarine': [],
    'destroyer': [],
}

const startGame = (playerBoard, enemyBoard) => {
    const divider = document.querySelector('.divider')
    const shipYard = document.querySelector('.shipyard')

    enemyBoard = placeComputerShipsRandomly(enemyBoard)
    enemyGridArea.classList.add('show')
    divider.classList.add('show')
    shipYard.textContent = 'Graveyard'
    
    playerBoard.forEach((row, rowIdx) => {
        row.forEach((col, colIdx) => {
            if (playerBoard[rowIdx][colIdx].name === 'carrier') {
                playerShipCoordinate['carrier'].push([rowIdx, colIdx])
            }
            else if (playerBoard[rowIdx][colIdx].name === 'battleship') {
                playerShipCoordinate['battleship'].push([rowIdx, colIdx])
            }
            else if (playerBoard[rowIdx][colIdx].name === 'cruiser') {
                playerShipCoordinate['cruiser'].push([rowIdx, colIdx])
            }
            else if (playerBoard[rowIdx][colIdx].name === 'submarine') {
                playerShipCoordinate['submarine'].push([rowIdx, colIdx])
            }
            else if (playerBoard[rowIdx][colIdx].name === 'destroyer') {
                playerShipCoordinate['destroyer'].push([rowIdx, colIdx])
            } else return
        })
    })
    
    enemyBoard.forEach((row, rowIdx) => {
        row.forEach((col, colIdx) => {
            if (enemyBoard[rowIdx][colIdx].name === 'carrier') {
                enemyShipCoordinate['carrier'].push([rowIdx, colIdx])
            }
            else if (enemyBoard[rowIdx][colIdx].name === 'battleship') {
                enemyShipCoordinate['battleship'].push([rowIdx, colIdx])
            }
            else if (enemyBoard[rowIdx][colIdx].name === 'cruiser') {
                enemyShipCoordinate['cruiser'].push([rowIdx, colIdx])
            }
            else if (enemyBoard[rowIdx][colIdx].name === 'submarine') {
                enemyShipCoordinate['submarine'].push([rowIdx, colIdx])
            }
            else if (enemyBoard[rowIdx][colIdx].name === 'destroyer') {
                enemyShipCoordinate['destroyer'].push([rowIdx, colIdx])
            } else return
        })
    })
    
    
    for (const key in enemyShipCoordinate) {
        const ship = document.createElement('div')
        ship.classList.add(`${key}-indicator`)
        
        enemyShipCoordinate[key].forEach(arr => {   
            const div = document.createElement('div')
            ship.appendChild(div)
        })
        enemyShipIndicator.appendChild(ship)
    }
    
    for (const key in playerShipCoordinate) {
        const ship = document.createElement('div')
        ship.classList.add(`${key}-indicator`)
        
        playerShipCoordinate[key].forEach(arr => {   
            const div = document.createElement('div')
            ship.appendChild(div)
        })
        playerShipIndicator.appendChild(ship)
    }
    
}


const attack = (e, cell, playerBoard, enemyBoard) => {

        const x = cell.getAttribute('x')
        const y = cell.getAttribute('y')
        
        if (x && y) {

            if (isAllShipSunked(playerShips, enemyShips)) {
                alert('Game Over')
            } else {
                if(getTurn() === 'player' && (enemyBoard[x][y] !== 'missed' && enemyBoard[x][y] !== 'reveled')){
                    // console.log(getTurn(), changeTurn())
                    enemyBoard = playerMove(enemyBoard, x, y)
                    updateGrid(enemyBoard, enemyGrid)
                    changeTurn()
                    // else return
                    
                    
                    // once a ship is sunked it updates the sarrounding places as empty..
                    enemyShips.forEach(ship => {
                        
                        if (ship.isSunked()) {
                            let coordinates = enemyShipCoordinate[ship.name];
                            let lastIdx = coordinates.length - 1; // Get the index of the last coordinate
                            
                            coordinates.forEach((arr, idx) => {
                                let [x, y] = arr;
                                x = parseInt(x);
                                y = parseInt(y);
                                
                                // Check if the current coordinate is the first or last coordinate of the ship
                                if (idx === 0 || idx === lastIdx) {
                                    // Check if adjacent cells are within bounds and not already revealed
                                    if (x - 1 >= 0 && y - 1 >= 0 && enemyBoard[x - 1][y - 1] !== 'reveled') enemyBoard[x - 1][y - 1] = 'missed';
                                    if (x - 1 >= 0 && y + 1 < enemyBoard[x].length && enemyBoard[x - 1][y + 1] !== 'reveled') enemyBoard[x - 1][y + 1] = 'missed';
                                    if (x + 1 < enemyBoard.length && y + 1 < enemyBoard[x].length && enemyBoard[x + 1][y + 1] !== 'reveled') enemyBoard[x + 1][y + 1] = 'missed';
                                    if (x + 1 < enemyBoard.length && y - 1 >= 0 && enemyBoard[x + 1][y - 1] !== 'reveled') enemyBoard[x + 1][y - 1] = 'missed';
                                }
                                
                                // Check adjacent cells for each coordinate
                                if (x - 1 >= 0 && enemyBoard[x - 1][y] !== 'reveled') enemyBoard[x - 1][y] = 'missed';
                                if (x + 1 < enemyBoard.length && enemyBoard[x + 1][y] !== 'reveled') enemyBoard[x + 1][y] = 'missed';
                                if (y - 1 >= 0 && enemyBoard[x][y - 1] !== 'reveled') enemyBoard[x][y - 1] = 'missed';
                                if (y + 1 < enemyBoard[x].length && enemyBoard[x][y + 1] !== 'reveled') enemyBoard[x][y + 1] = 'missed';
                            });
                            
                            // update indicator ships.
                            const name = ship.name
                            const indicatorShip = enemyShipIndicator.querySelector(`.${name}-indicator`)
                            indicatorShip.classList.add('destroyed')
                            // console.log({indicatorShip})
                        }
                    });
                }
                
                setTimeout(() => {
                    if(getTurn() === 'computer'){
                        
                        playerBoard = computersMove(playerBoard)
                        changeTurn()
                        updateGrid(playerBoard, playerGrid)
                        
                        // once a ship is sunked it updates the sarrounding places as empty..
                        playerShips.forEach(ship => {
                            // console.log(ship);
                            if (ship.isSunked()) {
                            let coordinates = playerShipCoordinate[ship.name];
                            
                            let lastIdx = coordinates.length - 1; // Get the index of the last coordinate
                            
                            coordinates.forEach((arr, idx) => {
                                let [x, y] = arr;
                                x = parseInt(x);
                                y = parseInt(y);
                                
                                // Check if the current coordinate is the first or last coordinate of the ship
                                if (idx === 0 || idx === lastIdx) {
                                    // Check if adjacent cells are within bounds and not already revealed
                                    if (x - 1 >= 0 && y - 1 >= 0 && playerBoard[x - 1][y - 1] !== 'reveled') playerBoard[x - 1][y - 1] = 'missed';
                                    if (x - 1 >= 0 && y + 1 < playerBoard[x].length && playerBoard[x - 1][y + 1] !== 'reveled') playerBoard[x - 1][y + 1] = 'missed';
                                    if (x + 1 < playerBoard.length && y + 1 < playerBoard[x].length && playerBoard[x + 1][y + 1] !== 'reveled') playerBoard[x + 1][y + 1] = 'missed';
                                    if (x + 1 < playerBoard.length && y - 1 >= 0 && playerBoard[x + 1][y - 1] !== 'reveled') playerBoard[x + 1][y - 1] = 'missed';
                                }
                                
                                // Check adjacent cells for each coordinate
                                if (x - 1 >= 0 && playerBoard[x - 1][y] !== 'reveled') playerBoard[x - 1][y] = 'missed';
                                if (x + 1 < playerBoard.length && playerBoard[x + 1][y] !== 'reveled') playerBoard[x + 1][y] = 'missed';
                                if (y - 1 >= 0 && playerBoard[x][y - 1] !== 'reveled') playerBoard[x][y - 1] = 'missed';
                                if (y + 1 < playerBoard[x].length && playerBoard[x][y + 1] !== 'reveled') playerBoard[x][y + 1] = 'missed';
                            });
                            
                            // update indicator ships.
                            const name = ship.name
                            const indicatorShip = playerShipIndicator.querySelector(`.${name}-indicator`)
                            indicatorShip.classList.add('destroyed')
                            // console.log({indicatorShip})
                        }
                        
                    });
                }
            }, 500);
            // else return
            
        }
        
    } else return
    updateGrid(enemyBoard, enemyGrid)
    updateGrid(playerBoard, playerGrid)
    // console.log(playerBoard, enemyBoard)
}

const highlightShipPosition = (board, grid, playerGridCells, ship, row, col, orientation) => {
    // let shipName = target.getAttribute('id')
    let shipName = ship.name
    // console.log(playerGridCells)
    
    // removes the previous highlights
    playerGridCells.forEach(item => {
        if (item.classList.contains('highlight')) {
            item.classList.remove('highlight')
        }
    })
    
    if (isValidMove(board, ship, row, col, orientation)) {
        row = parseInt(row)
        col = parseInt(col)
        
        // horizontal elements.
        const firstdNode = grid.querySelector(`[x="${row}"][y="${col}"]`)
        const secondNode = grid.querySelector(`[x='${row}'][y='${col + parseInt(1)}'`)
        const thirdNode = grid.querySelector(`[x='${row}'][y='${col + parseInt(2)}'`)
        const fourthNode = grid.querySelector(`[x='${row}'][y='${col + parseInt(3)}'`)
        const fifthNode = grid.querySelector(`[x='${row}'][y='${col + parseInt(4)}'`)
        
        // vertical elements.
        const firstdNodeV = grid.querySelector(`[x='${row}'][y='${col}']`)
        const secondNodeV = grid.querySelector(`[x='${row + parseInt(1)}'][y='${col}']`)
        const thirdNodeV = grid.querySelector(`[x='${row + parseInt(2)}'][y='${col}']`)
        const fourthNodeV = grid.querySelector(`[x='${row + parseInt(3)}'][y='${col}']`)
        const fifthNodeV = grid.querySelector(`[x='${row + parseInt(4)}'][y='${col}']`)
        
        if (shipName === 'carrier') {
            if (orientation === 'h') {
                firstdNode.classList.add('highlight')
                secondNode.classList.add('highlight')
                thirdNode.classList.add('highlight')
                fourthNode.classList.add('highlight')
                fifthNode.classList.add('highlight')
            } 
            else {
                firstdNodeV.classList.add('highlight')
                secondNodeV.classList.add('highlight')
                thirdNodeV.classList.add('highlight')
                fourthNodeV.classList.add('highlight')
                fifthNodeV.classList.add('highlight')
            }
        }
        
        else if (shipName === 'battleship') {
            if (orientation === 'h') {
                firstdNode.classList.add('highlight')
                secondNode.classList.add('highlight')
                thirdNode.classList.add('highlight')
                fourthNode.classList.add('highlight')
            } else {
                firstdNodeV.classList.add('highlight')
                secondNodeV.classList.add('highlight')
                thirdNodeV.classList.add('highlight')
                fourthNodeV.classList.add('highlight')
            }
        }
        else if (shipName === 'cruiser' || shipName === 'submarine') {
            if (orientation === 'h') {
                firstdNode.classList.add('highlight')
                secondNode.classList.add('highlight')
                thirdNode.classList.add('highlight')
            } else {
                firstdNodeV.classList.add('highlight')
                secondNodeV.classList.add('highlight')
                thirdNodeV.classList.add('highlight')
            }
        }
        else {
            if (orientation === 'h') {
                firstdNode.classList.add('highlight')
                secondNode.classList.add('highlight')
            } else {
                firstdNodeV.classList.add('highlight')
                secondNodeV.classList.add('highlight')
            }
        }
    }
    else {
        return
    }
}

return {
    createBoard,
    startGame,
    updateGrid,
    placeRandomShip,
    attack, 
    highlightShipPosition,
    playerShipCoordinate,
}

}

export default Dom