
// node 3_getProperMonthAndgetProperDay.js

var date = new Date();
var day = date.getDay();
//sunday-0,monday-1,saturday-6
console.log(day);
var month = date.getMonth()+1;
console.log(month);
var dateFormat = date.getDate();
//1,2,3,4,5.....
console.log(dateFormat);
 var result = date.getDate() +"/"+ (date.getMonth()+1) +"/"+ date.getFullYear();
 console.log(result);
//6/7/2022


