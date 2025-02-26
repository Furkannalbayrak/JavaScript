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


// 2.yöntem

/*
let sayi = prompt("Lütfen bir sayi giriniz : ");
let rakam;
let toplam = 0;

for(let i = 0;i < sayi.length;i++){  // sayi.length numberde çalışmaz stringde çalışır
    rakam = sayi.charAt(i);  // sayi.charAt(2) demek sayinin 3. rakamı (dizi gibi ilk rakam 0 dır)
    toplam += rakam**3;
}
if(toplam == sayi){
    alert(sayi + " amstrong sayisidir");
}
else{
    alert(sayi + " amstrong sayisi degildir");
}
*/
