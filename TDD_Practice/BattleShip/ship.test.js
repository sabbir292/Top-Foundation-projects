const Ship = require('./ship')

describe('test ship()', () => {
    const ship = Ship(2)
 
    it('check length', () => {
        expect(ship.length).toBe(2)
    })
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


    it('test setPosition', ()=> {
       expect((ship.setPosition([0,0], 'v'))[1]).toBe('10')
    })

})
