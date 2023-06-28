const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const fetchBox = document.querySelector('.fetchBox')

let count = 1

function getTodos () {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            fetchBox.innerHTML = `
                <p>User ID: ${data.userId}</p>
                <p>Todo ID: ${data.id}</p>
                <p>Title: ${data.title}</p>
                <p>Completed: ${data.completed}</p>
            `
            if (data.completed) {
                fetchBox.style.backgroundColor = 'green'
            }
            else if (!data.completed) {
                fetchBox.style.backgroundColor = 'red'
            }
        })
        .catch(error => console.error(error))
}

prev.onclick = () => {
    count--;
    getTodos();
};

next.onclick = () => {
    count++;
    getTodos();
};

// задание - 2

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(post => console.log(post))