const ship = (length) => {
let hitCount = 0;

    const hit = () => {
        return hitCount += 1;
    }
    const isSunk = () => {
        if(hitCount === length){
            return true
        }else return false;
    }
        
    const setPosition = (initial, axis) =>{
        const coordinates = []
        const [a, b] = initial
        for(let i = 0; i < length; i ++){
            if(axis.toLowerCase() === 'h'){
                coordinates.push(a.toString() + i.toString())
            }else{
                coordinates.push(i.toString() + b.toString())
            }
        }
        return coordinates
    }

    return{
        length,
        hit,
        isSunk,
        setPosition,
    }
}

module.exports = ship;