function ispalindrome(number){
    let numstr=number.toString()
    let result=numstr.split("").reverse().join("")
    if(result==number){
        console.log("given number is palindrome")
    }
    else{
        console.log("not a palindrome")
    }
}

ispalindrome(131)