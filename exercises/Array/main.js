var fruit = ["banana", "apple", "orange", "watermelon"]; 
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
fruit.shift();
// var orange = fruit.indexOf("orange");
// console.log(orange);
fruit.push(1);
// console.log(vegetables.length);
vegetables.push(3);
var food = fruit.concat(vegetables);
food.splice(4, 2);
food.reverse();
console.log(food.join(","));

// console.log("fruit: ", fruit);  
// console.log("vegetables: ", vegetables);
// console.log("food: ", food);
