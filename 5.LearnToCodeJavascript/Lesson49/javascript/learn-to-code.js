this.car = "Honda Civic w/ Ugly Spoiler";

var marksGarage = {
  car: "Aston Martin",
  getCar: function(){
    return this.car;
  }
};

console.log(marksGarage.getCar());    // this prints out "Aston Martin"

var storeGetCarForLater = marksGarage.getCar;

console.log(storeGetCarForLater());   // this will print out "Honda Civic w/ Ugly Spoiler"

var theRealGetCarFunction = storeGetCarForLater.bind(marksGarage);
console.log(theRealGetCarFunction()); // this prints out "Aston Martin"

