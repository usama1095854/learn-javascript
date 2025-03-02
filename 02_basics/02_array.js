const marvel_heros = ['thor', 'Ironman', 'spiderman'];
const dc_heros = ['superman', 'flash', 'batman'];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const joined_heros = marvel_heros.concat(dc_heros);
console.log(joined_heros);

const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const flaten_arr = another_array.flat(Infinity);
console.log(flaten_arr);

console.log(Array.isArray('usama')); // false
console.log(Array.isArray(['usama'])); // true

console.log(Array.from('usama')); // ['u', 's', 'a', 'm', 'a']

console.log(Array.from({ name: 'usama' })); // [] we have to write make array of keys or values

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
