// ------------ FAKTÖRİYEL -------------

let sayi = Number(prompt("Lütfen bir sayi giriniz : "));
let a = 1;

while(sayi > 1){
    a = a * sayi;
    sayi--;
}
alert("Girdiginiz sayinin faktöriyeli = " + a);

