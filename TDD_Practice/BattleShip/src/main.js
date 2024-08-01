import Dom from "./dom"
import Events from "./events"

const Main = () => {
    
    let gameStarted = false
    const initializeBoard = (rows, cols) => {
        return Array.from({ length: rows }, () => Array(cols).fill(false));
    };
    let enemyBoard = initializeBoard(10, 10)
    let playerBoard = initializeBoard(10, 10)

    const { createBoard, placeRandomShip, startGame, attack, updateGrid, playerShipCoordinate} = Dom()
    const {dragOver, dragStart, drop, changeOrientation} = Events()
    
    const randomShipBtn = document.querySelector('.random-ship')
    const playerGrid = document.querySelector('.player-board')
    const enemyGrid = document.querySelector('.enemy-board')
    const startGameBtn = document.querySelector('.start')
    const ships = document.querySelectorAll('.behicle')
    const playAgainBtn = document.querySelector('.play-again')
    const placedShips = []
    
    createBoard(playerGrid)
    createBoard(enemyGrid)
    
    const playerGridCells = document.querySelectorAll('.player-board div')
    const enemyGridCells = document.querySelectorAll('.enemy-board div')
    
    playAgainBtn.addEventListener('click', ()=> {
        // enemyBoard = initializeBoard(10, 10)
        // playerBoard = initializeBoard(10, 10)
        // updateGrid(playerBoard, playerGrid)
        // updateGrid(enemyBoard, enemyGrid)
        location.reload()
        console.log('play again')
    })

    randomShipBtn.addEventListener('click', ()=> {
        if(!gameStarted){
            randomShipBtn.removeAttribute('disabled')
            playerBoard = placeRandomShip(playerBoard)
        }
    })
    startGameBtn.addEventListener('click', ()=> {
        startGame(playerBoard, enemyBoard)
        gameStarted = true
        randomShipBtn.setAttribute('disabled', true)
        startGameBtn.setAttribute('disabled', true)
    })

    ships.forEach(ship => {
        ship.addEventListener('dragstart', (e)=> {
           if (!gameStarted) dragStart(e, playerBoard)
        })
    })

    ships.forEach(ship => {
        ship.addEventListener('click', (e)=> {
            if (!gameStarted) changeOrientation(e, playerBoard)
        })
    })

    playerGridCells.forEach(cell => {
        cell.addEventListener('dragover', (e)=>{
            if (!gameStarted) dragOver(e,playerBoard, playerGridCells)
        })
    })
    
    playerGridCells.forEach(cell => {
        cell.addEventListener('drop', (e)=>{
           if (!gameStarted) playerBoard = drop(e,cell, playerBoard, playerGridCells, placedShips)
        })
    })

    enemyGridCells.forEach(cell => {
        cell.addEventListener('click', (e)=> {
            attack(e, cell, playerBoard, enemyBoard)
        })
    })
    

}

Main()