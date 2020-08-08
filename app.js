let amount =document.querySelector("#exchange-amount");
let first = document.querySelector("#from");
let second = document.querySelector("#to");

$.getJSON("http://data.fixer.io/api/latest?access_key=85cf2e6df606f6026cde0a4d03980bba&format=1", function(data){
   
    let arr =[];
 
    function rateChecker(){
        let currencyRate = data.rates;    
        for( pair in currencyRate){
            if(pair === first.value ) {
                arr.push(currencyRate[pair]);
            }else{
                // console.log("work harder");
            }
        };
    }
    
    function rateChecker1(){
        let currencyRate = data.rates;    
        for( pair in currencyRate){
            if(pair === second.value) {
                arr.push(currencyRate[pair]);
                converter()
            }else{
                // console.log("work harder");
            };
        };
    };
 
 first.addEventListener("input", rateChecker);     
 second.addEventListener("input", rateChecker1); 
 

 

 function converter(){
     if(arr[0] === data.rates.EUR){
        console.log((amount.value/arr[0])*arr[1]);
     }else{
        console.log((amount.value/arr[0])*arr[1]);
     }
 }
 
});
