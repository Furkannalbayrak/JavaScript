
const input = document.querySelector(".getCity");
const sonuclar = document.querySelector(".sonuclar");
const form = document.querySelector(".getInputChild");

const sehirAd = document.querySelector(".sehirAd");
const sicaklik = document.querySelector(".sicaklik");
const aciklama = document.querySelector(".aciklama");
const hissedilenSicaklik = document.querySelector(".hissedilenSicaklik")
const ruzgarHizi = document.querySelector(".ruzgarHizi");
const nem = document.querySelector(".nem");
const bulutOrani = document.querySelector(".bulutOrani");

runEventListeners();

function runEventListeners(){
    form.addEventListener("submit", getData);                                
}

async function getData(e){
    e.preventDefault();
    const value = input.value.trim();
    const myKey = "49d3ef97a73450a14638507417027c8f";

    if(value == ""){
        alert("Lütfen bir şehir ismi girin !");
        return;
    }

    sonuclar.classList.add("hidden"); 

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&lang=tr&appid=${myKey}`);
    if(!response.ok){
        alert("Şehir bulunamadı veya bir hata oluştu !");
        return;
    }
    const data = await response.json(); 

    sehirAd.textContent = data.name;
    sicaklik.textContent = `Sıcaklık : ${data.main.temp}°C`;
    hissedilenSicaklik.textContent = `Hissedilen Sıcaklık : ${data.main.feels_like}°C`;
    aciklama.textContent = `Durum : ${data.weather[0].description}`;
    ruzgarHizi.textContent = `Rüzgar Hızı : ${data.wind.speed} km/s`;
    nem.textContent = `Nem : %${data.main.humidity}`;
    bulutOrani.textContent = `Bulut Oranı : %${data.clouds.all}`;

    sonuclar.classList.remove("hidden");

    input.value = "";
}


