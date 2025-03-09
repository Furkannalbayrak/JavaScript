// ------------ MÜKEMMEL SAYİ -------------

let sayi = Number(prompt("Lütfen bir sayi giriniz : "));

function mükSayi(sayi){
    let toplam = 0;

    for(let i = 0;i <= sayi;i++){
        if(sayi % i == 0){
            toplam += i;
        }
    }
    if(sayi*2 == toplam){
        console.log(sayi + " sayisi mükemmel sayidir");
    }
    else{
        console.log(sayi + " sayisi mükemmel sayi degildir");
    }
}

mükSayi(sayi);