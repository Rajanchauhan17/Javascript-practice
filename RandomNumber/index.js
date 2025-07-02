// Generate Random Number in Given Range Using JavaScript
let min=parseInt(prompt("enter the min value="))
let max=parseInt(prompt("enter the max value="))
let result=Math.floor(Math.random()*(max - min +1))+min;
console.log(`Random number between ${max} and ${min} =${result}`)