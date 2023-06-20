const inp = document.querySelector('input')
const acc = document.querySelector('.accept')
const chang = document.querySelector('.changeble')
const reg = /^\w+@+\w+\.+\w/

// acc.onclick = () => {
//     if (reg.test(inp.value)) chang.innerHTML = 'correct'
//     else chang.innerHTML = 'incorrect'
// }



//modal
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()

modal.onclick = () => {
    if (event.target === modal) {
        closeModal()
    }
}
setTimeout(function () { 
    openModal(); 
}, 10000);

window.addEventListener('scroll', () => {
    const currentHeight = document.documentElement.scrollHeight - window.scrollY
    if (currentHeight === document.documentElement.clientHeight ) {
        openModal()
    }
})
