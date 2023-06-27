const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')



const convert = (currency, targetInput, targetInputSecond, isTrue) => {
    currency.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../json/val.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            if (currency === som) {
                targetInput.value = (currency.value / response.usd).toFixed(2);
                targetInputSecond.value = (currency.value / response.euro).toFixed(2)
            } else if (currency === usd) {
                targetInput.value = (currency.value * response.usd).toFixed(2);
                targetInputSecond.value = ((currency.value * response.usd) / response.euro).toFixed(2)
            } else {
                targetInput.value = (currency.value * response.euro).toFixed(2)
                targetInputSecond.value = ((currency.value * response.usd) / response.euro).toFixed(2)
            }
            currency.value === '' && (targetInput.value = '')
        }
    }
}        
convert(som, usd, euro, true);
convert(usd, som, euro, false);
convert(euro, som, usd, false);
