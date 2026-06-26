// Array Methods
// To add elements 

// 1. Push(val)
let arr = ["Noida","Nainital","Rishikesh"];
console.log(arr);
arr.push("Shimla");
console.log(arr);
// unshift(val)
arr.unshift("Manali");
console.log(arr);
// splice(index, deleteCount, "Name of elements to be added")
arr.splice(2,0,"Lucknow","Agra")
console.log(arr);
// Remove Elements
// 1.pop()
arr.pop()
console.log(arr);
 arr.shift()
 console.log(arr);
arr.splice(2,2)
console.log(arr);

// slice
let names =["Satyam","Karan","Bhavya","Shimpi","Sonam","Anushka"];

console.log(names);
let snames= names.slice(3,5)
console.log(snames);

// join()
let joinArray = names.join("-------");
console.log(joinArray);

console.log(names.sort());

let nums = [7,4,8,2,8,9];
console.log(nums.sort());
