
const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector(".searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector("#imageList-wrapper");

runEventListeners();

function runEventListeners(){
    searchButton.addEventListener("click", search);
    clearButton.addEventListener("click", clear);
}

function clear(e){
    searchInput.value = "";
    Array.from(imageListWrapper.children).forEach((image)=>{
        image.remove();
    })
    e.preventDefault();
}

function search(e){

    const value = searchInput.value.trim();

    fetch(`https://api.unsplash.com/search/photos?&query=${value}`, {
        method: "GET",
        headers: {
            Authorization : "Client-ID PXpXWwyObwG7lCSoHvAHYw57Ebm6QWFQAN1dpv6RRuI"
        }
    })
    .then((res)=> res.json())
    .then((data)=>{
        Array.from(data.results).forEach((img)=>{
            addImageToUI(img.urls.small);
        })
    })
    .catch((err)=> console.log(err));

    e.preventDefault();
}

function addImageToUI(url){
    const div = document.createElement("div");
    div.className = "card"

    const img = document.createElement("img");
    img.className = "card-picture"
    img.src = url;
    img.width="400";
    img.height="400";

    div.appendChild(img);
    imageListWrapper.appendChild(div);
}

