const products = [
  'Dell Black color laptop with Keyboard and Mouse and huge Display',
  'iphone 7 white having camera and full battery health',
  'samsung tv with full hd resolution display',
  'yellowgreen Color ps5 with wellbuild functions',
  'Dell lightblue color buildin pc with large Display',
  'Xiaomi smart watch with cotton soft belt',
  'dell laptoP Having silver color and 16 gb ram',
  'titan Watch chain belt with rose red Color with analog display',
  'color Color color'
];
// by indexOf() 
const arr = [];
const search = 'color';
for (const product of products) {
  if (product.toLowerCase().indexOf(search.toLowerCase()) != -1) {
    arr.push(product);
  }
}
console.log(arr);
// by includes()
const arr2 = [];
for (const product of products) {
  if (product.toLowerCase().includes(search.toLowerCase())) {
    arr2.push(product);
  }
}
console.log(arr);

const search2 = 'dell';
const arr3 = [];
for (const product of products) {
  if (product.toLowerCase().startsWith(search2.toLowerCase())) {
    arr3.push(product);
  }
}
console.log(arr3);
const arr4 = [];
for (const product of products) {
  if (product.toLowerCase().endsWith('display'.toLowerCase())) {
    arr4.push(product);
  }
}
console.log(arr4);