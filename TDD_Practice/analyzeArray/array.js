const analyzeArray = (array) => {

    const getAverage = (array) => {
        const total = array.reduce((total, current) => {
           return total += current
        }, 0)
        return total / array.length
    }

    const getMin = (arr) => {
        let min = arr[0]
        arr.forEach(element => {
          if(element <= min){
           return min = element
          }
        });
        return min
    }
    
    
    const getMax = (arr) => {
        let max = arr[0]
        arr.forEach(element => {
          if(element >= max){
           return max = element
          }
        });
        return max
    }

    return {
        average: getAverage(array), 
        min: getMin(array), 
        max: getMax(array), 
        length: array.length, 
    }

}
module.exports = analyzeArray