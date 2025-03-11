// ------------- 10'LUK SAYİYİ 2'LİGE CEVİRME --------------

let sayi = Number(prompt("Lütfen bir sayi giriniz : "));
function convert(sayi){
    let metin = "";

    while(sayi != 0){
        metin =  metin + String((sayi % 2));
        // ! NOT: metin = String((sayi % 2)) + metin;
        // ! bu şekilde yapsaydık stringi döndürmeye gerek kalmıycaktı.
        // ! stringe elemanlar sondan eklenicekti.
        sayi = Math.floor(sayi / 2);
    }
    let sonuc = tersCevir(metin);
    alert(sonuc);
}
convert(sayi);

function tersCevir(metin){
    let metinTers = "";
    for(let i = metin.length-1;i >= 0;i--){
        metinTers = metinTers + metin.charAt(i);
    }

    return metinTers;
}