let amount =document.querySelector("#exchange-amount");
let first = document.querySelector("#from");
let second = document.querySelector("#to");
let amountDisplay = document.querySelector("#amount-dis");
let amountDisplayCurrency = document.querySelector("#amount-dis1");
let fullAmountDisplay = document.querySelector("h2");


$.getJSON("http://data.fixer.io/api/latest?access_key=85cf2e6df606f6026cde0a4d03980bba&format=1", function(data){

    let arr =[];
 
    function rateChecker(){
        let currencyRate = data.rates;    
        for( pair in currencyRate){
            if(pair === first.value ) {
                arr.push(currencyRate[pair]);
                amountDisplay.textContent = amount.value;
                amountDisplayCurrency.textContent = first.value;
            }else{
                // console.log("work harder");
            };
        };
    }
    
    function rateChecker1(){
        let currencyRate = data.rates;    
        for( pair in currencyRate){
            if(pair === second.value) {
                arr.push(currencyRate[pair]);
                converter();
            }else{
                // console.log("work harder");
            };
        };
    };
 
    function converter(){
        if(arr[0] === data.rates.EUR){
            fullAmountDisplay.textContent = (amount.value/arr[0])*arr[1];
        }else if(arr[1] === data.rates.EUR){
            fullAmountDisplay.textContent(amount.value/arr[0])*arr[1];
        }else {
            let diffCurrency = (amount.value/arr[0])*data.rates.EUR;
            let finalDiffCurrency = (diffCurrency/data.rates.EUR)*arr[1]
            fullAmountDisplay.textContent = finalDiffCurrency;
        }
    }

 first.addEventListener("input", rateChecker);     
 second.addEventListener("input", rateChecker1); 
 
});
