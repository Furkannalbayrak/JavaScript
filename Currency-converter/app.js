
const amountInput = document.querySelector("#amount");
const resultInput = document.querySelector("#result");
const firstOption = document.querySelector(".firstOption");
const secondOption = document.querySelector(".secondOption");

const API_URL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_eFhJztXAABv9hzv38B0z2VJImC8KBvQ4m5YeP1Ae&base_currency=";

runEventListeners();

function runEventListeners() {
    amountInput.addEventListener("input", exchange);
    firstOption.addEventListener("change", exchange);
    secondOption.addEventListener("change", exchange);
}

async function exchange() {
    const amount = Number(amountInput.value.trim());
    if (isNaN(amount) || amount <= 0) {
        resultInput.value = "0.00";
        return;
    }

    const firstCurrency = firstOption.value;
    const secondCurrency = secondOption.value;

    try {
        const response = await fetch(`${API_URL}${firstCurrency}`);
        const result = await response.json();
        const exchangedResult = amount * result.data[secondCurrency];
        resultInput.value = exchangedResult.toFixed(2);
    } catch (error) {
        console.error("Döviz kuru alınırken hata oluştu:", error);
        resultInput.value = "Hata!";
    }
}


