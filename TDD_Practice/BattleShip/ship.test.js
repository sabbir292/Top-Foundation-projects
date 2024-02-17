const Ship = require('./ship')

describe('test ship()', () => {

    const ship = Ship(2)
 
    it('increase hit by +1', () => {
        expect(ship.hit()).toBe(1)
    })

    it('ship not sunked', () => {
        expect(ship.isSunk()).toBeFalsy()
    })

    it('increase hit by +1', () => {
        expect(ship.hit()).toBe(2)
    })

    it('ship not sunked', () => {
        expect(ship.isSunk()).toBeTruthy()
    })

})
