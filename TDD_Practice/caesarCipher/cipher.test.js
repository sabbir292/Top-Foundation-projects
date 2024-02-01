const caesarCipher = require('./cipher')

test('from sabbir to rzaahq', ()=> {
    expect(caesarCipher('sabbir', -1)).toBe('rzaahq')
})

test('from sabbir to sabbir', ()=> {
    expect(caesarCipher('sabbir', 0)).toBe('sabbir')
})

test('from ab to bc', ()=> {
    expect(caesarCipher('ab', 1)).toBe('bc')
})

test('from sabbir to hpqqxg', ()=> {
    expect(caesarCipher('sabbir', 15)).toBe('hpqqxg')
})
