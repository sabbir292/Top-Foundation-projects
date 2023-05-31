const calculator = (() => {

    let num1 = ''
    let oparator = null
    let displayedVal = ''
    let resultVal = ''

    // ui
    const buttons = document.querySelectorAll('.btn')
    const display = document.querySelector('.display')
    const equalBtn = document.querySelector('.equal')
    const oparators = document.querySelectorAll('.oparator')
    const dotBtn = document.querySelector('.dot')
    const clearBtn = document.querySelector('.clear')
    const allClearBtn = document.querySelector('.all-clear')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('number')) {
                if (resultVal) {
                    resultVal = ''
                    displayedVal = ''
                    displayedVal += btn.textContent
                }
                else {
                    displayedVal += btn.textContent
                }
            }
            display.textContent = displayedVal

        })
    })

    dotBtn.addEventListener('click', appendDot)

    function appendDot() {
        if (!displayedVal.includes('.')) {
            display.textContent = displayedVal += this.textContent
        }
    }

    oparators.forEach(btn => {
        btn.addEventListener('click', setOparator)
    })

    function setOparator() {
        if (oparator) {
            displayedVal = operate(num1, displayedVal, oparator)
            display.textContent = Math.round((displayedVal + Number.EPSILON) * 100) / 100
        }
        num1 = displayedVal
        oparator = this.textContent
        displayedVal = ''
    }

    equalBtn.addEventListener('click', () => {
        if (!oparator || !displayedVal) {
            alert('Please enter a proper parameter')
            return
        }
        resultVal = operate(num1, displayedVal, oparator)
        displayedVal = Math.round((resultVal + Number.EPSILON) * 100) / 100
        display.textContent = displayedVal
        num1 = ''
        oparator = null
    })

    // clear

    clearBtn.addEventListener('click', clear)
    allClearBtn.addEventListener('click', allClear)

    function clear() {
        displayedVal = displayedVal.slice(0, displayedVal.length - 1)
        display.textContent = displayedVal
    }
    function allClear() {
        displayedVal = ''
        display.textContent = displayedVal
    }



    function add(num1, num2) {
        return parseFloat(num1) + parseFloat(num2)
    }
    function subtract(num1, num2) {
        return parseFloat(num1) - parseFloat(num2)
    }
    function multiply(num1, num2) {
        return parseFloat(num1) * parseFloat(num2)
    }
    function divide(num1, num2) {
        return parseFloat(num1) / parseFloat(num2)
    }


    function operate(num1, num2, oparator) {
        if (oparator === '+') {
            return add(num1, num2)
        }
        else if (oparator === '-') {
            return subtract(num1, num2)
        }
        else if (oparator === '*') {
            return multiply(num1, num2)
        }
        else if (oparator === '/') {
            return divide(num1, num2)
        }
    }
})()
