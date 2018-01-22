
// greet1.js

module.exports = function() {  
    console.log("Hello world");
}

// app.js

const greet = require("./greet1");  
greet(); 

//--------------------------------------------------

// greet1.js

function greeting() {  
    console.log("Hello world");
}

// notice we don't execute the function, but just pass it as a variable
module.exports = greeting;  // NOT greeting()

// app.js

const greet = require("./greet1");  
greet(); 

//--------------------------------------------------

// greet2.js

module.exports.greet = function() {  
    console.log("Hello world!");
}


// app.js

// Either do:
var greet2 = require("./greet2"); // Returns module.exports, which contains a "greet" property on it  
greet2.greet();

// Or:
var greet2 = require("./greet2").greet; // Returns just the greet property of module.exports  
greet2(); 

//--------------------------------------------------

// greet3.js

var greeting = "Hello world!!!!";

function greet() {  
    console.log(greeting);
}


// Replace module.exports object with my own object that just contains the one
// function. Even though I'm only exposing the one greet function, it still has
// access to all the other functions, login, variables, etc. within this file.
// This way, I can make it so I'm only exposing that which I want to expose
// when require() is called.
module.exports = {  
    greet: greet
}


// app.js

var greet3 = require("./greet3");  
greet3.greet(); 

//--------------------------------------------------


// greet4.js
function Greetr() {  
    this.greeting = "Hello world!!!";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;


// app.js

var Greet4 = require("./greet4");  
var greetr = new Greet4();  
greetr.greet(); 