import saveTodo from "./functions/saveTodo.js"
import toggleForms from "./functions/toogleForms.js"
import uptadeTodo from "./functions/uptadeTodo.js"
import { getSearchedTodos, filterTodos } from "./functions/searchOfFilter.js"
import { loadTodos, removeTodoLocalStorage, uptadeTodoStatusLocalStorage } from "./functions/localStorage.js"

// Seleção de elementos
const todoForm = document.querySelector("#todoForm")
const todoInput = document.querySelector("#todoInput")
const editForm = document.querySelector("#editForm")
const editInput = document.querySelector("#editInput")
const cancelEditBtn = document.querySelector("#cancelEditBtn")
const searchInput = document.querySelector("#searchInput")
const eraseBtn = document.querySelector("#eraseBtn")
const filterSelect = document.querySelector("#filterSelect")

export let oldInputValue

// Eventos

todoForm.addEventListener("submit", (e) => {
  e.preventDefault()
  
  const inputValue = todoInput.value

  if(inputValue){
    saveTodo(inputValue)
  }
})

document.addEventListener("click", (e) => {
  const targetEl = e.target
  const parentEl = targetEl.closest("div")
  let todoTitle;

  if(parentEl && parentEl.querySelector("h3")){
    todoTitle = parentEl.querySelector("h3").innerText
  }

  if(targetEl.classList.contains("finishTodo")){
    parentEl.classList.toggle("done")

    uptadeTodoStatusLocalStorage(todoTitle)
  }

  if(targetEl.classList.contains("removeTodo")){
    const confirRemove = confirm("Deseja remover essa tarefa?")
    if(confirRemove){
      parentEl.remove()
      removeTodoLocalStorage(todoTitle)
    }
  }

  if(targetEl.classList.contains("editTodo")){
    toggleForms()

    editInput.value = todoTitle
    oldInputValue = todoTitle
  }
})

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault()
  toggleForms()
})

editForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const editInputValue = editInput.value

  if(editInputValue){
    uptadeTodo(editInputValue)
  }

  toggleForms()
})

searchInput.addEventListener("keyup", (e) => {
  const search = e.target.value

  getSearchedTodos(search)
})

eraseBtn.addEventListener("click", (e) => {
  e.preventDefault()

  searchInput.value = ""

  searchInput.dispatchEvent(new Event("keyup"))
})

filterSelect.addEventListener("change", (e) => {
  const filterValue = e.target.value

  filterTodos(filterValue)
})

loadTodos()