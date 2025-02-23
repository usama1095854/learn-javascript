// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is Dynamic typed programming language
const score = 100;
const scoreValue = 100.3;

const isLogged = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 5654984351654654n;
// console.log(typeof bigNumber);

// Reference (Non primitive)
// Array, Objects, Functions

const arr = ['value 1', 'value 1', 'value 3'];
const myObj = {
  name: 'Usama',
  age: 23,
};
const myFunction = function () {
  console.log('My function');
};

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-Primitive)

let name1 = 'Usama';
let anotherName = name1;

anotherName = 'change name';

console.log(name1);
console.log(anotherName);

let userOne = {
  userName: 'usama@google.com',
  email: 'usama@gmail.com',
};

let userTwo = userOne;
userTwo.email = 'haris@gmail.com';

console.table(userTwo);
console.table(userTwo);
