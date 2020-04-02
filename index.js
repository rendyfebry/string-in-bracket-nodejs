const { findFirstStringInBracket } = require("./stringUtil");

const inputString = "Hello, (wor)ld!";

console.log("Input: ", inputString);
console.log("Output:", findFirstStringInBracket(inputString));
