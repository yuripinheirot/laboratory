const moment = require('moment')
// const vacations = require('./vacations.json')

// const vacationsFinished = vacations
//   .filter((date) => {
//     return moment(date.startsAt).isBefore(new Date()) && moment(date.finishesAt).isBefore(new Date())
//   })
//   .map(({ id, startsAt, finishesAt, status }) => ({ id, startsAt, finishesAt, status }))
//   .reduce((prev, curr) => {
//     const currentYear = moment(curr.finishesAt).year()

//     if (!Array.isArray(prev[currentYear])) {
//       prev[currentYear] = [curr]
//     } else {
//       prev[currentYear].push(curr)
//     }

//     return prev
//   }, {})

// const vacationsInProgress = vacations
//   .filter((date) => {
//     return moment(date.startsAt).isSameOrBefore(new Date()) && moment(date.finishesAt).isSameOrAfter(new Date())
//   })
//   .map(({ id, startsAt, finishesAt, status }) => ({ id, startsAt, finishesAt, status }))

// const vacationsPending = vacations
//   .filter((date) => {
//     return moment(date.startsAt).isAfter(new Date()) && moment(date.finishesAt).isAfter(new Date())
//   })
//   .map(({ id, startsAt, finishesAt, status }) => ({ id, startsAt, finishesAt, status }))

// console.log(vacationsFinished)

const startsAt = '2022-03-06T06:34:55.813Z'
const finishesAt = '2022-04-24T22:39:54.088Z'

console.log(moment(finishesAt).diff(startsAt, 'days'))
