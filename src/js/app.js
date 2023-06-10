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

export function showDescription(obj) {
  const specials = [];
  for (let i = 0; i <= obj.special.length - 1; i++) {
    specials.push(obj.special[i]);
    if (!('description' in specials[i])) {
      specials[i].description = 'Описание недоступно';
    }
  }
  // console.log(Object.keys(specials[0]).length)
  return specials;
}
