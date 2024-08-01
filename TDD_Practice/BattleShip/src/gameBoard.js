

const GameBoard = () => {

    const isValidMove = (board, ship, row, col, orientation) => {
        row = parseInt(row);
        col = parseInt(col);

        // Remove any existing instance of the ship from the board
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (board[i][j].name === ship.name) {
                    board[i][j] = false;
                }
            }
        }

        if (col < 0 || row < 0) return false;
        else if (orientation === 'h' && (col + ship.length > 10 || row > 10)) return false
        else if (orientation === 'v' && (col > 10 || row + ship.length > 10)) return false

        // Check if the ship's placement exceeds the board's bounds
        if (orientation.toLowerCase() === 'h') {
            for (let i = col; i < col + ship.length; i++) {
                // Check if the cells around the ship's placement are free
                for (let j = row - 1; j <= row + 1; j++) {
                    for (let k = i - 1; k <= i + 1; k++) {
                        if (j >= 0 && j < 10 && k >= 0 && k < 10 && board[j][k]) {
                            return false; // Ship overlaps with existing ship or adjacent ship
                        }
                    }
                }
            }
        } else {
            for (let i = row; i < row + ship.length; i++) {
                // Check if the cells around the ship's placement are free
                for (let j = col - 1; j <= col + 1; j++) {
                    for (let k = i - 1; k <= i + 1; k++) {
                        if (j >= 0 && j < 10 && k >= 0 && k < 10 && board[k][j]) {
                            return false; // Ship overlaps with existing ship or adjacent ship
                        }
                    }
                }
            }
        }

        return true; // All conditions passed, valid move
    };

    const placeShip = (board, ship, row, col, orientation) => {
        row = parseInt(row)
        col = parseInt(col)

        let oldBoard = board.map(row => [...row]);

        // Remove any existing instance of the same ship from the board
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (board[i][j] === ship) {
                    board[i][j] = false;
                }
            }
        }

        if (orientation.toLowerCase() === 'h') {
            if (isValidMove(board, ship, row, col, orientation)) {
                for (let i = col; i < col + ship.length; i++) {
                    board[row][i] = ship;
                }
                return board;
            } else {
                return oldBoard
            }

        } else {

            if (isValidMove(board, ship, row, col, orientation)) {
                for (let i = row; i < row + ship.length; i++) {
                    board[i][col] = ship;
                }
                return board;
            } else {
                return oldBoard
            }
        }
    };

    const placeShipRandomly = (board, ship, user = 'computer') => {

        const id = ship.name
        const behicle = document.getElementById(`${id}`)
        const playerGrid = document.querySelector('.player-board')

        let orientation;
        Math.random() > 0.5 ? orientation = 'v' : orientation = 'h';

        const row = Math.floor(Math.random() * 10)
        const col = Math.floor(Math.random() * 10)

        if (isValidMove(board, ship, row, col, orientation)) {
            const cell = playerGrid.querySelector(`[x="${row}"][y="${col}"]`)
            if (user === 'player') {
                if (orientation === 'h') {
                    behicle.classList.add('horizontal')
                    behicle.classList.remove('verticle')
                } else {
                    behicle.classList.remove('horizontal')
                    behicle.classList.add('verticle')
                }

                cell.appendChild(behicle)
                behicle.setAttribute('x', row)
                behicle.setAttribute('y', col)
            }
            
            return placeShip(board, ship, row, col, orientation)
        }
        else return placeShipRandomly(board, ship, user)
    }

    const receiveAttack = (board, row, col) => {

        if (board[row][col] === false) {
            board[row][col] = 'missed'
            return board
        }
        else if(typeof (board[row][col]) === 'object') {
            board[row][col].hit()
            board[row][col] = 'reveled'
            return board
        }else return board
    }

    const isAllShipSunked = (playerShips, enemyShips) => {

        const allEnemyShipSunked = enemyShips.every(ship => ship.isSunked())
        const allPlayerShipSunked = playerShips.every(ship => ship.isSunked())

        return allEnemyShipSunked || allPlayerShipSunked
    }

    return {
        isValidMove,
        placeShip,
        placeShipRandomly,
        receiveAttack,
        isAllShipSunked,
    };
};

export default GameBoard
