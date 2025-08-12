// write a program to merge two sorted array


// Two sorted arrays to merge
let arrayOne=[1,2,3,4,5]
let arrayTwo=[4,6,7,8,]

// Result array for merged output

let Merge=[]
// Pointers for both arrays
let i=0
let j=0

// Merge elements from both arrays in sorted order
while(i<arrayOne.length && j<arrayTwo.length){
    if(arrayOne[i]<arrayTwo[j]){
         // If element in arrayOne is smaller, push it and move pointer i
        Merge.push(arrayOne[i])
        i++
    }
    else{
                // If element in arrayTwo is smaller or equal, push it and move pointer j

        Merge.push(arrayTwo[j])
        j++
    }
}
// If any elements are left in arrayOne, push them
while(i<arrayOne.length){
    Merge.push(arrayOne[i])
    i++
}
// If any elements are left in arrayTwo, push them
while(j<arrayTwo.length){
    Merge.push(arrayTwo[j])
    j++
}

// Final merged sorted array
console.log(Merge)