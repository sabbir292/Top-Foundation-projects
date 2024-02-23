const ship = require('./ship')

const GameBoard = () => {

    const placeShip = (behicle, initial, axis) => {
        if (behicle.toLowerCase() === 'carrier') {
            const carrier = ship(5)
            return carrier.setPosition(initial, axis)
        }
        else if (behicle.toLowerCase() === 'battleship') {
            return ship(4).setPosition(initial, axis)
        }
        else if (behicle.toLowerCase() === 'cruiser') {
            return ship(3).setPosition(initial, axis)
        }
        else if (behicle.toLowerCase() === 'submarine') {
            return ship(3).setPosition(initial, axis)
        }
        else if (behicle.toLowerCase() === 'destroyer') {
            return ship(2).setPosition(initial, axis)
        } else return;
    }

    return {
        placeShip,
    }

}

module.exports = GameBoard;