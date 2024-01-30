const reverseString = require('./reverseString')

test('from sabbir to ribbas', ()=> {
    expect(reverseString('sabbir')).toBe('ribbas')
})

test('from SABBIR to RIBBAS', ()=> {
    expect(reverseString('SABBIR')).toBe('RIBBAS')
})

test('from sAbBiR to RiBbAs', ()=> {
    expect(reverseString('sAbBiR')).toBe('RiBbAs')
})