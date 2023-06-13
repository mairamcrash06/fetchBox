const inp = document.querySelector('input')
const acc = document.querySelector('.accept')
const chang = document.querySelector('.changeble')
const reg = /^\w+@+\w+\.+\w/

acc.onclick = () => {
    if (reg.test(inp.value)) chang.innerHTML = 'correct'
    else chang.innerHTML = 'incorrect'
}
