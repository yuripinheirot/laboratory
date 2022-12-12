// const {
//   errors: { error },
// } = require('./errors.json')

// const everyIsRequiredField = error.every(({ subErrorCode }) => subErrorCode === '92412')

// console.log({ everyIsRequiredField })

const myObject = {
  a: "",
  b: "1",
  c: null
}

const myEvery = Object.values(myObject).some(value => !!value === true)

console.log(myEvery)
