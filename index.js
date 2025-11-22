const arr = [[], [], [], [], [], [], [], [], [], [], []]
const table = document.querySelector(".table")
const form = document.querySelector(".form")
const colum = document.querySelector(".colum")
const baord = document.querySelector(".shape")
const total = document.querySelector(".total")
const steps = document.querySelector(".steps")
let countSteps = 0
let countTotal = 0
total.style.color = "white"
steps.style.color = "white"
steps.style.fontSize = "35px"
total.style.fontSize = "35px"

const createDiv = (x, y) => {
    const newDiv = document.createElement("div")
    if (x === 0 && y === 10) {
        newDiv.textContent = "/"
    }
    else if (x === 0) {
        newDiv.textContent = y + 1
    }
    else if (y === 10) {
        newDiv.textContent = x
    }
    newDiv.style.height = "8vh"
    newDiv.style.width = "7vw"
    newDiv.style.borderRight = "solid 1px black"
    newDiv.style.borderTop = "solid 1px white"
    newDiv.style.backgroundColor = "rgb(222, 222, 222)"
    newDiv.style.textAlign = "center"
    newDiv.style.alignContent = "center"
    newDiv.style.fontSize = "22px"
    newDiv.className = "r" + x + " c" + y
    console.log(newDiv)
    arr[y][x] = newDiv
    table.append(newDiv)
}

console.log(arr)

const fillCards = () => {
    for (let i = 0; i < 11; i++) {
        for (j = 0; j < 11; j++) {
            createDiv(i, j)
        }
    }
    steps.textContent = countSteps + " :steps"
    total.textContent = countTotal + " :total"
}

fillCards()

const creatShape = () => {
    const random = Math.floor(Math.random() * 10) + 1
    for (let i = 1; i <= random; i++) {
        const newDiv = document.createElement("div")
        newDiv.style.height = "4vh"
        newDiv.style.width = "4vh"
        newDiv.textContent = i
        newDiv.style.textAlign = "center"
        newDiv.style.marginLeft = "10vw"
        newDiv.style.alignContent = "center"
        newDiv.style.backgroundColor = "darkgrey"
        newDiv.style.border = "solid 1px black"
        baord.append(newDiv)
    }
    return random
}
let r = creatShape()
for (let i = 0; i < arr.length; i++) {
    arr[i].push(0)
}
form.addEventListener("submit", (element) => {
    element.preventDefault()
    while (baord.lastChild) {
        baord.lastChild.remove()
    }
    const x = colum.value
    colum.value = ""
    if (arr[x][11] + r > 10) {
        alert("opps.... try again")
        window.location.href = "index.html"
    }
    for (let i = arr[x][11]; i < r + arr[x][11]; i++) {
        arr[x - 1][10 - i].style.backgroundColor = "darkslategray"
        //arr[x][i].textContent = ""
    }
    arr[x][11] = arr[x][11] + r
    countTotal += r
    countSteps++
    steps.textContent = countSteps + " :steps"
    total.textContent = countTotal + " :total"
    r = creatShape()
})

const alert("change from colabrator")
alert("yael")
alert ("shifi")
