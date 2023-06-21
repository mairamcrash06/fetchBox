const btn = document.querySelector('.btnajax')
btn.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open("GET", "../json/data.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.onload = () => {
        const data = JSON.parse(request.response)
        // console.log(data);
        document.querySelector('.name1').innerHTML = data[0].name
        document.querySelector('.age1').innerHTML = data[0].age
        //2
        document.querySelector('.name2').innerHTML = data[1].name
        document.querySelector('.age2').innerHTML = data[1].age
        //3
        document.querySelector('.name3').innerHTML = data[2].name
        document.querySelector('.age3').innerHTML = data[2].age
    }
})
const request = new XMLHttpRequest()
request.open("GET", "../json/new.json")
request.setRequestHeader("Content-type", "application/json")
request.send()
request.onload = () => {
    const data = JSON.parse(request.response)
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
}
