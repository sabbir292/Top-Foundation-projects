import GameBoard from "./gameBoard"
import ship from "./ship"

const Players = (ships) => {
    let probMap = Array.from({ length: 10 }, () => Array(10).fill(0));

   
    
    const getRandomComputerMove = (playerBoard) => {
        const rRow = Math.floor(Math.random() * 10);
        const rCol = Math.floor(Math.random() * 10);
        console.log({ ships });
    
        if (!ships[0].isSunked()) {
            playerBoard.forEach((row, rowIdx) => {
                row.forEach((cellValue, colIdx) => {
                    // Horizontal check
                    if (colIdx + ships[0].length <= 10) {
                        let isvalidPosition = true;
                        for (let i = 0; i < ships[0].length; i++) {
                            if (playerBoard[rowIdx][colIdx + i] === 'missed' || playerBoard[rowIdx][colIdx + i] === 'reveled') {
                                isvalidPosition = false;
                            }
                        }
                        if (isvalidPosition) {
                            for (let i = 0; i < ships[0].length; i++) {
                                probMap[rowIdx][colIdx + i] += 1;
                            }
                        }
                    }
    
                    // Vertical check
                    if (rowIdx + ships[0].length <= 10) {
                        let isvalidPosition = true;
                        for (let i = 0; i < ships[0].length; i++) {
                            if (playerBoard[rowIdx + i][colIdx] === 'missed' || playerBoard[rowIdx + i][colIdx] === 'reveled') {
                                isvalidPosition = false;
                            }
                        }
                        if (isvalidPosition) {
                            for (let i = 0; i < ships[0].length; i++) {
                                probMap[rowIdx + i][colIdx] += 1;
                            }
                        }
                    }
                });
            });
        } else {
            ships.shift();
        }
    
        function updateHighestVal() {
            let highestVal = {
                row: 0,
                col: 0,
            };
            let highestValue = probMap[0][0];
    
            probMap.forEach((row, rowIdx) => {
                row.forEach((cellValue, colIdx) => {
                    if (cellValue > highestValue) {
                        highestValue = cellValue;
                        highestVal.row = rowIdx;
                        highestVal.col = colIdx;
                    }
                });
            });
    
            return highestVal;
        }
    
        let highestVal = updateHighestVal();
    
        if (typeof playerBoard[highestVal.row][highestVal.col] === 'object' && playerBoard[highestVal.row][highestVal.col] !== null) {
            // Increase the probability of adjacent cells
            if (highestVal.col - 1 >= 0 && playerBoard[highestVal.row][highestVal.col - 1] !== 'reveled' && playerBoard[highestVal.row][highestVal.col - 1] !== 'missed') {
                probMap[highestVal.row][highestVal.col - 1] += 100;
            }
            if (highestVal.col + 1 < 10 && playerBoard[highestVal.row][highestVal.col + 1] !== 'reveled' && playerBoard[highestVal.row][highestVal.col + 1] !== 'missed') {
                probMap[highestVal.row][highestVal.col + 1] += 100;
            }
            if (highestVal.row - 1 >= 0 && playerBoard[highestVal.row - 1][highestVal.col] !== 'reveled' && playerBoard[highestVal.row - 1][highestVal.col] !== 'missed') {
                probMap[highestVal.row - 1][highestVal.col] += 100;
            }
            if (highestVal.row + 1 < 10 && playerBoard[highestVal.row + 1][highestVal.col] !== 'reveled' && playerBoard[highestVal.row + 1][highestVal.col] !== 'missed') {
                probMap[highestVal.row + 1][highestVal.col] += 100;
            }
        }
    
        // Update highestVal again to make the next move
        
    
        
        // Assuming GameBoard is already defined and has the receiveAttack method

        const ship = playerBoard[highestVal.row][highestVal.col]

        let board =  GameBoard().receiveAttack(playerBoard, highestVal.row, highestVal.col);

        // Reset the specific cell's probability to 0
        probMap[highestVal.row][highestVal.col] = 0;
        console.log(typeof ship)
        console.log(ship)

        if(typeof ship === 'object' && ship.isSunked()){
            probMap = Array.from({ length: 10 }, () => Array(10).fill(0));
        }

        highestVal = updateHighestVal();
        console.log(highestVal);
        console.log(probMap[highestVal.row][highestVal.col]);
        console.log(probMap);
        return board
    };
    


    const playerMove = (board, row, col) => {
            if (board[row][col] === 'missed' || board[row][col] === 'reveled' || board[row][col] === undefined) return board
            else {
                return GameBoard().receiveAttack(board, row, col)
            }
        }

    const computersMove = (board) => {
            return getRandomComputerMove(board)
    }

    return {
        playerMove,
        computersMove,
    }
}

export default Players