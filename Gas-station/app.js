// ------------ BENZİN İSTASYONU ------------

/*
1-) Dizel : 24.53
2-) Benzin : 22.25 
3-) LPG : 11.18

bakiye = 1000
*/

const yeniSatir = "\r\n";

const yakitMetni = "1-)Dizel      (24.53 Tl)" + yeniSatir +
"2-)Benzin      (22.25 TL)" + yeniSatir +
"3-)LPG      (11.18 TL)" + yeniSatir +
"Yakıt türünü seçiniz";

let yakitTipi = prompt(yakitMetni);



if(yakitTipi == 1 || yakitTipi == 2 || yakitTipi == 3){

    let litre = Number(prompt("Kaç litre alacaksiniz : "));
    let bakiye = 1000;
    let hesap;

    if(yakitTipi == 1){
        hesap = 24.53 * litre;
        if(hesap <= bakiye){
            alert("Ödeyeceğiniz tutar : " + hesap + "TL" + yeniSatir +
            "Kalan bakiyeniz : " + (bakiye-hesap) + "TL");
        }
        else{
            alert("Bakiyeniz yeterli değil !!!" + yeniSatir +
            "Bakiyeniz : " + bakiye + yeniSatir +
            "Ödenecek tutar : " + hesap);
        }
    }
    else if(yakitTipi == 2){
        hesap = 22.53 * litre;
        if(hesap <= bakiye){
            alert("Ödeyeceğiniz tutar : " + hesap + "TL" + yeniSatir +
            "Kalan bakiyeniz : " + (bakiye-hesap) + "TL");
        }
        else{
            alert("Bakiyeniz yeterli değil !!!" + yeniSatir +
            "Bakiyeniz : " + bakiye + yeniSatir +
            "Ödenecek tutar : " + hesap);
        }
    }
    else{
        hesap = 11.18 * litre;
        if(hesap <= bakiye){
            alert("Ödeyeceğiniz tutar : " + hesap + "TL" + yeniSatir +
            "Kalan bakiyeniz : " + (bakiye-hesap) + "TL");
        }
        else{
            alert("Bakiyeniz yeterli değil !!!" + yeniSatir +
            "Bakiyeniz : " + bakiye + yeniSatir +
            "Ödenecek tutar : " + hesap);
        }
    }
}
else{
    alert("Lütfen geçerli bir sayi giriniz !!!");
}

