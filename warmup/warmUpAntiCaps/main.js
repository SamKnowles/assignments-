//Write a function called antiCaps, which accepts a string and manipulates it as follows.

//Uppercase characters will become lowercase.
//Lowercase characters will become uppercase.

function isCaps(str) {
    str = str.split('');
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            str[i] = str[i].toLowerCase();
        }
        else if (str[i] === str[i].toLowerCase()) {
            str[i] = str[i].toUpperCase();
        }
    }
    return str.join('');
  }
  console.log(isCaps("fdddHGHGHghggHGhghGGGGG"));

  //Have the function return double letters if originally uppercase

function isCaps(str) {
    str = str.split('');
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            str[i] = str[i].toLowerCase() + str[i].toLowerCase();
        }
        else if (str[i] === str[i].toLowerCase()) {
            str[i] = str[i].toUpperCase();
        }
    }
    return str.join('');
  }
  console.log(isCaps("abcABC"));


  //Have the function return the letter and a symbol if originally lowercase.
  
  function isCaps(str) {
    str = str.split('');
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            str[i] = str[i].toLowerCase();
        }
        else if (str[i] === str[i].toLowerCase()) {
            str[i] = str[i].toUpperCase() + '$';
        }
    }
    return str.join('');
  }
  console.log(isCaps("abdABC"));