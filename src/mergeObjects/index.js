const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  e: 6
}

const obj2 = {
  a: 4,
  d: 5,
}

const result = Object.assign({}, obj1, obj2);

console.log(result);