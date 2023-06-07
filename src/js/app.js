// TODO: write your code here
// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));

function orderByProps(obj, [prop1, prop2]) {
  
  let arrOfObj = [];

  for (let prop in obj) {
    arrOfObj.push({ 'key': prop, 'value': obj[prop] });
  }
  
  
  arrOfObj.sort((prev, next) => {
    // console.log(prev.key, next.key)
    if ( prev.key < next.key ) {
      return -1
    };
    console.log(obj[prop2])
    // if ( prev.key < next.key ) return 1;
  });

  console.log(arrOfObj)

  return
}

const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

orderByProps(obj, ['name', 'level']);

