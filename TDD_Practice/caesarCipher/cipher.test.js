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
test('from sabbir to yghhox', ()=> {
    expect(caesarCipher('sabbir', 32)).toBe('yghhox')
})

test('from sabbir to emnnud', ()=> {
    expect(caesarCipher('sabbir', 64)).toBe('emnnud')
})

test('from SabbiR to EmnnuD', ()=> {
    expect(caesarCipher('SabbiR', 64)).toBe('EmnnuD')
})

test('from Sab biR to Emn nuD', ()=> {
    expect(caesarCipher('Sab biR', 64)).toBe('Emn nuD')
})

test('from AZ ijk to CB klo', ()=> {
    expect(caesarCipher('AZ ijk', 2)).toBe('CB klm')
})
