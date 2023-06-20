//TAB SLIDER 
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
const tabContent = document.querySelectorAll('.tab_content_block')
let num = 0

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}
const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                num = i
                clearInterval(interv)
                interv = setInterval(updTabs, 3000)
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}
function updTabs() {
    num++;
    if (num === 5) {
        num = 0
    }
    hideTabContent()
    showTabContent(num)

}

let interv = setInterval(updTabs, 3000)