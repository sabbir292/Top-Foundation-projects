const reverseString = (str) => {
    let reversedStr = ''
    const subStrArr = str.split('')
    for(let i = subStrArr.length - 1; i >= 0; i--){
        reversedStr += subStrArr[i]
    }
    return reversedStr
}

module.exports = reverseString;