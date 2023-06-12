// TODO: write your code here
// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));

export default function orderByProps(data, head) {
  const restProp = Object.keys(data)
    .filter((key) => !head.includes(key))
    .sort();

  const result = [...head, ...restProp];

  return result.map((key) => ({ key, value: data[key] }));
}

// export function showDescription(obj) {
//   const specials = [];
//   for (let i = 0; i <= obj.special.length - 1; i++) {
//     specials.push(obj.special[i]);
//     if (!('description' in specials[i])) {
//       specials[i].description = 'Описание недоступно';
//     }
//   }
//   // console.log(Object.keys(specials[0]).length)
//   return specials;
// }
const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
      // <- обратите внимание, описание "засекречено"
    }
  ]
}

export function showDescription({ special: [...restObj] }) {
  for (let i = 0; i <= restObj.length - 1; i++) {
    if (!('description' in restObj[i])) {
      restObj[i].description = 'Описание недоступно';
    }
  }
  console.log(restObj)
  return restObj;
}

