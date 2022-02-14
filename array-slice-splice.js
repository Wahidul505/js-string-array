// array slice()
const numbers = [23, 53, 12, 34, 17, 62, 37, 47, 25, 52, 62, 72, 54];
const arraySlice = numbers.slice(3, 9);
console.log(arraySlice);
console.log(numbers);
// array splice()
const arraySplice = numbers.splice(3, 2, 999);
console.log(arraySplice);
console.log(numbers);
const arraySplice2 = numbers.splice(3, 0, 555, 222, 333);
console.log(arraySplice2);
console.log(numbers);