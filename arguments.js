// using unlimited parametes with arguments (array like Object)
function addElement(num) {
  let sum = 0;
  for (const number of arguments) {
    sum = sum + number;
  }
  return sum;
}

const numbers = addElement(12, 18, 22);
// console.log(numbers);

// another function using arguments
function addName(parts) {
  let fullName = '';
  for (const part of arguments) {
    fullName = fullName.concat(part, ' ');
  }
  return fullName;
}

const randomName = addName('hablu', 'jablu', 'tablu', 'kablu', 'sablu');
// console.log(randomName);

// another another function using arguments
function largest(num) {
  let largest = arguments[0];
  for (const number of arguments) {
    if (number > largest) {
      largest = number;
    }
  }
  return largest;
}

const largestNumber = largest(34, 63, 12, 63, 21, 53, 62, 44, 73, 64, 11, 42);
console.log(largestNumber);