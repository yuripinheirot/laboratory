const _ = require('lodash')

const string1 = 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS'
const string2 = 'ALGUMA coisa'
const string3 = 'ALGUMA'
const string4 = 'coisa'

const stringCapitalized = (input) => {
  return input
    .split(' ')
    .map((word) => _.capitalize(word))
    .join(' ')
}

console.log(stringCapitalized(string1))
console.log(stringCapitalized(string2))
console.log(stringCapitalized(string3))
console.log(stringCapitalized(string4))
