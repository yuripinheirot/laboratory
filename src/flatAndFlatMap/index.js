const arrayDeArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const objetosComArrays = [
  {
    nome: 'Pedro',
    cores: ['azul', 'preto', 'branco'],
  },
  {
    nome: 'João',
    cores: ['verde', 'preto', 'branco'],
  },
]

const flat = arrayDeArrays.flat()
const flatMap = objetosComArrays.flatMap((obj) => obj.cores)

console.group('flat')
console.log(flat)
console.groupEnd()

console.group('flatMap')
console.log(flatMap)
console.groupEnd()
