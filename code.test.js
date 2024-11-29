const fs = require("fs");
const assert = require("assert");

eval(fs.readFileSync('code.js').toString());

let result0 = tfib(1);
let expected0 = 1;
assert(result0 === expected0, "test 0 failed"); // compares result

let result1 = tfib(3);
let expected1 = 2;
assert(result1 === expected1, "test 1 failed"); // compares result

let result2 = tfib(5);
let expected2 = 5;
assert(result2 === expected2, "test 2 failed"); // comapres result 

let result3 = tfib(8);
let expected3 = 21;
assert(result3 === expected3, "test 3 failed"); // compares result

let result4 = tfib(12);
let expected4 = 144;
assert(result4 === expected4, "test 4 failed"); // compares result 

console.log("all tests passed!");
