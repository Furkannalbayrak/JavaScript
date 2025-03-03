
let metin = prompt("Girmek istediğiniz metni giriniz: ");

let harf = prompt("Lütfen bir harf giriniz");

function bul(harf) {
    let toplam = 0;

    for (let i = 0; i < metin.length; i++) {
        if (harf == metin.charAt(i)) {
            toplam++;
        }
    }
    return toplam;
}

let sonuc = bul(harf);
alert("Metinde " + sonuc + " tane " + harf + " harfi bulunmaktadır")
