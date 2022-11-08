import { saveTodoLocalStorage } from "./localStorage.js"

const todoList = document.querySelector("#todoList")
const todoInput = document.querySelector("#todoInput")


export default function saveTodo (text, done = 0, save = 1) {
  const todo = document.createElement("div")
  todo.classList.add("todo")

  const todoTitle = document.createElement("h3")
  todoTitle.innerText = text
  todo.appendChild(todoTitle)

  const doneBtn = document.createElement("button")
  doneBtn.classList.add("finishTodo")
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
  todo.appendChild(doneBtn)

  const editBtn = document.createElement("button")
  editBtn.classList.add("editTodo")
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
  todo.appendChild(editBtn)

  const deleteBtn = document.createElement("button")
  deleteBtn.classList.add("removeTodo")
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  todo.appendChild(deleteBtn)

  // Utilizando dados da localStorage
  if(done){
    todo.classList.add("done")
  }
  if(save){
    saveTodoLocalStorage({text, done: 0})
  }

  todoList.appendChild(todo)

  todoInput.value = ""
  todoInput.focus()
}