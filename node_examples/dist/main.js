"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factorial_1 = require("./factorial");
console.log('=== n-factorial ===');
const argv = require('yargs').demandOption('num').argv;
const num = argv.num;
console.log(`The factorial of ${num} is ${factorial_1.factorial(num)}`);
//# sourceMappingURL=main.js.map