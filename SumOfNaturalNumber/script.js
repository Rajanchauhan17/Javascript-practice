function sumOfNatural(num){
    let sum=0;
    for(i=1;i<=num;i++){
      sum=sum+i;
    }
     return sum;
        

}

let NaturalNumber=sumOfNatural(3)
console.log("the sum of Natural number is",NaturalNumber)