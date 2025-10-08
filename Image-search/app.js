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

// Arama fonksiyonu
async function search(e) {
    e.preventDefault();
    
    const value = searchInput.value.trim();
    
    if (!value) {
        alert("Lütfen bir arama terimi girin!");
        return;
    }
    
    clearButton.classList.remove("hidden");
    // Önceki sonuçları temizle
    imageListWrapper.innerHTML = "";
    
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${value}&per_page=18`, {
            method: "GET",
            headers: {
                Authorization: "Client-ID YOUR_ACCESS_KEY"
            }
        });
        
        const data = await response.json();
        
        if (data.results.length === 0) {
            imageListWrapper.innerHTML = '<p style="color: white; text-align: center; font-size: 18px; grid-column: 1/-1;">Sonuç bulunamadı.</p>';
            return;
        }
        
        data.results.forEach(img => {
            addImageToUI(img.urls.regular, img.alt_description || "Unsplash Image");
        });
        
    } catch (err) {
        console.error("Hata:", err);
        imageListWrapper.innerHTML = '<p style="color: white; text-align: center; font-size: 18px; grid-column: 1/-1;">Bir hata oluştu. Lütfen tekrar deneyin.</p>';
    }
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




