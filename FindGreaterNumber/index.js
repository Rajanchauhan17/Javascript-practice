// Find greatest number among three numbers


let a = parseInt(prompt("enter the value of a="));
let b = parseInt(prompt("enter the value of b="));
let c = parseInt(prompt("enter the value of c="));
if (a >= b && a >= c) {
  console.log(`value of a = ${a} is greater`);
} else if (b >= a && b >= c) {
  console.log(`value of b = ${b} is greater`);
} else {
  console.log(`value of c = ${c} is greater`);
}
