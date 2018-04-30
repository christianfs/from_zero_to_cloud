const factorial = require('./factorial')

console.log('n-factorial')

const argv = require('yargs').demandOption('num').argv

const num = argv.num

console.log(`The factorial of ${num} is ${factorial(num)}`)
