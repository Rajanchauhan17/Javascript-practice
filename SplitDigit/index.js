// Function to split a number into its digits
function splitnumber(number){
    let result=number.toString().split("")
    return result;
}
let ans=splitnumber(23456)
console.log("ans=",ans)