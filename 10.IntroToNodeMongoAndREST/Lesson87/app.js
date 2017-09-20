var calc = require("./calculator");
var x = 15;
var y = 3;
console.log("Adding: " + x + " + " + y + " = " + calc.add(x, y));
console.log("Subtracting: " + x + " - " + y + " = " + calc.subtract(x, y));
console.log("Multiplying: " + x + " * " + y + " = " + calc.multiply(x, y));
console.log("Dividing: " + x + " / " + y + " = " + calc.divide(x, y));

console.log('');