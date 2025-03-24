const ship = document.querySelector('.ship')
const board = document.querySelector('.board')

const initialTopGap = ship.getBoundingClientRect().top
const initialLeftGap = ship.getBoundingClientRect().left

let isdragging = false;
let offsetX,offsetY

for( let i = 0; i < 25; i++){
    const div = document.createElement('div')
    div.classList.add('cell')
    div.setAttribute('id', i)

    board.appendChild(div)     
}

const cells = document.querySelectorAll('.cell')
console.log(cells)

ship.addEventListener('dragstart', (e)=> {
    isdragging = true;

    // let clientX = e.clientX
    // let clientY = e.clientY
    // const leftRect = ship.getBoundingClientRect().left
    // const topRect = ship.getBoundingClientRect().top
    
    // offsetX = clientX - leftRect
    // offsetY = clientY - topRect

})

cells.forEach((cell) => {
    cell.addEventListener('dragover', (e) => {
        e.preventDefault()
    });
});


cells.forEach((cell) => {
    cell.addEventListener('drop', (e) => {

        if (!isdragging) return;
        isdragging = false;
        cell.appendChild(ship)
        
    });
});

ship.addEventListener('click', ()=>{
    const span = document.querySelector('.len3')
    span.classList.toggle('orientation')
})