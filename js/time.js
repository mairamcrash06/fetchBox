let number = 0

const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const clear = document.querySelector('.clear')
let timer;

function increase() {
    number++
    document.querySelector('.zero').innerHTML = number

}
start.onclick = () => {
    timer = setInterval(increase, 100) 
}
stop.onclick = () => {
    clearInterval(timer) 
}
clear.onclick = () => {
    number = 0
    document.querySelector('.zero').innerHTML = number
    clearInterval(timer)
}

