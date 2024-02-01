const caesarCipher = (str, shift) => {
    let alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' , 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const alphabetObj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 10,
      k: 11,
      l: 12,
      m: 13,
      n: 14,
      o: 15,
      p: 16,
      q: 17,
      r: 18,
      s: 19,
      t: 20,
      u: 21,
      v: 22,
      w: 23,
      x: 24,
      y: 25,
      z: 26,
    };
    

      if(shift < 0){
        shift = 26 + shift
      } 
      else if(shift > 26){
        shift = shift - 26
      }

      let cipheredStr = ''
      const subStr = str.split("")
      subStr.forEach(element => {
        let idx = alphabetObj[element]

        let shippedIdx = idx + shift

        if(shippedIdx > 26){
            shippedIdx = shippedIdx - 26
        }
        cipheredStr += alphabetArr[shippedIdx - 1]
      });

      return cipheredStr
}
caesarCipher('sabbir', -1)
module.exports = caesarCipher;
