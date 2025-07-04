
//⚠️ Not: Bu proje Freecurrency API kullanmaktadır. Kendi kullanımınız için [Free Currency API](https://freecurrencyapi.com/) sayfasından ücretsiz bir API anahtarı
// alarak `currency.js` dosyasındaki `YOUR_API_KEY` kısmına kendi anahtarınızı eklemeniz gerekmektedir.

class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=YOUR_API_KEY&base_currency="
    }

    async exchange(amount, firstCurrency, secondCurrency){
        const response = await fetch(`${this.url}${firstCurrency}`)
        const result = await response.json();
        const exchangedResult = amount * result.data[secondCurrency];
        
        return exchangedResult;
    }   
}
