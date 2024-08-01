import GameBoard from '../src/gameBoard';
import ship from '../src/ship';
let board = Array.from({ length: 10 }, () => Array(10).fill(false));

const carrier = ship('carrier')
const battleship = ship('battleship')

const {isValidMove, placeShip, placeRandomShip, isAllShipSunked} = GameBoard()

// isvalidmove
console.log(board)

// describe('test isvalidMove', ()=> {
//     test('-1,0 = false', ()=> {
//         expect(isValidMove(board, carrier, -1,0, 'v')).toBe(false)
//     })
//     test('0,12, h = false', ()=> {
//         expect(isValidMove(board, carrier, 0,12, 'h')).toBe(false)
//     })
//     test('12,12, h = false', ()=> {
//         expect(isValidMove(board, carrier, 0,12, 'h')).toBe(false)
//     })
//     test('0,9, h = false', ()=> {
//         expect(isValidMove(board, carrier, 0,9, 'h')).toBe(false)
//     })
//     test('9,0 v= false', ()=> {
//         expect(isValidMove(board, carrier, 9,0, 'v')).toBe(false)
//     })
//     test('9,9 = false', ()=> {
//         expect(isValidMove(board, carrier, -1,0, 'v')).toBe(false)
//     })
//     test('9,9 = false', ()=> {
//         expect(isValidMove(board, carrier, -1,0, 'h')).toBe(false)
//     })
//     test('0,0 h= true', ()=> {
//         expect(isValidMove(board, carrier, 0,0, 'h')).toBe(true)
//     })
//     test('0,9 v= true', ()=> {
//         expect(isValidMove(board, carrier, 0,9, 'v')).toBe(true)
//     })
//     test('9,0 h= true', ()=> {
//         expect(isValidMove(board, carrier, 9,0, 'h')).toBe(true)
//     })
//     test('4,0 v = true', ()=> {
//         expect(isValidMove(board, carrier, 4,0, 'v')).toBe(true)
//     })
// })



// placeships

board = placeShip(board,carrier,0,0,"v")
// board = placeShip(board,battleship,0,5,"h")
// board = placeShip(board,battleship,9,0,"h")
// board = placeShip(board,battleship,5,9,"v")

describe('tests placeship', ()=>{
    test('0,0 to 4,0 = carrier', ()=> {
        expect(board[0][0]).toBe(carrier)
        expect(board[4][0]).toBe(carrier)
        expect(board[5][0]).toBe(false)
    })
})

// describe('tests placeship', ()=>{
//     test('0,5 to 0,9 = carrier', ()=> {
//         expect(board[0][5]).toBe(carrier)
//         expect(board[0][9]).toBe(carrier)
//         expect(board[0][4]).toBe(false)
//     })
// })

// describe('tests placeship', ()=>{
//     test('9,0 to 9,5 = carrier', ()=> {
//         expect(board[9][0]).toBe(carrier)
//         expect(board[9][4]).toBe(carrier)
//         expect(board[9][5]).toBe(false)
//     })
// })

// describe('tests placeship', ()=>{
//     test('5,9 to 99 = carrier', ()=> {
//         expect(board[5][9]).toBe(carrier)
//         expect(board[9][9]).toBe(carrier)
//         expect(board[4][9]).toBe(false)
//     })
// })




// describe('tests receive attack', () => {
//     test('attacking position 00 = 1', ()=>{
//         expect(GameBoard().receiveAttack(board, 0,0)).toBe(1)
//     })
//     test('attacking position 40 = 1', ()=>{
//         expect(GameBoard().receiveAttack(board,4,0)).toBe(1)
//     })
// })

// GameBoard().isValidMove(board, 'carrier', -2,2, 'h')

// describe('tests isValidMove', ()=>{
//     test('outside = false', ()=>{
//         expect(GameBoard().isValidMove(board, 'carrier', -2,2, 'h')).toBe(false)
//         expect(GameBoard().isValidMove(board, 'carrier', -1,2, 'v')).toBe(false)
//         expect(GameBoard().isValidMove(board, 'carrier', 11,2, 'v')).toBe(false)
//         expect(GameBoard().isValidMove(board, 'carrier', 11,15, 'h')).toBe(false)
//     })
// })

// GameBoard().placeShipRandomly(board, 'destroyer')
// GameBoard().placeShipRandomly(board, 'cruiser')
// console.log(board)