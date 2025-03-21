// ------------ ÜRÜN ARAMA -------------

let urun1 = {
    isim : "ACER swift 3",
    kategori : "oyuncu leptobu",
    fiyat : 15.458
}
let urun2 = {
    isim : "ACER aspire 3",
    kategori : "oyuncu leptobu",
    fiyat : 12.499
}
let urun3 = {
    isim : "LENOVO V15",
    kategori : "oyuncu leptobu",
    fiyat : 10.499
}
let urun4 = {
    isim : "LENOVO ideaPad 3",
    kategori : "oyuncu leptobu",
    fiyat : 18.999
}
let urun5 = {
    isim : "ASUS tuf gaming",
    kategori : "oyuncu leptobu",
    fiyat : 23.999
}
let urun6 = {
    isim : "ASUS vivobook",
    kategori : "oyuncu leptobu",
    fiyat : 16.299
}
let urun7 = {
    isim : "HP Victus15",
    kategori : "oyuncu leptobu",
    fiyat : 50.699
}
let urun8 = {
    isim : "HP Victus16",
    kategori : "oyuncu leptobu",
    fiyat : 42.999
}

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6, urun7, urun8];
let arananUrun = prompt("Bir leptop markası giriniz (acer,lenovo,hp,asus): ");
let filtreliUrun = [];

urunFiltrele(urunler);
filtreliUrunler(filtreliUrun);

function urunFiltrele(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(arananUrun.toUpperCase())){
            filtreliUrun.push(urun);
        }
    });
}

function filtreliUrunler(urunler){
    urunler.forEach(function(urun){
        console.log("---------------------------------------")
        console.log("| " + urun.isim + " | " + urun.kategori + " | " + urun.fiyat);
        console.log("---------------------------------------")
    })
}