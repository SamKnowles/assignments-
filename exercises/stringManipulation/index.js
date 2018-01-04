var rs = require("readline-sync");

// var name = rs.question('What is your name? ');
// console.log('Hi ' + name.toUpperCase() + '!');

// var long = rs.question('How many letters are in what you say?');
// console.log('Exactly ' + long.length + '!!!');

// var yes = rs.question('What is your problem?')
// var no = rs.question('What is my problem?')
// console.log('If ' + yes + ' is my problem, and ' + no + ' is your problem, we have problems.');

var longer = rs.question("Will you give me a lot of words? Like, at least twenty letters worth?");
var halfMessage = function(longer) {
if (longer.length >= 20) {
    halved = longer.length / 2;
    }
return longer.slice(halved, longer.length);
}
console.log(halfMessage(longer));

