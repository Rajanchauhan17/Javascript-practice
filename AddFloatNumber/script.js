//to add float number
function floatadd(num1,num2){
    
let addfloat=(num1+num2).toFixed(2);
    console.log("floataddition=",addfloat)
    return addfloat;
}
    let num1=parseFloat(prompt("enter the first number="))
    let num2=parseFloat(prompt("enter the second number="))

floatadd(num1,num2)