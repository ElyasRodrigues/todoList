import { oldInputValue } from "../script.js"
import { updateTodoLocalStorage } from "./localStorage.js"

export default function uptadeTodo (text) {
  const todos = document.querySelectorAll(".todo")

  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3")

    if(todoTitle.innerText === oldInputValue) {
      todoTitle.innerText = text

      // LocalStorage
      updateTodoLocalStorage(oldInputValue, text)
    }
  })
}
