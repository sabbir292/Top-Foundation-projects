const Turns = () =>{
    let turn = 'player'
    const changeTurn = () => {
        turn === 'player'? turn = 'computer' : turn = 'player'
    }
    const getTurn = ()=> {
        return turn
    }
    return{
        getTurn,
        changeTurn
    }
} 

export default Turns