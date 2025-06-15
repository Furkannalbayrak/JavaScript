
const getMovie = document.querySelector(".getMovie");
const form = document.querySelector(".form");
const container2 = document.querySelector(".container2");
const showMore = document.querySelectorAll(".showDetails");

runEventListeners();

function runEventListeners(){
    form.addEventListener("submit", listMovie);
    container2.addEventListener("click", (e) =>{
        if(e.target.classList == "showDetails"){
            showDetails(e);
        }
    })
}

function showDetails(e){
    const value = e.target.parentElement.children[0].textContent.trim();
    sessionStorage.setItem("value", value);
    window.open("index2.html", "_blank");
}

async function listMovie(e){
    e.preventDefault();
    const value = getMovie.value.trim();
    const myKey = "d8b2f19f";
    if(value == ""){
        alert("Boş bırakmayınız");
        return;
    }

    const response = await fetch(`http://www.omdbapi.com/?apikey=${myKey}&s=${value}`);
    if(!response.ok){
        alert("İstek basarisiz oldu");
        return;
    }
    const data = await response.json();
    if(data.Response == "False"){
        alert("Film bulunamadi");
        return;
    }

    clearListMovie();

    data.Search.forEach(element => {
        if(element.Poster != "N/A"){
            addNewMovie(element.Title, element.Poster);
        }
    });
    
    getMovie.value = "";
}

function clearListMovie(){
    Array.from(container2.children).forEach((element)=>{
        element.remove();
    })
}

function addNewMovie(name, poster){
    const div = document.createElement("div");
    div.classList = "container2Childs";

    const div2 = document.createElement("div");
    div2.classList = "container2Child";

    const img = document.createElement("img");
    img.classList = "picture";
    img.title = name;
    img.src = poster;

    const p = document.createElement("p");
    p.textContent = name;

    const button = document.createElement("button");
    button.classList = "showDetails";
    button.textContent = "Daha Detayli Görüntüle";

    div.appendChild(img);
    div.appendChild(p);
    div2.appendChild(div);
    div2.appendChild(button);
    container2.appendChild(div2);
}
