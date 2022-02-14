// string split()
const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const splitString = anthem.split('');
const splitString2 = anthem.split(' ');
const splitString3 = anthem.split('a');
console.log(splitString);
console.log(splitString2);
console.log(splitString3);
// string join()
const arr = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eight'];
const joinString = arr.join(' X ');
console.log(joinString);
// string slice()
const stringSlice = anthem.slice(5, 18);
console.log(stringSlice);
// string substr()
const subStr = anthem.substr(5, 16);
console.log(subStr);
// string substring()
const subString = anthem.substring(6, 15);
const subString2 = anthem.substring(18, anthem.length);
console.log(subString);
console.log(subString2);
// string concat()
const first = 'first';
const second = 'second';
const third = 'third';
const concatString = first.concat(second);
console.log(concatString);
const concatString2 = first.concat(third).concat('fourth').concat(second);
console.log(concatString2);
