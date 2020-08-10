        // targeting html DOM elements

let amount =document.querySelector("#exchange-amount");
let first = document.querySelector("#from");
let second = document.querySelector("#to");
let amountDisplay = document.querySelector("#amount-dis");
let amountDisplayCurrency = document.querySelector("#amount-dis1");
let fullAmountDisplay = document.querySelector("h2");
let topDisplay = document.querySelector("h1");

      // collecting API data
$.getJSON("http://data.fixer.io/api/latest?access_key=85cf2e6df606f6026cde0a4d03980bba&format=1", function(data){

    let arr =[];
 
    // collects first currency rate and stores in an empty array

    function rateChecker(){
        let currencyRate = data.rates;    
        for( pair in currencyRate){
            if(pair === first.value ) {
                arr.push(currencyRate[pair]);
                amountDisplay.textContent = amount.value;
                amountDisplayCurrency.textContent = first.value;
            }else{
                console.log("didn't find pair");
            };
        };
    }
    
    // collects second currency rate and stores in an empty array

    function rateChecker1(){
        let currencyRate = data.rates;    
        for( pair in currencyRate){
            if(pair === second.value) {
                arr.push(currencyRate[pair]);
                converter();
            }else{
                console.log("didn't find pair");
            };
        };
    };
 
    // uses rates collected in the empty array to peform currency conversions

    function converter(){
        if(arr[0] === data.rates.EUR){
            let eurCalc = (amount.value/arr[0])*arr[1];
            fullAmountDisplay.textContent = eurCalc.toFixed(2);
            topDisplay.textContent = `${amount.value} ${first.value} TO ${second.value} = ${eurCalc.toFixed(2)}`;
        }else if(arr[1] === data.rates.EUR){
            let eurCalc1 = (amount.value/arr[0])*arr[1];
            fullAmountDisplay.textContent = eurCalc1.toFixed(2);
            topDisplay.textContent = `${amount.value} ${first.value} TO ${second.value} = ${eurCalc1.toFixed(2)}`;
        }else {
            let diffCurrency = (amount.value/arr[0])*data.rates.EUR;
            let finalDiffCurrency = (diffCurrency/data.rates.EUR)*arr[1]
            let apprCurrency = finalDiffCurrency.toFixed(2);
            fullAmountDisplay.textContent = apprCurrency;
            topDisplay.textContent = `${amount.value} ${first.value} TO ${second.value} = ${apprCurrency}`;
        }
    }

 first.addEventListener("input", rateChecker);     
 second.addEventListener("input", rateChecker1); 
 
});
