
let kitap1 = { isim: "madonna", yazar: "tolstoy", fiyat: 120 + " TL"}
let kitap2 = { isim: "sapiens", yazar: "sabahattin ali", fiyat: 120 + " TL"}
let kitap3 = { isim: "oz buyucusu", yazar: "nejat işler", fiyat: 120 + " TL"}
let kitap4 = { isim: "portakal", yazar: "George Orwel", fiyat: 120 + " TL"}
let kitap5 = { isim: "seker portakalı", yazar: "jack london", fiyat: 120+ " TL" }
let kitap6 = { isim: "kuyucaklı yusuf", yazar: "George Orwel", fiyat: 120 + " TL"}
let kitap7 = { isim: "kucuk prens", yazar: "montaigne", fiyat: 120 + " TL"}
let kitap8 = { isim: "müptezeller", yazar: "dostoyevski", fiyat: 120 + " TL"}
let kitap9 = { isim: "kırmızı pazartesi", yazar: "jack london", fiyat: 120 + " TL"}
let kitap10 = { isim: "martin eden", yazar: "alexandre dumas", fiyat: 120+ " TL" }
let kitap11 = { isim: "sineklerin tanrısı", yazar: "anten çehov", fiyat: 120 + " TL"}
let kitap12 = { isim: "1984", yazar: "jack london", fiyat: 120 + " TL"}
let kitap13 = { isim: "satranc", yazar: "alexandre dumas", fiyat: 120 + " TL"}
let kitap14 = { isim: "kadın mektubu", yazar: "jack london", fiyat: 120 + " TL"}
let kitap15 = { isim: "hayvan çiftligi", yazar: "montaigne", fiyat: 120 + " TL"}
let kitap16 = { isim: "ukalalar", yazar: "dostoyevski", fiyat: 120 + " TL"}
let kitap17 = { isim: "üç silahşorler", yazar: "alexandre dumas", fiyat: 120 + " TL"}
let kitap18 = { isim: "devri alem", yazar: "montaigne", fiyat: 120 + " TL" }
let kitap19 = { isim: "denizler altında", yazar: "George Orwel", fiyat: 120 + " TL"}
let kitap20 = { isim: "mobydick", yazar: "George Orwel", fiyat: 120 + " TL"}
let kitap21 = { isim: "olasılıksız", yazar: "anten çehov", fiyat: 120 + " TL"}
let kitap22 = { isim: "idam mahkumu", yazar: "dostoyevski", fiyat: 120 + " TL"}
let kitap23 = { isim: "hariciye kogusu", yazar: "anten çehov", fiyat: 120 + " TL"}
let kitap24 = { isim: "kırmızı karı", yazar: "alexandre dumas", fiyat: 120 + " TL"}
let kitap25 = { isim: "yeraltından notlar", yazar: "alexandre dumas", fiyat: 120 + " TL"}

let a = 0;
let dizi = [kitap1, kitap2, kitap3, kitap4, kitap5, kitap6, kitap7, kitap8, kitap9, kitap10, kitap11, kitap12,
    kitap13, kitap14, kitap15, kitap16, kitap17, kitap18, kitap19, kitap20, kitap21, kitap22, kitap23, kitap24, kitap25]

let alinanDeger = prompt("Lütfen bir kitap ismi giriniz :");

for (let i = 1; i < 6; i++) {
    for (let j = 1; j < 6; j++) {
        if (dizi[a].isim.toUpperCase().includes(alinanDeger.toUpperCase())) {
            console.log(dizi[a].isim + " | " + dizi[a].yazar + " | " + dizi[a].fiyat);
            console.log("Bu kitap " + i + ".satır " + j + ".sırada bulunmaktadır.");
            console.log("-----------------------------------------");
        }
        a++;
    }
}





