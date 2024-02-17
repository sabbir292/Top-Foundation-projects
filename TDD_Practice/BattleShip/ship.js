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

    return{
        hit,
        isSunk,
    }
}

module.exports = ship;