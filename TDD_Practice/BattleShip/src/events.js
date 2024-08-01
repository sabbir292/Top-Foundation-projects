import Helper from "./helper";
import gameLoop from "./gameLoop";
import './app.css'
import Dom from "./dom";
import GameBoard from "./gameBoard";
const {highlightShipPosition} = Dom()
let {playerBoard} = gameLoop()
const {getShip} = Helper()
const {isValidMove, placeShip} = GameBoard()


const Events = () => {
    const ships = document.querySelectorAll('.behicle')
    const playerGrid = document.querySelector('.player-board')
    // const playerGridCells = playerGrid.querySelectorAll('div')
    // const enemyGrid = document.querySelector('.enemy-board')
    let target;
    let isDragging = false;
    let originalPlayerBoard;

// Drag and Drop.
   const dragStart = (e, playerBoard)=> {
       target = e.target
       console.log(target)
       isDragging = true;
       if(playerBoard){
        originalPlayerBoard = JSON.parse(JSON.stringify(playerBoard));
       } 
       e.target.style.cursor = 'grabbing'
    } 

    const dragOver = (e, playerBoard, playerGridCells) => {
        if(playerBoard && playerGridCells){

            e.preventDefault()
            let orientation;
            let x = e.target.getAttribute('x')
            let y = e.target.getAttribute('y')
            let ship = getShip(target)
            if (!target) return
            else {
                
                if (target.classList.contains('horizontal')) {
                    orientation = 'h'
                } else orientation = 'v'
            }
            
            // console.log(playerGridCells, playerGrid)
            
            highlightShipPosition(playerBoard, playerGrid, playerGridCells, ship, x, y, orientation)
        }
    }
        
    const drop = (e, cell, playerBoard, playerGridCells, placedShips)=> {
        if(cell && playerBoard && playerGridCells){
            let tempShips = []
            let orientation;
            if (!target) return
            else {
                if (target.classList.contains('horizontal')) {
                    orientation = 'h'
                } else orientation = 'v'
            }
            
            const ship = getShip(target)
            
            const x = cell.getAttribute('x')
            const y = cell.getAttribute('y')
            
            if (!isDragging) return
            else if (isValidMove(playerBoard, ship, x, y, orientation)) {
                cell.appendChild(target)
                playerBoard = placeShip(playerBoard, ship, x, y, orientation)
          
                const shipExist = placedShips.includes(`${ship.name}`)
                if(!shipExist) placedShips.push(`${ship.name}`)
                console.log(placedShips)
                
                if(placedShips.length > 4){
                    const startGameBtn = document.querySelector('.start')
                    startGameBtn.removeAttribute('disabled')
                }

            target.setAttribute('x', x)
            target.setAttribute('y', y)
        } else {
            playerBoard = originalPlayerBoard
        }
        
        target = ''
        isDragging = false
        
        playerGridCells.forEach(item => {
            console.log('removing highlight')
            if (item.classList.contains('highlight')) {
                item.classList.remove('highlight')
            }
        })
        
        return playerBoard
    }

}
        
// Drag and Drop.

// change ship orientation:

const changeOrientation = (e, playerBoard)=> {
    const domShip = e.target
    const ship = getShip(domShip)
    let orientation;
    let tempOrientation;

    const x = domShip.getAttribute('x')
    const y = domShip.getAttribute('y')

    if (x && y) {

        if (domShip.classList.contains('horizontal')) {
            tempOrientation = 'v'
            orientation = 'h'
        } else {
            orientation = 'v'
            tempOrientation = 'h'
        }

        if (isValidMove(playerBoard, ship, x, y, tempOrientation)) {

            playerBoard = setOrientation(playerBoard, domShip, ship, x, y, tempOrientation)
        }
        else {
            playerBoard = setOrientation(playerBoard, domShip, ship, x, y, orientation)
        }
    } else return
}


const setOrientation = (playerBoard, domShip, ship, x, y, orientation) => {
    if (orientation === 'v') {
        domShip.classList.remove('horizontal')
        domShip.classList.add('verticle')
        return placeShip(playerBoard, ship, x, y, orientation)
    }
    else {
        domShip.classList.remove('verticle')
        domShip.classList.add('horizontal')
        return placeShip(playerBoard, ship, x, y, orientation)
    }
}
// change orientation.
return{
    dragOver, 
    dragStart,
    drop,
    changeOrientation,
}

}

export default Events