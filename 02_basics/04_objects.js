const tinderUser = new Object();

tinderUser.id = '123abc';
tinderUser.name = 'user';
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: 'some@gmail.com',
  fullName: {
    userFullName: {
      firstName: 'Usama',
      lasttName: 'Khan',
    },
  },
};

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 3: 'c', 4: 'd' };
const obj4 = { 5: 'e', 6: 'f' };

const obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3);
// console.log(obj3 === obj1);

// const combinedObj = { ...obj1, ...obj2 };
// console.log(combinedObj);

const users = [
  {
    id: 1,
    email: 'usama@gmail.com',
  },
  {
    id: 2,
    email: 'usama@gmail.com',
  },
  {
    id: 3,
    email: 'usama@gmail.com',
  },
  {
    id: 4,
    email: 'usama@gmail.com',
  },
];

// console.log(users[0].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //    [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //  [ '123abc', 'user', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'user' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true / false

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const course = {
  courseName: 'JavaScript Modern Course',
  price: '999',
  courseInstructor: 'Teacher Name',
};

// course.courseInstructor

const { courseName, price, courseInstructor: instructor } = course;
console.log(instructor);

// {
//     "courseName": 'JavaScript Modern Course',
//     "price": '999',
//     "courseInstructor": 'Teacher Name',
// }

// https://randomuser.me/

// https://jsonformatter.org/
