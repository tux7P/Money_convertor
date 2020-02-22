const currencyOneElement = document.getElementById('currency-one');
const amountOneElement = document.getElementById('amount-one');
const currencyTwoElement = document.getElementById('currency-two');
const amountTwoElement = document.getElementById('amount-two');
const rateElement = document.getElementById('rate');
const swapButton = document.getElementById('swap');

function calculate () {
    const currency_one = currencyOneElement.value;
    const currency_two = currencyTwoElement.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two];
            console.log(rate);
            amountTwoElement.value = amountOneElement.value * rate;
        });
}

calculate();

currencyOneElement.addEventListener('change', calculate);
amountOneElement.addEventListener('input', calculate);
currencyTwoElement.addEventListener('change', calculate);
amountTwoElement.addEventListener('input', calculate);