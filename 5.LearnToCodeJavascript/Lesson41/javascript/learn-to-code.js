var myAccountBalance = 300;
var nikeSBShoes = 799.23;
var coupon = 500;

if(nikeSBShoes <= myAccountBalance){
    myAccountBalance -= nikeSBShoes;
    console.log("We just bought some dope shoes!");
    console.log("Account Balance: " + myAccountBalance);
} else if (nikeSBShoes-coupon <= myAccountBalance){
    console.log("We just bought some dope shoes with a coupon!");
    myAccountBalance -= nikeSBShoes - coupon;
    console.log("Account Balance: " + myAccountBalance);
} else{
    console.log("You too broke for shoes bro!");
}

var age = 23;
var joesAge = "23";

if(age == joesAge){ // compare value only
    console.log("I'm the same age as Joe!");
}

if(age === joesAge){  // compare value and type 
    console.log("These are the same!")
}
else{
    console.log("One of these is not like the other...");
}
