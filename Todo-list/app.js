
const form = document.querySelector(".form");
const input = document.querySelector(".enter_todo");
const todoList = document.querySelector(".todoList");
const firstForm = document.querySelector(".form_div");
const secondForm = document.querySelector(".todoList_title");
const clearButton = document.querySelector(".clear_todo")
const filterInput = document.querySelector(".search_todo");

runEvents();
todos = [];

function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    todoList.addEventListener("click", removeTodo);
    clearButton.addEventListener("click", clearAllTodo);
    filterInput.addEventListener("keyup", filter);
}

function filter(e){
    const inputValue = e.target.value.toLowerCase().trim();
    const todoListesi = document.querySelectorAll(".todo_list");
    if(todoListesi.length == 0){
        showAlert("danger", "Filtreleme yapmak için en az 1 todo olmalı")
    }
    else{
        todoListesi.forEach(function(todo){
            if(todo.textContent.toLowerCase().trim().includes(inputValue)){
                todo.setAttribute("style", "display : block,flex");
            }
            else{
                todo.setAttribute("style", "display : none");
            }
        })
    }

}

function clearAllTodo() {
    const todoListesi = document.querySelectorAll(".todo_list");
    // ekrandan silme
    if (todoListesi.length == 0) {
        showAlert("danger", "Silmek için en az 1 todo olmalı");
    }
    else {
        todoListesi.forEach(function (todo) {
            todo.remove();
        })
        // storage'dan silme
        localStorage.clear();

        showAlert("success", "Başarılı bir şekilde silindi");
    }
    
}

function pageLoaded() {
    checkTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoList(todo)
    })
}

function removeTodo(e) {
    if (e.target.className == "fa-solid fa-xmark") {
        // ekrandan silme
        const todo = e.target.parentElement.parentElement
        todo.remove();

        // storage'dan silme
        removeTodotoStorage(todo.textContent);

        showAlert("success", "Todo başarıyla silindi");
    }
}

function removeTodotoStorage(removeTodo) {
    checkTodosFromStorage();
    todos.forEach(function (todo, index) {
        if (removeTodo == todo) {
            todos.splice(index, 1);
        }
        localStorage.setItem("todos", JSON.stringify(todos));
    })

}

function addTodo(e) {
    const inputText = input.value.trim();

    if (inputText == "" || inputText == null) {
        showAlert("warning", "Lütfen boş bırakmayınız");
    }
    else {
        addTodoList(inputText);
        addTodotoStorage(inputText);
        showAlert("success", "Todo eklendi");
    }

    e.preventDefault();
}

function addTodoList(newTodo) {

    // <li class="todo_list"> Todo 1
    //             <a href="#">
    //                 <i class="fa-solid fa-xmark"></i>
    //             </a>
    //         </li>

    const li = document.createElement("li");
    li.className = "todo_list";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";

    const i = document.createElement("i");
    i.className = "fa-solid fa-xmark";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    input.value = "";
}

function addTodotoStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodosFromStorage(newTodo) {
    if (localStorage.getItem("todos") == null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(type, text) {

    // <div class = "alert alert-warning" role = "alert">
    // this is a warning alert-check it out!
    // </div>
    const div = document.createElement("div");
    div.className = "alert alert-" + type;
    div.textContent = text;

    firstForm.appendChild(div);

    setTimeout(function () {
        div.remove();
    }, 1600);
}



