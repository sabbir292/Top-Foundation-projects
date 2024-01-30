const capitalize = (str) => {
    const lowerStr = str.toLowerCase()
    const capitalFirstLetter = lowerStr.slice(0, 1).toUpperCase()
    const exceptFirstLetter = lowerStr.slice(1)
    return capitalFirstLetter.concat(exceptFirstLetter)
}

module.exports = capitalize;