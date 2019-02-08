const rs = require("readline-sync");

console.log("Youre in a room. There is a girl, some hidden cash, and the slim possibility of becoming un-single.");

let inv = [];
let temporarilySingle = true;

while (temporarilySingle) {
    let userinput = rs.question("My name is Mercedes.  What's up? ");
    userinput = userinput.toLowerCase();

    if (userinput.includes("yo") && userinput.includes("gurl")) {
        console.log("... Hard pass.");
        temporarilySingle = false;
        console.log("Theres no hope for you, pleb. Youre permanently single.");
    }
    else if (userinput.includes("im rich") && userinput.includes("youre beautiful")) {
        if (inv.includes("cash money")) {
            console.log("Okaaay boo. I like where this is going!");
            break;
        }
        else {
            console.log("Gross. No... Just... no.");
        }
    }
    else if (userinput.includes("take") && userinput.includes("cash money")) {
        console.log("Great find playa!");
        inv.push("cash money");
        console.log(inv);
    }
    else if (userinput.includes("look")) {
        console.log("Youre in a room. There is a girl, some hidden cash, and the slim possibility of becoming un-single.");
    }
    else {
        console.log("Wrong words fool!");
    }
}

const rs = require("readline-sync");

console.log("You are in a locked room.\nThere is a door, a hidden key, and a hole in the wall.");

let inv = [];
let isAlive = true;

while(isAlive) {
    let userinput = rs.question("What would you like to do? ");
    userinput = userinput.toLowerCase();

    if (userinput.includes("hole") && userinput.includes("put")) {
        console.log("Sorry Sucka! You dead!  Holes Kill!");
        isAlive = false;
        console.log("Also, There Is No god");
    } 
    else if(userinput.includes("open") && userinput.includes("door")) {
        if(inv.includes("key")) {
            console.log("Congrats you WIN the game!! You get three wishes!");
            break;
        } 
        else {
            console.log("You need a key to do that.  It's one of the only things in the room.  You can just take it.");
        }
    } 
    else if(userinput.includes("take") && userinput.includes("key")) {
        console.log("You found the key but is it the key?");
        inv.push("key");
    } 
    else if(userinput.includes("look")) {
        console.log("You are in a locked room.\nThere is a door, a 'hidden' key, and a hole in the wall.");        
    } 
    else {
        console.log("Sorry but that isn't one of the commands");
    }
}