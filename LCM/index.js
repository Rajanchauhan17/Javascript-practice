//  LCM (Least Common Multiple) Calculator
 
 let a=parseInt(prompt("Enter The Value of a:"))
 let b=parseInt(prompt("Enter The Value of b:"))
function getLCM(a,b){
    g=Math.max(a,b)
    s=Math.min(a,b)
    for(i=g;i<=a*b;i+=g){
        if(i%s==0)
        return i
    }
    return a*b
}

console.log(`The LCM OF ${a} and ${b} is ${getLCM(a,b)}`)