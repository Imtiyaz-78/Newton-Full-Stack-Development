
// node 7_accessing_Object_Using_Array_Bracket.js

const collection = {
    fullName: "akash",
    age: 44,
    flag: true,
    salary: [1000, 2000, 4444]
};
console.log(collection["fullName"]);
console.log(collection["age"]);
console.log(collection["flag"]);
console.log(collection["salary"][2]);