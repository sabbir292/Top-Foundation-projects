import generateJokes from "./joke";
import './app.css'

console.log(generateJokes())
const div = document.createElement('div')
div.textContent = generateJokes()
div.classList.add('joke')

const body = document.querySelector('body')
body.appendChild(div)
