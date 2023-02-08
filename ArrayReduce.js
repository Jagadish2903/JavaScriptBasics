//reduce method is used to sum all the values and give as a single value in the array

//for primitive types
const result=[23,10,20,22,24]

let finalValue=result.reduce(function(previousValue, currentValue){
return previousValue + currentValue;
});
 
console.log(finalValue);



//============= for a refernce type

const shoppingCart=[
    {id:1,grocery:"Maggi",cost:20},
    {id:4,grocery:"milk",cost:40},
    {id:3,grocery:"bread",cost:70},
]


let shoppingCost=shoppingCart.reduce(function(previousValue,currentValue){
let final =previousValue + currentValue.cost
return  final
},0) //,0 is added when it is a Object with different parameters.

console.log(shoppingCost)