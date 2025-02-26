// ------------- ARMSTRONG -------------

let sayi = Number(prompt("Lütfen bir sayi giriniz : "));
let sayi2 = sayi;
let mod;
let toplam = 0;

while (sayi > 0) {
    mod = sayi % 10;
    sayi = Math.floor(sayi / 10);

    toplam += mod ** 3;
}
if (toplam == sayi2) {
    alert(sayi2 + " amstrong sayisidir");
}
else {
    alert(sayi2 + " amstrong sayisi degildir");
}
