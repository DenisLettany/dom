const importantClass = document.querySelectorAll('.important')
importantClass.forEach(element => {
    element.setAttribute('title', 'This is an important item')
})

const imgTagsWtithoutImportant = document.querySelectorAll('img:not(.important)')
imgTagsWtithoutImportant.forEach(element => {
    element.style.display = 'none'
})

const randomValue = () => Math.round(Math.random() * 255)
const pTags = document.querySelectorAll('p')
pTags.forEach(element => {
    console.log(element.innerText)
    if (element.className) {
        console.log(element.className)
    }
    if (!element.className) {
        element.style.color = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`
    }
})