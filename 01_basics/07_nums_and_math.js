// Numbers

const score = 100;
// console.log(score);

const balance = new Number(400);
// console.log(balance);

// console.log(balance.toString().length); // now it converted to string we can use string methods

// console.log(balance.toFixed(2)); // 400.00

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // 1,000,000
// console.log(hundreds.toLocaleString('ur-PK')); // 1,000,000
// console.log(hundreds.toLocaleString('en-PK')); // 1,000,000

// +++++++++++++++ Maths ++++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4)); // 4

// console.log(Math.round(3.4)); // 3
// console.log(Math.round(3.6)); // 4
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4

// console.log(Math.min(4, 8, 2, 6, 7, 9, 1, 50, 80, 46));
// console.log(Math.max(4, 8, 2, 6, 7, 9, 1, 50, 80, 46));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
