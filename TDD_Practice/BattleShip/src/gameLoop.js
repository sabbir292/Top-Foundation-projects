import ship from "./ship";
import GameBoard from "./gameBoard";
import './app.css'
import Turns from "./turns";
const {getTurn, changeTurn} = Turns()
const { isValidMove,
    placeShip,
    placeShipRandomly,
    isAllShipSunked, } = GameBoard()

const gameLoop = () => {
    const playerCarrier = ship('carrier');
    const playerBattleship = ship('battleship');
    const playerCruiser = ship('cruiser');
    const playerSubmarine = ship('submarine');
    const playerDestroyer = ship('destroyer');

    const enemyCarrier = ship('carrier');
    const enemyBattleship = ship('battleship');
    const enemyCruiser = ship('cruiser');
    const enemySubmarine = ship('submarine');
    const enemyDestroyer = ship('destroyer');

    const playerShips = [
        playerCarrier, playerBattleship, playerCruiser, playerSubmarine, playerDestroyer
    ]
    const enemyShips = [
        enemyCarrier, enemyBattleship, enemyCruiser, enemySubmarine, enemyDestroyer
    ]

    const placePlayerShipsRandomly = (playerBoard) => {
        placeShipRandomly(playerBoard, playerCarrier, 'player')
        placeShipRandomly(playerBoard, playerBattleship, 'player')
        placeShipRandomly(playerBoard, playerCruiser, 'player')
        placeShipRandomly(playerBoard, playerSubmarine, 'player')
        placeShipRandomly(playerBoard, playerDestroyer, 'player')
        return playerBoard
    }
    const placeComputerShipsRandomly = (enemyBoard) => {
        placeShipRandomly(enemyBoard, enemyCarrier)
        placeShipRandomly(enemyBoard, enemyBattleship)
        placeShipRandomly(enemyBoard, enemyCruiser)
        placeShipRandomly(enemyBoard, enemySubmarine)
        placeShipRandomly(enemyBoard, enemyDestroyer)
        return enemyBoard
    }

    return {
        // playerBoard,
        // enemyBoard,
        playerShips,
        enemyShips,
        placeComputerShipsRandomly,
        placePlayerShipsRandomly,
    }
}

export default gameLoop

