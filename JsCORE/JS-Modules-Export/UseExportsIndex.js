import fibonacci, { greetUser, calculateProduct, calculateSum } from "./FibonacciModule.js";


console.error("THis is file which use exports from FibonacciModule.js");

console.log(greetUser("John"));
console.log(calculateProduct(2, 3));
console.log(calculateSum(2, 3));
console.log(fibonacci(10));