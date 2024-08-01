import gameLoop from "./gameLoop"
const {playerShips, enemyShips} = gameLoop()

const Helper = () => {
console.log(playerShips[0])
    const getShip = (target) => {
        if (target) {
            const id = target.getAttribute('id')
            switch (id) {
                case 'carrier':
                    return playerShips[0]
                case 'battleship':
                    return playerShips[1]
                case 'cruiser':
                    return playerShips[2]
                case 'submarine':
                    return playerShips[3]
                case 'destroyer':
                    return playerShips[4]
            }
        } else return

    }

    return {
        getShip
    }
}

export default Helper