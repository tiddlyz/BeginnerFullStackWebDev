var length1 = 15;
var width1 = 10;
var area1 = length1 * width1;

console.log(area1);

function area(length, width) {
    return length * width;
}
var area2 = area(10, 15);
console.log(area2);

var backBalance = 500;
function makeTransaction(priceOfSale) {
    if(priceOfSale <= backBalance){
        backBalance -= priceOfSale;
        console.log("Purchase Successful");
    }
    else{
        console.log("Insufficient Funds");
    }
}

console.log(backBalance);

makeTransaction(79.00);
console.log(backBalance);

makeTransaction(10.45);
console.log(backBalance);

makeTransaction(450.00);
console.log(backBalance);

var transaction = function(priceOfSale){
    if(priceOfSale <= backBalance){
        backBalance -= priceOfSale;
        console.log("Purchase Successful");
    }
    else{
        console.log("Insufficient Funds");
    }
};

transaction(230);
console.log(backBalance);

var printCustomerName = function(first, last){
    console.log("First Name: "+fisrt+" Last Name: "+last);
}

var applyForCreditCard = function(creditScore, soul){
    // call some functions to process application
}

var bankOperations = [];
bankOperations.push(transaction);
bankOperations.push(printCustomerName);
bankOperations.push(applyForCreditCard);
