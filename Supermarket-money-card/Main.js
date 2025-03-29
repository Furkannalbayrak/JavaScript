
let mesaj = 
`
Hoşgeldiniz
Money kartınız var mı ?
1-)Evet ise -> Tamam
2-)Hayır ise -> İptal
`;

const urunler = [
    {
        urunIsmi : "Salça",
        fiyat : 180 
    },
    {
        urunIsmi : "süt",
        fiyat : 25
    },
    {
        urunIsmi : "Puding",
        fiyat : 35
    }
];

let sonuc = confirm(mesaj);
let odenecekTutar;

if(sonuc){
    let isim = prompt("İsminizi giriniz");
    let soyisim = prompt("Soyisminizi giriniz");

    const musteri = new Musteri(isim, soyisim, sonuc, urunler);
    odenecekTutar = musteri.hesapla();

    alert(
        `
        Müsteri bilgileri : ${musteri.isim}  ${musteri.soyisim}
        Aldığınız Ürünler:
        
        ${urunler[0].urunIsmi} = ${urunler[0].fiyat}TL
        ${urunler[1].urunIsmi} = ${urunler[1].fiyat}TL
        ${urunler[2].urunIsmi} = ${urunler[2].fiyat}TL
        
        Ödenecek Tutar (indirimli) : ${odenecekTutar}
        `);
}
else{
    const musteri = new Musteri(null, null, sonuc, urunler);
    odenecekTutar = musteri.hesapla();
    
    alert(`  Aldığınız Ürünler:

    ${urunler[0].urunIsmi} = ${urunler[0].fiyat}TL
    ${urunler[1].urunIsmi} = ${urunler[1].fiyat}TL
    ${urunler[2].urunIsmi} = ${urunler[2].fiyat}TL

    Ödenecek Tutar : ${odenecekTutar}`)
}
