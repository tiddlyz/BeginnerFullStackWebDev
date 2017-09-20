var rs = require('readline-sync');

var num1 = rs.questionFloat('Please enter a number: ');

var num2 = rs.questionFloat("Please enter another number: ");

var op = rs.question("please enter an operator(+, -, *, /)");

var result ;
if(op==="+"){
    result = num1 + num2;
}
else if(op==="-"){
    result = num1 - num2;
}
else if(op==="*"){
    result = num1 * num2;
}
else if(op==="/"){
    result = num1 / num2;
}

console.log("The result is " + result);
