const GameBoard = require('./gameBoard')
const ship = require('./ship')

describe('tests ship position', ()=>{
    const carrierPosHorizontal = GameBoard().placeShip('carrier', [0,0], "H")
    const carrierPosVertical = GameBoard().placeShip('carrier', [0,0], "v")
    
    it('carrier initial position', ()=> {
        expect(carrierPosHorizontal[0]).toBe("00")
    })
    it('carrier end position horizontal', ()=> {
        expect(carrierPosHorizontal[4]).toBe("04")
    })
    it('carrier end position vertical', ()=> {

        expect(carrierPosVertical[4]).toBe("40")
    })
    
})

describe('tests receive attack', () => {

})