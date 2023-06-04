// TODO: write your code here
// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));

function orderByProps(obj, [prop1, prop2]) {
let keys = Object.keys(obj);
let values = Object.values(obj);

for (let key of keys) {
  console.log({ key })
}
for (let value of values) {
  console.log({ value })
}

let newObj = Object.assign({}, Object.keys(obj), Object.values(obj));

console.log(newObj)

// console.log(keys, values, prop1, prop2)
// if (keys.includes(prop1)) {
//   let arrSort = keys.sort();
//   console.log(arrSort)
// } else {
//   console.log('no')
// }

return 
}

const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

orderByProps(obj, ['name', 'level'])