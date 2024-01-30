const capitalize = require('./capitalize')

test('from sabbir to Sabbir', ()=> {
    expect(capitalize('sabbir')).toBe('Sabbir')
})

test('from SABBIR to Sabbir', ()=>{
    expect(capitalize('SABBIR')).toBe('Sabbir')
})

test('from sABbBiR to Sabbir', ()=>{
    expect(capitalize('sAbBiR')).toBe('Sabbir')
})