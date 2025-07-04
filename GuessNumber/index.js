// JavaScript Program to Guess Number

let num = parseFloat(prompt("enter the guess number range(1 to 100)="));
let guess = Math.floor(Math.random() * 100) + 1;

if (num === guess) {
  console.log("guess is right;");
} else {
  console.log("guess is wrong");
}
console.log("guess number is ", guess);
