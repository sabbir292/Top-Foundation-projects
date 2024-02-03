const analyzeArray = require('./array')

test('the average of [1, 2, 8, 5] is 4', ()=>{
    expect(analyzeArray([1, 2, 8, 5]).average).toBe(4)
})

test('the min of [1, 2, 8, 5] is 1', ()=>{
    expect(analyzeArray([1, 2, 8, 5]).min).toBe(1)
})
test('the max of [1, 2, 8, 5] is 8', ()=>{
    expect(analyzeArray([1, 2, 8, 5]).max).toBe(8)
})
test('the length of [1, 2, 8, 5] is 4', ()=>{
    expect(analyzeArray([1, 2, 8, 5]).length).toBe(4)
})