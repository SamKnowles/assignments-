var readlineSync = require('readline-sync');

var firstNumber = readlineSync.question("Please enter your first number")
var secondNumber = readlineSync.question("Please enter your second number")

operation = ['add', 'subtract', 'multiply', 'divide'],
index = readlineSync.keyInSelect(operation, 'Which operation?');


if (index === 0) {
    console.log("The result is: " + (parseFloat(firstNumber) + parseFloat(secondNumber)));
 }

 else if (index === 1) {
    console.log("The result is: " + (parseFloat(firstNumber) - parseFloat(secondNumber)));
 }

 else if (index === 2) {
    console.log("The result is: " + (parseFloat(firstNumber) * parseFloat(secondNumber)));
 }

 else if (index === 3) {
    console.log("The result is: " + (parseFloat(firstNumber) / parseFloat(secondNumber)));
 }


// Please enter your first number (store that number)
// Please enter your second number (store that number)
// Please enter the operation to perform: add, sub, mul, div (then store the operation)