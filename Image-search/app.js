const form = document.querySelector("#form");
const searchInput = document.querySelector(".searchInput");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector("#imageList-wrapper");

clearButton.classList.add("hidden");

// Event Listeners
form.addEventListener("submit", search);
clearButton.addEventListener("click", clear);

// Temizleme fonksiyonu
function clear(e) {
    e.preventDefault();
    searchInput.value = "";
    imageListWrapper.innerHTML = "";
    clearButton.classList.add("hidden");
}

function search(e){

    const value = searchInput.value.trim();

    //⚠️ Not: Bu proje Unsplash API kullanmaktadır. Kendi kullanımınız için [Unsplash Developers](https://unsplash.com/developers) sayfasından ücretsiz bir API anahtarı
    // alarak `app.js` dosyasındaki `Authorization` kısmındaki "YOUR_ACCESS_KEY" yerine kendi anahtarınızı eklemeniz gerekmektedir.
    
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

// Resmi UI'a ekleme fonksiyonu
function addImageToUI(url, alt) {
    const card = document.createElement("div");
    card.className = "card";
    
    const img = document.createElement("img");
    img.src = url;
    img.alt = alt;
    img.loading = "lazy";
    
    card.appendChild(img);
    imageListWrapper.appendChild(card);
}


