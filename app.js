let colorName = ["purple", "green", "blue", "orange", "red", "coral", "cornflowerblue", "crimson"]

let btnAction = document.getElementById("btnAction")
let colorId = document.getElementById("colorId")
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
function randomHexColorCode() {
    let n = (Math.random() * 0xffffff * 1000000).toString(16)
    return '#' + n.slice(0, 6)
}

// Button Simple

let btnSimple = document.getElementById("btnSimple")
btnSimple.addEventListener("click", () => {
    let currentIndex = 0
    btnAction.addEventListener("click", () => {
        document.body.style.backgroundColor = colorName[currentIndex]
        colorId.textContent = colorName[currentIndex]
        currentIndex = randomNumber(0, 8)
    })
})

// Button Hex

let btnHex = document.getElementById("btnHex")
btnHex.addEventListener("click", () => {
    btnAction.addEventListener("click", () => {

        document.body.style.background = randomHexColorCode()
        colorId.textContent = randomHexColorCode()
    })
})

btnHex.addEventListener("click", () => {
    btnHex.style.color = "white"
    btnHex.style.background = "red"
    btnSimple.style.color = "black"
    btnSimple.style.background = "#f0f0f0"
})

btnSimple.addEventListener("click", () => {
    btnSimple.style.color = "white"
    btnSimple.style.background = "red"
    btnHex.style.color = "black"
    btnHex.style.background = "#f0f0f0"
})