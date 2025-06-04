
const form = document.querySelector(".form");
const input = document.querySelector(".getTask");
const list = document.querySelector(".showList");
const clearButton = document.querySelector(".clearAll");

runEventListeners();
dizi = [];

function runEventListeners(){
    document.addEventListener("DOMContentLoaded", pageLoaded);

    form.addEventListener("submit", addTask);
    list.addEventListener("click", removeTask);
    list.addEventListener("click", checkCircle)
    clearButton.addEventListener("click", clearAllTask);
}

function pageLoaded(){
    if(localStorage.getItem("dizi") == null){
        dizi = [];
    }
    else{
        dizi = JSON.parse(localStorage.getItem("dizi"));
    }
    //const dizi = JSON.parse(localStorage.getItem("dizi")) || []; //eger dizi yoksa boş dizi oluştur
    const circles = JSON.parse(localStorage.getItem("circles")) || {}; // Eğer circles yoksa boş obje oluştur

    dizi.forEach((element) =>{
        addNewList(element);

        const taskItem = Array.from(document.querySelectorAll("li")).find(
            (li) => li.textContent.trim() === element
        );

        const circle = taskItem.querySelector(".circle");
        if(circles[element] == "completed") {
            circle.style.backgroundColor = "red";
        }
    })
}

function checkCircle(e){
    if(e.target.className == "fa-regular fa-circle circle"){

        const taskName = e.target.parentElement.parentElement.textContent.trim();

        if(e.target.style.backgroundColor == "red"){
            e.target.style.backgroundColor = "white";
            taskCircle(taskName, "incompleted");
        }
        else{
            e.target.style.backgroundColor = "red";
            taskCircle(taskName, "completed");
        }
    }
}

function taskCircle(taskName, status){
    let circles = JSON.parse(localStorage.getItem("circles")) || {};
    circles[taskName] = status;
    localStorage.setItem("circles", JSON.stringify(circles));
}

function removeStorageCircle(taskName){
    let circles = JSON.parse(localStorage.getItem("circles")) || {};

    delete circles[taskName];
    
    localStorage.setItem("circles", JSON.stringify(circles));
}

function clearAllTask(){

    if(list.children.length == 0){
        alert("En az bir görev bulunmalı !");
        return;
    }

    Array.from(list.children).forEach((element) =>{
        element.remove();
    })

    localStorage.clear();
    dizi = [];
}

function removeTask(e){
    if(e.target.className == "fa-solid fa-xmark xmark"){

        const task = e.target.parentElement.parentElement;
        task.remove();

        removeStorage(task);
        removeStorageCircle(task.textContent);
    }
}

function removeStorage(task){

    dizi.forEach((element, index) =>{
        if(task.textContent == element){
            dizi.splice(index, 1);
        }
    })
    localStorage.setItem("dizi", JSON.stringify(dizi));
}

function addTask(e){
    e.preventDefault();
    const value = input.value.trim();

    if(value == ""){
        alert("Lütfen bir görev giriniz !");
        return;
    }

    addNewList(value);
    addtoStorage(value);

    input.value = "";
}

function addtoStorage(value){
    dizi.push(value);
    localStorage.setItem("dizi", JSON.stringify(dizi));
}

function addNewList(value){
    const li = document.createElement("li");
    li.classList = "showListChild";
    
    const i = document.createElement("i");
    i.classList = "fa-solid fa-xmark xmark";

    const div = document.createElement("div");
    div.classList = "todoName";
    div.textContent = value;
    
    const div2 = document.createElement("div");
    div.classList = "options";


    const i2 = document.createElement("i");
    i2.classList = "fa-regular fa-circle circle";

    li.appendChild(div);

    div2.appendChild(i2);
    div2.appendChild(i);
    
    li.appendChild(div2);
    list.appendChild(li);
}
