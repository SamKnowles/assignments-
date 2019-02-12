const ask = require('readline-sync');

function Game() {
    this.box = 'locked';
    this.inventory = [];
    this.puzzle = 'unsolved';
    this.gameOver = false;
}

//helper functions
function openBox() {
    console.log('You must solve this puzzle to unlock the box: \nIn five tries or fewer, fill in the missing spaces in the following sequence: \n1, 4, 9, __, 25, 36, __');
    let counter = 5;
    while(currGame.puzzle === 'unsolved') {
        let answer1 = ask.question('Enter the first missing number');
        if(answer1 === '16') {
            console.log('Correct!');
            let answer2 = ask.question('Enter the second missing number');
            if(answer2 === '49') {
                console.log('Congrats, you solved the puzzle. The box opened and you found the key! You may take the key now if you wish.');
                currGame.puzzle = 'solved';
                currGame.box = 'unlocked';
            } else {
                counter--;
                if (counter > 0) {
                    console.log('Sorry, try again. You have ' + counter + ' tries left.');
                } else {
                    console.log('You\'ve run out of time! They\'ve returned for you. GAME OVER.');
                    currGame.gameOver = true;
                    break;
                }
            }
        } else {
            counter--;
            if (counter > 0) {
                console.log('Sorry, try again. You have ' + counter + ' tries left.');
            } else {
                console.log('You\'ve run out of time! They\'ve returned for you. GAME OVER.');
                currGame.gameOver = true;
                break;
            }
        }
    }
}

let currGame = new Game();

console.log('You\'ve woken up in a dim, damp room. Snakes slither up the walls and ivy hangs from the low ceiling.\nThe tiny room appears to be an abandoned jail cell. \nYour memory is returning: You were on a small group expedition in the Amazon, and decided to do some exploring on your own. \nYou stumbled upon a group of people doing something suspicious, and tried to get a better look without being seen. \nAlas, one of them spotted you. You turned to run, but were captured before you could escape. \nYour last memory is of getting an injection and becoming delirious. \nAs you come to your senses, you hear voices. They\'re discussing how to get rid of you. Someone will be here in 3 minutes. \nFind the key, open the door, and escape before they arrive! \nHere are some basic commands to get you started: \n    1)look \n    2)take \n    3)open \nFeel free to try other commands, too.'); 

while (!currGame.gameOver) {
    let action = ask.question('What would you like to do?');
    action = action.toLowerCase();
    if(action.includes('hole')) {
        console.log('A venemous snake pops its head out of the hole and bites you. The jail cell opens as you struggle for air. You die before they can finish you off.');
            break;
    } else if(action.includes('look')) {
        if(action.includes('box')) {
            if(currGame.box === 'locked') {
                console.log('The box is locked. Unless you have x-ray vision, you\'ll need to open the box to look inside.');
                continue;
            } else if (currGame.box === 'unlocked') {
                console.log('The box is empty. You have what you need to unlock the door.');
                continue;
            } 
        } else {
            console.log('There is a hole in the brick wall, a rusty metal box in the corner, and a locked jail cell door.');
        }
    } else if (action.includes('open')) {
        if(!action.includes('box') && !action.includes('door')) {
            console.log('Either you need to be more specific (ex: "open door"), or I cannot understand your command. Please try again.');
            continue;
        } else if (action.includes('box')) {
            if(currGame.puzzle === 'unsolved') {
                openBox(); 
                continue;
            } else if (currGame.puzzle === 'solved') {
                console.log('You have already opened the box. If you haven\'t taken the key already, take the key now.');
                continue;
            }
        } else if (action.includes('door')) {
            if (currGame.inventory.includes('key')) {
                console.log('You escaped the jail cell in time! Now RUN FOR YOUR LIFE!');
                break;
            } else if (!currGame.inventory.includes('key')) {
                console.log('The door is locked. Find the key in the room somewhere.')
            }
        }  
    } else if (action.includes('unlock') && action.includes('door')) {
        if (currGame.inventory.includes('key')) {
            console.log('You escaped the jail cell in time! Now RUN FOR YOUR LIFE!');
            break;
        } else if (!currGame.inventory.includes('key')){
            console.log('The door is locked. Find the key in the room somewhere.open')
        }
    } else if (action.includes('take')) {
        if (currGame.puzzle === 'solved') {
            currGame.inventory.push('key');
            console.log('You now have the key. Now open the door and free yourself!');
            continue;
        } else {
            console.log('There is nothing for you to take right now.');
            continue;
        }
    } else {
        console.log('I do not understand that command. Please try again.');
    }
}


// const rs = require("readline-sync");

// console.log("Youre in a room. There is a girl, some hidden cash, and the slim possibility of becoming un-single.");

// let inv = [];
// let temporarilySingle = true;

// while (temporarilySingle) {
//     let userinput = rs.question("My name is Mercedes.  What's up? ");
//     userinput = userinput.toLowerCase();

//     if (userinput.includes("yo") && userinput.includes("gurl")) {
//         console.log("... Hard pass.");
//         temporarilySingle = false;
//         console.log("Theres no hope for you, pleb. Youre permanently single.");
//     }
//     else if (userinput.includes("im rich") && userinput.includes("youre beautiful")) {
//         if (inv.includes("cash money")) {
//             console.log("Okaaay boo. I like where this is going!");
//             break;
//         }
//         else {
//             console.log("Gross. No... Just... no.");
//         }
//     }
//     else if (userinput.includes("take") && userinput.includes("cash money")) {
//         console.log("Great find playa!");
//         inv.push("cash money");
//         console.log(inv);
//     }
//     else if (userinput.includes("look")) {
//         console.log("Youre in a room. There is a girl, some hidden cash, and the slim possibility of becoming un-single.");
//     }
//     else {
//         console.log("Wrong words fool!");
//     }
// }

// const rs = require("readline-sync");

// console.log("You are in a locked room.\nThere is a door, a hidden key, and a hole in the wall.");

// let inv = [];
// let isAlive = true;

// while(isAlive) {
//     let userinput = rs.question("What would you like to do? ");
//     userinput = userinput.toLowerCase();

//     if (userinput.includes("hole") && userinput.includes("put")) {
//         console.log("Sorry Sucka! You dead!  Holes Kill!");
//         isAlive = false;
//         console.log("Also, There Is No god");
//     } 
//     else if(userinput.includes("open") && userinput.includes("door")) {
//         if(inv.includes("key")) {
//             console.log("Congrats you WIN the game!! You get three wishes!");
//             break;
//         } 
//         else {
//             console.log("You need a key to do that.  It's one of the only things in the room.  You can just take it.");
//         }
//     } 
//     else if(userinput.includes("take") && userinput.includes("key")) {
//         console.log("You found the key but is it the key?");
//         inv.push("key");
//     } 
//     else if(userinput.includes("look")) {
//         console.log("You are in a locked room.\nThere is a door, a 'hidden' key, and a hole in the wall.");        
//     } 
//     else {
//         console.log("Sorry but that isn't one of the commands");
//     }
// }