// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (var i = 9; i > 0; i--) {
//     console.log(i);
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]

// for (var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
// }

// var array = [];
// var counter = 0;
// for (var i = 0; i < 10; i++) {
//     array.push(counter);
//     counter ++;
// }
// console.log(array);

// for (var i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var someFruit = [];
// for (var i = 0; i < fruit.length; i++) {
//     if (i % 2 === 0) {
//         someFruit.push(fruit[i]);
//     }
// }

// console.log(someFruit);

var peopleArray = [  
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Beiber",
      occupation: "Singer"
    },
    {
      name: "Vladmir Putin",
      occupation: "Politition"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

//   for (var i = 0; i < peopleArray.length; i++) {
//       console.log(peopleArray[i].name);
//   }

//   var name = [];
//   var occupations = [];

// for (var i = 0; i < peopleArray.length; i++) {
//   name.push(peopleArray[i].name);
//   occupations.push(peopleArray[i].occupation); 
// }
// console.log(name);
// console.log(occupations);

var names = [];
var occupations = [];

for (var i = 0; i < peopleArray.length; i++) {
  if (i % 2 === 0) {
    names.push(peopleArray[i].name);
  }
  else {
    occupations.push(peopleArray[i].occupation);
  }
}
console.log(names);
console.log(occupations);

// var grid = []

// for (var i = 0; i < 3; i++) {
//     grid.push([]);
//     for (var j = 0; j < 3; j++) {
//         grid[i].push(0);
//     }
// }

// console.log(grid);
// var grid = []

// for (var i = 0; i < 3; i++) {
//   grid.push([]);
//   for (var j = 0; j < 3; j++) {
//       grid[i].push(i);
//   }
// }

// console.log(grid);

// var grid = []

// for (var i = 0; i < 3; i++) {
//   grid.push([]);
//   for (var j = 0; j < 3; j++) {
//       grid[i].push(j);
//   }
// }

// console.log(grid);

var newGrid = [[0, 1, 2], 
[0, 1, 2], 
[0, 1, 2]];

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        newGrid[i][j] = "X";
    }
}
console.log(newGrid);
