//Variables 

// The general rules for constructing names for variables (unique identifiers) are:

// Names can contain letters, digits, underscores, and dollar signs.

// Names must begin with a letter.

// Names are case sensitive (y and Y are different variables).

// Reserved words (like JavaScript keywords) cannot be used as names.

// Always use const if the value should not be changed

// Always use const if the type should not be changed (Arrays and Objects)

// Only use let if you can't use const




let price1 = 5;
let price2 = 6;
let total = price1 + price2;
const price3 = price1 + price2 + total
const message = `${price3} and ${price1} will apply from next week`;  //note: use ` and not '



console.log("Initial values:");
console.log("price1 =", price1);
console.log("price2 =", price2);
console.log("total =", total);
console.log("price3 =", price3);

// Changing the values
price1 = 10;
price2 = 12;
total = price1 + price2;

console.log("Updated values:");
console.log("price1 =", price1);
console.log("price2 =", price2);
console.log("total =", total);

console.log(message);

// node variables.js
