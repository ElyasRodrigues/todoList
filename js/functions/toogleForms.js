const todoList = document.querySelector("#todoList")
const todoForm = document.querySelector("#todoForm")
const editForm = document.querySelector("#editForm")


export default function toggleForms() {
  editForm.classList.toggle("hide")
  todoForm.classList.toggle("hide")
  todoList.classList.toggle("hide")
}