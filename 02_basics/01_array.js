// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ['hero 1', 'hero 2', 'hero 3'];

const myArr2 = new Array(0, 1, 2, 3, 4, 5);

// console.log(myArr[0]);

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(10);
// myArr.shift();

// console.log(myArr.includes(0));
// console.log(myHeros.indexOf('hero 2')); // if no value found it wll return -1

const joinedArray = myArr.join();

// console.log(myArr);
// console.log(typeof joinedArray); // string
// console.log(joinedArray);

// +++++++++++++++
// slice, splice

// slice
console.log('A ', myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);

console.log('B ', myArr);

// splice
const myn2 = myArr.splice(1, 3); // manipulates original array

console.log('C ', myArr);
console.log(myn2);
