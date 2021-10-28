// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// var newNumbers = [];

// function double(x){
//   return (
//     newNumbers.push(x*2)
//   )
// }

// numbers.map(double)

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// var testing = [];

// testing = newNumbers.filter(function (x){
//   return x > 10
// })

// console.log(testing)
//Reduce - Accumulate a value by doing something to each item in an array.

// var numbers = [3, 56, 2, 48, 5];

// var reducer = numbers.reduce(function(accumulator, currentNumber){
//   return accumulator + currentNumber
// });

// console.log(reducer)
//Find - find the first item that matches from an array.

// var found = numbers.find(function(number){
//   return number > 20
// })

// console.log(found);

//FindIndex - find the index of the first item that matches.

// var index = numbers.findIndex(function(number){
//   return number > 20
// })

// console.log(index);

import emojipedia from "./emojipedia";

console.log(emojipedia);

var newArray = [];

newArray = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
});

console.log(newArray);
