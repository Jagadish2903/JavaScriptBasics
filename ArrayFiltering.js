
const numbers=[1,2,3,5,7,8,9,12,24]

//to find the Odd number and Even number
let evenNumbers=numbers.filter(function(value){
    return value % 2 === 0;
})
let oddNumbers=numbers.filter(function(value){
    return value%2 !=0; 
})

console.log('Even Numberes are'+ evenNumbers)
console.log('Odd Numberes are'+ oddNumbers)


//Array Filtering is used to filter mobiles from multiple options eg.flipkart