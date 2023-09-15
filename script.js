//const menu = document.getElementById("menu")
//ToDo Make Icons for the Round Reset and Start Button

const time = document.getElementById("time")
const rounds = document.getElementById("rounds")

const startbtn = document.getElementById("startbtn")
const roundbtn = document.getElementById("roundbtn")
const resetbtn = document.getElementById("resetbtn")

let timecount = 0
let intervaler = null

let currentRound = 1


startbtn.addEventListener("click", () => {
    startTime = Date.now()
    intervaler = setInterval(() => {
        let minText
        let secText
        let min = Math.floor(timecount / 60)
        let sec = Math.floor(timecount % 60)

        if (min <= 9) {
            minText = "0" + min
        } else {
            minText = min
        }

        if (sec <= 9) {
            secText = "0" + sec
        } else {
            secText = sec
        }

        time.innerText = minText + " : " + secText

        timecount += 1
    }, 1000)
})


roundbtn.addEventListener("click", () => {


    let min = Math.floor(timecount / 60)
    let sec = Math.floor(timecount % 60)

    let divRow = document.createElement("div")

    let minText
    let secText

    if (min <= 9) {
        minText = "0" + min
    } else {
        minText = min
    }

    if (sec <= 9) {
        secText = "0" + sec
    } else {
        secText = sec
    }

    divRow.innerText = "Round " + currentRound + " " + minText + ":" + secText
    rounds.appendChild(divRow)
    currentRound += 1
})

document.getElementById("stop").addEventListener("click",()=>{
    intervaler != null ? clearInterval(intervaler) : null
})


resetbtn.addEventListener("click", () => {
    intervaler != null ? clearInterval(intervaler) : null
    time.innerText = "00 : 00"
    timecount = 0
    rounds.innerHTML = ""
    currentRound = 0
})