let defaultColor = '#000';
let color = defaultColor;
let grid = 16;
let isRandom = false;
let eraser = false;
let gridItems = null

const gridContainer = document.querySelector('.container')
const sizeBtn = document.querySelector('.grid-size')
const rainbowBtn = document.querySelector('.rainbow')
const eraserBtn = document.querySelector('.eraser')
const resetBtn = document.querySelector('.reset')

sizeBtn.addEventListener('click', optGridSize)
rainbowBtn.addEventListener('click', () => {
    isRandom = true
    eraser = false
    defaultColor = null
})

eraserBtn.addEventListener('click', () => {
    isRandom = false
    eraser = true
    defaultColor = null
})
resetBtn.addEventListener('click', () => {
    isRandom = false
    eraser = true
    grid = 16
    defaultColor = '#000'
    createGrid()
})

function createGrid() {

    while (gridContainer.firstChild) {
        gridContainer.firstChild.remove()
    }

    for (let i = 0; i < grid; i++) {

        for (let j = 0; j < grid; j++) {
            const gridItem = document.createElement('div')
            gridItem.classList.add('grid-item')
            gridContainer.appendChild(gridItem)
        }
    }
    gridContainer.style.display = `grid`;
    gridContainer.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
    gridItems = document.querySelectorAll('.grid-item')


    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {

            const randomColor = createRandomColor()
            color = defaultColor

            if (defaultColor) {
                color = defaultColor
            }
            else if (isRandom) {

                color = randomColor
            }
            else if (eraser) {
                color = 'rgb(217, 223, 223)'
            }

            item.style.background = color
        })
    })
}
createGrid()


function optGridSize() {
    const gridSize = prompt('Choose your preffered grid size. make sure it is not more than 100', 16)

    if (gridSize > 100) {
        alert('Kindly choose a size within 100')
    } else {
        grid = gridSize
        createGrid()
        defaultColor = "#000"
    }
}

function createRandomColor() {

    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const alpha = Math.random()

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}


