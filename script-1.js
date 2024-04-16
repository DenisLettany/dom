const title = document.querySelector('title')
console.log(title)

title.innerText = 'Modifying the DOM'

const body = document.querySelector('body')
body.style.backgroundColor = '#FF69B4'

const bodyChildren = document.body.children;
for (const child of bodyChildren) {
  console.log(child)
}