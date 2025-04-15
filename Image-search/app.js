
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

    ⚠️ Not: Bu proje Unsplash API kullanmaktadır. Kendi kullanımınız için [Unsplash Developers](https://unsplash.com/developers) sayfasından ücretsiz bir API anahtarı
    alarak `app.js` dosyasındaki `Authorization` kısmına kendi anahtarınızı eklemeniz gerekmektedir.
    
    fetch(`https://api.unsplash.com/search/photos?&query=${value}`, {
        method: "GET",
        headers: {
            Authorization : "Client-ID YOUR_ACCESS_KEY"
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

