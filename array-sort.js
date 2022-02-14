// sorting string array 
const names = ['abul', 'dabul', 'sabul', 'kabul', 'pabul', 'fabul', 'chabul', 'jabul', 'babul'];
const sorted = names.sort();
// console.log(sorted);
const reversed = names.reverse();
// console.log(reversed);

// sorting numbers array 
const numbers = [12, 3, 85, 38, 45, 17, 60, 93, 26, 58, 39, 1, 10, 69, 8, 6];
// const numberNotSorted = numbers.sort();
const numberSorted = numbers.sort(function (a, b) {
  return a - b;
})
console.log(numberSorted);