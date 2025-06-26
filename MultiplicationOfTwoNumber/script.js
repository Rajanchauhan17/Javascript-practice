// take two numbers from user 

// let num1=prompt("enter the first number=")
// let  num2=prompt("enter the second number= ")
// let multiply=num1*num2
// console.log("mulltiplication of two number is",multiply)
 
// // check if the input is a number
// if(isNaN(num1)||isNaN(num2)){
//     console.log("enter the valid number")

// }


//using functionfunction multiplyTwoNumbers
    function multiply(num1, num2){
   num1 = parseFloat(num1);
   num2 = parseFloat(num2);

   if (isNaN(num1) || isNaN(num2)) {
      console.log("❌ Invalid input");
      return NaN;
   }

   let pod = num1 * num2;
   console.log("✅ Product of two numbers is =", pod);
   return pod;
}
multiply(4,3)