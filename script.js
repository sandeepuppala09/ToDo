// variables
let input = document.getElementById("input")
let todoContainer = document.getElementById("todoContainer")
var item

// to get previous value of item from local storage or set give value to item if it's run first time
if (localStorage.getItem("item") == null) {
  localStorage.setItem("item", "1")
  item = 1
}
else {
  item = localStorage.getItem("item")
  let i = 1
  while (localStorage.getItem(`text${i}`) != null) {
    todoContainer.innerHTML += `
        <div class="todoItem" id="cont${i}">
            <div id="val${i}">${localStorage.getItem(`text${i}`)}</div>
            <div>
                <button class="todoBtn" id="edit${i}" onclick="todoEdit(this.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>
                </button>
                <button class="todoBtn" id="rem${i}" onclick="todoRemove(this.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/></svg>
                </button>
            </div>
        </div>
        `
    i++
  }
}

// when we press enter after entering text in input box press it will add ToDo
let enterr = document.getElementById("input")
enterr.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    document.getElementById("addd").click();
  }
})

// to add new todo
const addd = () => {
  if (input.value) {
    localStorage.setItem(`text${item}`, input.value)
    todoContainer.innerHTML += `
        <div class="todoItem" id="cont${item}">
            <div id="val${item}">${localStorage.getItem(`text${item}`)}</div>
            <div>
                <button class="todoBtn" id="edit${item}" onclick="todoEdit(this.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>
                </button>
                <button class="todoBtn" id="rem${item}" onclick="todoRemove(this.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/></svg>
                </button>
            </div>
        </div>
        `
    input.value = ``
    item++
    localStorage.setItem("item", item)
  }
  else {
    input.value = 'Enter something'
  }
}

// to clear local storage
const removeall = () => {
  localStorage.clear()
  localStorage.setItem("item", "1")
  item = 1          // and reset value of variable "item" in js not in local storage
  input.value = ``
  todoContainer.innerHTML = ``
}

// to edit the todo
const todoEdit = (a) => {
  a = a.replace("edit", "val")
  input.value = `${document.getElementById(a).innerHTML}`
  document.getElementById("addd").setAttribute("onclick", "okk()")
  document.getElementById("addd").innerText = "ok"
  let b = a.replace("val", "")
  localStorage.setItem("b", b)
}
const okk = () => {
  let b = localStorage.getItem("b")
  let a = 'val' + b
  localStorage.setItem(`text${b}`, input.value)
  document.getElementById(a).textContent = localStorage.getItem(`text${b}`)
  input.value = ``
  document.getElementById("addd").setAttribute("onclick", "addd()")
  document.getElementById("addd").innerText = "Add text"
}


// to remove the todo
const todoRemove = (a) => {
  a = a.replace("rem", "cont")
  document.getElementById(a).remove()
  a = a.replace("cont", "")
  a = Number.parseInt(a)

  // rearranging the todos and renaming the id of all tags
  if (a == item - 1) {
    localStorage.removeItem(`text${a}`)
  }
  else {
    let c
    while (a < (item - 1)) {
      c = a + 1
      let value = localStorage.getItem(`text${c}`)
      localStorage.setItem(`text${a}`, value)
      let cont1 = 'cont' + c, cont2 = 'cont' + a
      // console.log(cont1, cont2)
      document.getElementById(cont1).setAttribute("id", cont2)
      document.getElementById(('val' + c)).setAttribute("id", ('val' + a))
      document.getElementById(('edit' + c)).setAttribute("id", ('edit' + a))
      document.getElementById(('rem' + c)).setAttribute("id", ('rem' + a))
      // console.log(a)
      a++
    }
    localStorage.removeItem(`text${a}`)
  }
  localStorage.setItem("item", (item - 1))    // decreased value of key="item" in local storage
  item = item - 1                 //  decreased value of variable "item" in js not in local storage
}

window.onload = function() {
  input.focus();
}