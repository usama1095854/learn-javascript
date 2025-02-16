let score = 33;

// converting into number
// after converting any data type to number it's type will be number value will be diffrent (Nan, 0, 1)
score = '33sdfsd'; // ==> Nan
score = null; // ==> 0
score = undefined; // ==> NaN
score = true; // ==> 1
score = false; // ==> 0
score = 'usama'; // ==> NaN

let valueInNumner = Number(score);
console.log(typeof valueInNumner);
console.log(valueInNumner);
console.log('===================================');

// Converting intp boolean
let isLoggedIn = 1;
let boolIsLoggedIn = Boolean(isLoggedIn);

Boolean(''); // ==> false
Boolean('sometext'); // ==> true

Boolean(1); // ==> true
Boolean(0); // ==> false

console.log(typeof boolIsLoggedIn);
console.log(boolIsLoggedIn);
console.log('===================================');

// converting into string
let num = 33;
let stringNum = String(num);

console.log(typeof stringNum);
console.log(stringNum);
