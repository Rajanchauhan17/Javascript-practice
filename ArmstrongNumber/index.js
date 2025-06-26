// Function to check if a number is an Armstrong number

function isarmstrong(number){
let temp=number;
let sum=0;
let digitlength=number.toString().length
while(temp>0){
    let digit=temp%10;
       sum+=  digit**digitlength
       temp=parseInt(temp/10)
       
    
}
if(sum==number){
    console.log(`${number} given number is armstrong`)
}
else{
    console.log(`${number} given number is not an armstrong`)
}
}
 
 isarmstrong(15) 