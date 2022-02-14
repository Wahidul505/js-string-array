const userId = 'waHidUl505';
const userSavedId = 'WahiduL505';
if (userId.toLowerCase() == userSavedId.toLowerCase()) {
  console.log("matched");
}
else {
  console.log('no match');
}
// another example 
const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const searching = 'bangla';
if (anthem.toUpperCase().indexOf(searching.toUpperCase()) != -1) {
  console.log('it is in the string');
}
else {
  console.log('no');
}