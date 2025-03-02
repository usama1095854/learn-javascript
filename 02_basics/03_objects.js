// singleton, contructor object
// Object.create()

// object literals

const mySym = Symbol('key1');

const JsUser = {
  name: 'Usama',
  'full name': 'Usama Khan',
  [mySym]: 'mykey1', // symbol
  age: 24,
  location: 'Karachi',
  email: 'usama@gmail.com',
  isLoggedIn: false,
  lastLoginDays: ['monday', 'saturday'],
};

// console.log(JsUser.email);
// console.log(JsUser['full name']);
// console.log(JsUser['email']);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = 'usama@google.com';
// console.log(JsUser.email);

// Object.freeze(JsUser);
JsUser.name = 'Usama Khan'; // this will not propagate due to Object.freeze(JsUser)

// console.log(JsUser);

JsUser.greeting = function () {
  console.log('Hello JS User');
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS User ${this.name}`);
};
JsUser.greeting();
JsUser.greetingTwo();
