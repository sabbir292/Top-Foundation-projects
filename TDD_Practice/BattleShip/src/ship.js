const ship = (name) => {
let hitCount = 0;
let length;

    if(name.toLowerCase() === 'carrier') length = 5;
    else if(name.toLowerCase() === 'battleship') length = 4;
    else if(name.toLowerCase() === 'cruiser' || name.toLowerCase() === 'submarine') length = 3;
    else length = 2;

    const hit = () => {
        hitCount += 1;
    }

    const isSunked = () => {
        if(hitCount === length){
            return true
        }else return false;
    }

    return{
        name,
        length,
        hit,
        isSunked,
    }
}

export default ship