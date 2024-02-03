const analyzeArray = (array) => {

    const getAverage = (array) => {
        const total = array.reduce((total, current) => {
           return total += current
        }, 0)
        return total / array.length
    }

}
module.exports = analyzeArray