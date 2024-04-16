const article = document.querySelector('article')
const group = ['Ludovic', 'Mohamed', 'Adrien']
const randomValue = () => Math.round(Math.random() * 255)
const mixArray = array => array.sort(() => Math.random() - 0.5)
const newGroupOrder = mixArray(group)

const sections = newGroupOrder.map(name => {
    const section = document.createElement('section')
    section.style.backgroundColor = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`
    const p = document.createElement('p')
    p.innerText = `${name}`
    section.append(p)

    return section
})

article.append(...sections)

const body = document.querySelector('body')
const oneOrTwo = () => Math.round(Math.random()) + 1
const textPage = document.querySelectorAll('body *')

if (oneOrTwo() === 1) {
    body.style.backgroundColor = 'black'
    textPage.forEach(element => {
        element.style.color = 'white'
    });
}