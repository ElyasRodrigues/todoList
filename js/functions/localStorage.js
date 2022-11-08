import saveTodo from "./saveTodo.js"

function getTodosLocalStorage () {
  const todos = JSON.parse(localStorage.getItem("to-dos")) || []

  return todos
}

function loadTodos () {
  const todos = getTodosLocalStorage()

  todos.forEach((todo) => {
    saveTodo(todo.text, todo.done, 0)
  })
}

function saveTodoLocalStorage (todo) {
  const todos = getTodosLocalStorage()

  todos.push(todo)

  localStorage.setItem("to-dos", JSON.stringify(todos))
}

function removeTodoLocalStorage (todoText) {
  const todos = getTodosLocalStorage()

  const filteredTodos = todos.filter((todo) => todo.text != todoText)

  localStorage.setItem("to-dos", JSON.stringify(filteredTodos))
}

function uptadeTodoStatusLocalStorage (todoText) {
  const todos = getTodosLocalStorage()

  todos.map((todo) => { 
    todo.text === todoText ? (todo.done = !todo.done) : null 
  })

  localStorage.setItem("to-dos", JSON.stringify(todos))
}

function updateTodoLocalStorage (todoOldText, todoNewText) {
  const todos = getTodosLocalStorage()
  
  todos.map((todo) => {
    todo.text === todoOldText ? (todo.text = todoNewText) : null
  })

  localStorage.setItem("to-dos", JSON.stringify(todos))
}

export { loadTodos, saveTodoLocalStorage, removeTodoLocalStorage, uptadeTodoStatusLocalStorage, updateTodoLocalStorage }