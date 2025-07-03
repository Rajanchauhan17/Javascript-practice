
function isprime(n){
    if(n<=1){
        console.log(`${n} is not a prime number`)
        return;
    }
    
        for(i=2;i<n;i++){
            if(n%i==0){
                console.log(`${n} is not a prime number`)
                return;
            }
            
        }
            console.log(`${n} is a prime number`)
}

isprime(4)