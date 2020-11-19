
const readline = require('readline')
const data = require('./data.js')
let todos = data.todos

const COMPLETE_MARK = '✅'
const INCOMPLETE_MARK = '✖'

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const displayMenu = () => {
  const menu = `
  Your options are:

  1. Add a todo.
  2. Remove a todo.
  3. Remove all completed todos.
  4. Toggle a todo's completion status.
  5. Toggle a todo's priority.
  6. Quit.
  
  `
  interface.question(menu, select)
}

const removeCompleted = () => {
  console.log(todos = todos.filter((todo) => todo.isComplete === true ? false : true))
  toDoList()
  displayMenu()
}

const togglePriority = (num) => {
  const i = num - 1
  const todo = todos[i]
  todo.priority = todo.priority === 1 ? 2 : 1
  toDoList()
  displayMenu()
}

const toggleComplete = (num) => {
  const i = num - 1
  const todo = todos[i]
  todo.isComplete = todo.isComplete ? false : true
  toDoList()
  displayMenu()
}

const remove = (selection) => {
  todos.splice(Number(selection) - 1, 1)
  toDoList()
  displayMenu()
}

const toDoList = () => {
  console.clear()
  console.log(`Here are your todo's:\n`)
  for (let i = 0; i < todos.length; i++) {
    console.log(`${i + 1}. ${todos[i].text} - Priority: ${todos[i].priority} ${todos[i].isComplete === true ? COMPLETE_MARK : INCOMPLETE_MARK}`)
  }
}

const add = (userInput) => {
  const obj = {}
  obj.text = userInput;
  obj.isComplete = false;
  obj.priority = 2;
  todos.push(obj)
  toDoList(obj)
  displayMenu()

}

const select = (userInput) => {

  switch (userInput) {

    case '1':
      console.clear()
      toDoList()
      interface.question(`\nWhat should go on your todo list?\n`, add)
      break;

    case '2':
      console.clear()
      toDoList()
      interface.question(`\nWhich todo would you like to remove?\n`, remove)
      break;

    case '3':
      console.clear()
      removeCompleted()
      break;

    case '4':
      console.clear()
      toDoList()
      interface.question(`\nWhich todo would you like to ✅ or ✖?\n`, toggleComplete)
      break;

    case '5':
      console.clear()
      toDoList()
      interface.question(`\nWhich todo priority would you like to toggle?\n`, togglePriority)
      displayMenu()
      break;

    case '6':
      console.log(`Quitting!`)
      interface.close()
      break;
  }
};

toDoList()
displayMenu()



