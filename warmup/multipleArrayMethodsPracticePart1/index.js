// You will use multiple array methods to solve these problems. Don't use for loops!

// 1) Return a list of everyone older than 18 sorted alphabetically by last name.

let sortedOfAge = (arr) => {
    return arr.filter((person) => {
        return person.age >= 18;
    }).sort((person1, person2) => {
        return person1.lastName.localCompare(person2.lastName);
    });
}

module.exports = sortedOfAge;

sortedOfAge([  
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 13
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  }
]);

// youngest to oldest, oUsing the same array from the promblem above, return a sorted list, youngest to oldest, of People in <li>sf People in <li>s

let sortByAge = (arr) => {
    return arr.sort((p1, p2) => p1.age - p2.age;
}
let displayToHtml = (arr) => {
    let sortedPeeps = sortByAge(arr);
}
