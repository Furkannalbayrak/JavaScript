
let sayi = Number(prompt("Lütfen bir sayi giriniz : "));
let toplam = 0;

for(let a = 2;a < sayi/2;a++){
    if(sayi % a == 0){
        toplam++;
        break;
    }
}
if(toplam == 0){
    alert(sayi + " asal bir sayidir");
}
else{
    alert(sayi + " asal bir sayi değildir");
}
