// ------------ VUCUT KİTLE ENDEKSİ ------------

let boy = Number(prompt("Boyunuzu giriniz : "));
let kilo = Number(prompt("Kilonuzu giriniz : "));

boy /= 100;
boy **= 2;

let kitleEndeksi = kilo / boy;

if(40 <= kitleEndeksi){
    alert("İdeal Kilonun Çok Üstündesiniz (morbid obez)  --> " + kitleEndeksi);
}
else if(30 <= kitleEndeksi){
    alert("İdeal Kilonun Çok Üstünesiniz (obez)  --> " + kitleEndeksi);
}
else if(25 <= kitleEndeksi){
    alert("İdeal Kilonun Üstündesiniz  --> " + kitleEndeksi);
}
else if(18.5 <= kitleEndeksi){
    alert("İdeal Kilodasınız  --> " + kitleEndeksi);
}
else{
    alert("İdeal Kilonun Altındasınız  --> " + kitleEndeksi);
}