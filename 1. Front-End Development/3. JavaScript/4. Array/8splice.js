

// node 8splice.js

// The splice() method adds new items to an array.
// They also use for removing elemenet fro the array
// Using splice() to Remove Elements


var list = [45,78,34,12,77];
console.log("initial Data",list);
var output = list.splice(3, 2); // initial Data [ 45, 78, 34, 12, 77 ]

console.log(output);// output remove [ 12, 77 ]

console.log("original array", list) // original array [ 45, 78, 34 ]


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); // output -----> ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']