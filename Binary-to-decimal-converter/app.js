// ------------- 2'LİK SAYİYİ 10'LUGA CEVİRME --------------


let sayi = prompt("Lütfen 2'lik sayiyi giriniz : ");

function convert(sayi) {
    let toplam = 0;
    let b = 0;

    for (let i = sayi.length - 1; i >= 0; i--) {
        toplam += (2 ** b) * Number(sayi.charAt(i));
        b++;
    }

    console.log("Sonuc : " + toplam);
}

convert(sayi);


/* 2. YÖNTEM

let sayi = prompt("Lütfen 2'lik sayiyi giriniz : ");
let toplam = 0;
let b = 2;

function convert(sayi){
    for (let i = sayi.length - 2; i >= 0; i--) {
        if (sayi.charAt(i) == 1) {
            toplam += b;
        }
        b *= 2;
    }
    if (sayi.charAt(sayi.length - 1) == 1) {
        toplam += 1;
    }
    console.log("sonuc : " + toplam);
 }

 convert(sayi);

 */











