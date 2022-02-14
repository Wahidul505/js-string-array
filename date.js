const firstDate = new Date();
console.log(firstDate);
const secondDate = new Date('1998-12-03');
const thirdDate = new Date('1999-10-03');
// console.log(secondDate);
if (secondDate.getDay() > thirdDate.getDay()) {
  console.log('wahid is older ');
}
else {
  console.log('moshu is older');
}