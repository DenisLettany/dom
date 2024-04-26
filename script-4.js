const firstInput = document.querySelector('#firstname')
const firstDisplay = document.querySelector('#display-firstname')

firstInput.addEventListener('keyup', event => {
    firstSpan.textContent = event.target.value
})

const secondInput = document.querySelector('#age')
const secondDisplay = document.querySelector('#a-hard-truth')

secondInput.addEventListener('keyup', event => {
    if (event.target.value >= 18) {
        secondDisplay.style = ''
    } else {
        secondDisplay.style = 'visibility: hidden'
    }
})

const thirdInput = document.querySelector('#pwd');
const thirdInputConfirmation = document.querySelector('#pwd-confirm');

thirdInput.addEventListener('keyup', () => {
    if (thirdInput.value.length < 6) {
        thirdInput.style.border = '2px solid red'
    } else {
        thirdInput.style.border = ''
    }
})

thirdInputConfirmation.addEventListener('keyup', () => {
    if (thirdInput.value !== thirdInputConfirmation.value) {
    thirdInputConfirmation.style.border = '2px solid red'
    } else {
        thirdInputConfirmation.style.border = ''
    }
})

const select = document.querySelector('#toggle-darkmode')
const body = document.querySelector('body')

select.addEventListener('change', (event) => {
    const selectMode = event.target.value
    if (selectMode === 'dark') {
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
    } else {
        body.style.backgroundColor = ''
       body.style.color = ''
    }
})
