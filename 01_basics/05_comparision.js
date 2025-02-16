// console.log('2 > 1', 2 > 1);
// console.log('2 >= 1', 2 >= 1);
// console.log('2 < 1', 2 < 1);
// console.log('2 == 1', 2 == 1);
// console.log('2 != 1', 2 != 1);

console.log('2' > 1); // true
console.log('02' > 1); // true

// ===================================
// avoid these comparisions
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
// ===================================

// strict check with === with data type check
// use comparision with type check
console.log('2' === 2); //false
