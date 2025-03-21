
let sayi = prompt("Lütfen 2'lik sistemden bir sayi giriniz : ");

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

