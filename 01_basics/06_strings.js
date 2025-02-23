const userName = 'Usama';
const repoCount = 10;

// console.log(userName + repoCount + ' Value');
console.log(`Hello my name is ${userName} and my repo count is ${repoCount}`);

// const gameName = new String('Game-1');
const gameName = 'Game-1';
console.log(gameName);
console.log(gameName[0]); // G
console.log(gameName.__proto__);

console.log(gameName.length); // length of string

console.log(gameName.toUpperCase()); // GAME 1

console.log(gameName.charAt(2)); // m
console.log(gameName.indexOf('m')); // 2

const newString = gameName.substring(0, 4); // Game
console.log(newString);

const anotherString = gameName.slice(-6, 4);
console.log(anotherString);

const newStringOne = '       name         '; // remove extra space of start and end

console.log(newStringOne);
console.log(newStringOne.trim());

const url = 'https://youtube.com/usama%20khan';

const updateUrl = url.replace('%20', '-');
console.log(url);
console.log(updateUrl);

console.log(url.includes('usama'));

const text = 'The quick brown fox jumps over the lazy dog';
console.log(text.split(' '));
