const _ = require('lodash')

const string1 = 'alguma coisa'
const string2 = 'ALGUMA COISA'
const string3 = 'ALGUMA'
const string4 = 'coisa'

const stringCapitalized = (input) => {
  return input
    .split(' ')
    .map((word) => _.capitalize(word))
    .join()
    .replace(',', ' ')
}

console.log(stringCapitalized(string1))
console.log(stringCapitalized(string2))
console.log(stringCapitalized(string3))
console.log(stringCapitalized(string4))
