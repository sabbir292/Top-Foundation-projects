let userChoosen = null
let round = 1
let userScore = 0
let computerScore = 0
let drawCount = 0


const modal = document.querySelector('.modal')
const inputBtn = document.querySelectorAll('.input-btn')
const playAgainBtn = document.querySelector('.play-again')


inputBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.id === 'rock') userChoosen = 'rock'
        if (btn.id === 'paper') userChoosen = 'paper'
        if (btn.id === 'scissor') userChoosen = 'scissor'

        playGame()
        round++
    })
})


const playGame = () => {
    const choices = ["rock", "paper", "scissor",]
    let message = ''

    const roundCount = document.querySelector('.round')
    const userScoreCount = document.querySelector('.user-score')
    const computerScoreCount = document.querySelector('.computer-score')
    const drawScoreCount = document.querySelector('.draw-score')
    const showUserChoice = document.querySelector('.user-choice')
    const showComputerChoice = document.querySelector('.computer-choice')
    const roundOutput = document.querySelector('.round-output')


    roundCount.textContent = round

    const randomChoice = () => {
        return Math.floor(Math.random() * 3)
    }
    const random = randomChoice()
    const computerChoice = choices[random]



    if (userChoosen === computerChoice) {
        roundOutput.textContent = `It's a draw between ${userChoosen} & ${computerChoice}`
        drawCount++
        drawScoreCount.textContent = `draw: ${drawCount}`

    }

    else if (((userChoosen === 'rock') && (computerChoice === 'scissor') || (userChoosen === 'paper') && (computerChoice === 'rock') || (userChoosen === 'scissor') && (computerChoice === 'paper'))) {
        userScore++
        roundOutput.textContent = `User wins!  ${userChoosen} has beaten ${computerChoice}`
        userScoreCount.textContent = `user: ${userScore}`

    }

    else {
        roundOutput.textContent = `Ai wins!  ${computerChoice} has beaten ${userChoosen}`
        computerScore++
        computerScoreCount.textContent = `computer: ${computerScore}`
    }

    // Display user choice ---with animation

    if (userChoosen === 'rock') {
        showUserChoice.textContent = '✊'
        showUserChoice.classList.add('animated')
    }
    else if (userChoosen === 'paper') {
        showUserChoice.textContent = '✋'
        showUserChoice.classList.add('animated')
    }
    else if (userChoosen === 'scissor') {
        showUserChoice.textContent = '✌️'
        showUserChoice.classList.add('animated')
    }

    if (computerChoice === 'rock') {
        showComputerChoice.textContent = '✊'
        showComputerChoice.classList.add('animatedLeft')
    }
    else if (computerChoice === 'paper') {
        showComputerChoice.textContent = '✋'
        showComputerChoice.classList.add('animatedLeft')
    }
    else if (computerChoice === 'scissor') {
        showComputerChoice.textContent = '✌️'
        showComputerChoice.classList.add('animatedLeft')
    }

    // remove animation ----

    setTimeout(() => {
        showComputerChoice.classList.remove('animatedLeft')
        showUserChoice.classList.remove('animated')
    }, 500);


    // round of 10----

    if (round === 10) {

        const messageContent = document.querySelector('.message-content')


        if (userScore === computerScore) {
            message = `It's a draw between the User and Ai`
        }
        else if (userScore > computerScore) {
            message = `User have defeated the Ai`
        }
        else {
            message = `User has been defeated by Ai`
        }
        rock.disabled = true
        paper.disabled = true
        scissor.disabled = true
        modal.classList.add('show-modal')
        messageContent.textContent = message

    }

    //  reset funcion


    return function reset() {
        userScore = 0
        computerScore = 0
        drawCount = 0
        round = 1
        message = ''
        rock.disabled = false
        paper.disabled = false
        scissor.disabled = false
        roundCount.textContent = 0
        computerScoreCount.textContent = `computer: ${computerScore}`
        userScoreCount.textContent = `computer: ${userScore}`
        drawScoreCount.textContent = `computer: ${drawCount}`
        showComputerChoice.textContent = ''
        showUserChoice.textContent = ''
        roundOutput.textContent = ``
    }

}


const playAgain = () => {
    modal.classList.remove('show-modal')
    console.log('close')
    const reset = playGame()
    reset()
}
playAgainBtn.addEventListener('click', playAgain)

