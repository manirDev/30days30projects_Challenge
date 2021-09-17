

const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUl = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))
if(todos){
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    addTodo()
})

function addTodo(todo){
    let todoText= input.value
    if(todo){
        todoText= todo.text
    }
    if(todoText){
        const todoEl =document.createElement('li')
       todoEl.classList.add('panel')
        todoEl.innerText=todoText
        todosUl.appendChild(todoEl)
        input.value= ''
        updateLs()
    }
}

function updateLs(){
    const todosEL = document.querySelectorAll('li')
    const todos =[]
    todosEL.forEach(todoEl =>{
        todos.push({
            text: todoEl.innerText
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}