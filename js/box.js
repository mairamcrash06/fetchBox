const box = document.querySelector('.box')
const container = document.querySelector('.container')

let left = 0
let ttop = 0

function animation() {
    if (left < 450 && ttop === 0) {
        left++
        box.style.left = left+'px'
    } else if (left === 450 && ttop < 450) {
        ttop++
        box.style.top = ttop+'px'
    } else if (left > 0 && ttop === 450) {
        left--
        box.style.left = left+'px'
    } else if (left === 0 && ttop > 0) {
        ttop--
        box.style.top = ttop+'px'
    }
    setTimeout(animation, 0)
}
animation()
