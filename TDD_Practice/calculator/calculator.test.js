const calculator = require('./calculator')

test('add 1 + 3 to 4', ()=> {
    expect(calculator.add(1, 3)).toBe(4)
})

test('add -3 + -4 to -7', ()=> {
    expect(calculator.add(-3, -4)).toBe(-7)
})

test('subtract 3 - 4 to -1', ()=> {
    expect(calculator.subtract(3, 4)).toBe(-1)
})

test('divide 4 / 2 to 2', ()=> {
    expect(calculator.divide(4, 2)).toBe(2)
})

test('multiply 4 * 2 to 8', ()=> {
    expect(calculator.multiply(4, 2)).toBe(8)
})