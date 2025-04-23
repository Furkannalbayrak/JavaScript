
const amountImput = document.querySelector("#amount");
const resultInput = document.querySelector("#result")
const firstOption = document.querySelector(".firstOption");
const secondOption = document.querySelector(".secondOption");

const currency = new Currency();

runEventListeners();

function runEventListeners(){
    amountImput.addEventListener("input", exchange);
}

function exchange(){
    const amount = Number(amountImput.value.trim());
    const firsOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;

    currency.exchange(amount, firsOptionValue, secondOptionValue)
    .then((result)=>{
        resultInput.value = result.toFixed(2);
    })
}
