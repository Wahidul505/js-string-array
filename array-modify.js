function biggerName(names) {
  // to check if the input is an array or not 
  if (Array.isArray(names)) {
    let bigger = names[0];
    for (const name of names) {
      if (name.length > bigger.length) {
        bigger = name;
      }
    }
    return bigger;
  }
  else {
    return 'please , enter a valid input.';
  }

}
const bigger = biggerName(['cemeron', 'stain', 'devid', 'mackguare', 'stella', 'franki']);
console.log(bigger);
const bigger2 = biggerName(1213);
console.log(bigger2);
// array indexof()
const animal = ['hati', 'baag', 'shingho', 'ghora', 'ghondar', 'goru', 'shaap'];
if (animal.indexOf('goru') != -1) {
  console.log('the element is in the array');
}
else {
  console.log("no, it's not");
}
// array includs()
if (animal.includes('lion')) {
  console.log('lion ase');
}
else {
  console.log('lion nai');
}
// array concat()
const arr1 = [12, 13, 14, 15, 16];
const arr2 = ['a', 'b', 'c', 'd', 'e'];
const arrAdd = arr1.concat(arr2);
console.log(arrAdd);
