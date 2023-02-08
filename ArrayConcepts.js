//Dynamic in nature 

let colors = ['red', 'blue', 'green', 'yellow','red']

console.log(colors);

//to get the length
console.log(colors.length);

//to get the values from the array based on index 
console.log(colors[2]);
console.log(colors[5]); // it wont through Array out of bound like java instead throws as undefined


//to add the values to the array 
colors.push('pink', 6);
console.log(colors);

//to add the values in the beginning of the array
colors.unshift('purple')
console.log(colors);

//to add the values inbetween the array
colors.splice(2, 0, 'black');   //here 2 is the starting point and 0 is deletign count and black is the insertion value 
console.log(colors);

//to print all the values in the array usung for in loop

for (let key in colors) {
    console.log(colors[key]);
}

console.log('=============================================')

//to find the index of the value in the array
console.log(colors.indexOf('yellow'));
console.log(colors.indexOf(2)); //it will print -1 if invalid 

console.log('============================================')

console.log(colors.indexOf('red')); //since red is printed twice if we need to count from specific index 
console.log(colors.indexOf('red',2));// it will start the count from 2nd index to search for red


//to verify the value present in array 
console.log(colors.includes('blue')); //it will print true or false



//2. Reference types 
//Arrays can have Objects as well 

const laptops=[
 {
    name:'dell',     
    cost:1000
 },
    {
       name:'hp',
       cost:1200
    }

]

//to get the value of first function inarray using lambda function
const c1=laptops.find(laps=>laps.cost===1000)

console.log(c1)

//to get the index of first function in array lambda function
const c2=laptops.findIndex(laps =>laps.name === 'hp');
console.log(c2)

//to access the property of the function inside the array

console.log(c1.name);
console.log(c1.cost);

console.log('============================================')


//deleting the value in array 
const courses=['selenium', 'javascript','java'];

//to remove the last value from array 
const c6=courses.pop();
console.log(c6);
console.log(courses);

//to remove the first element of the array
const c7=courses.shift(); 
console.log(c7);
console.log(courses);

//to delete the particular element
const c8=courses.splice('Javascript',0);
console.log(c8);
console.log(courses);

//to empty an array 
//1. reassign the value 
let area=[3,4,5]
area=[];
console.log(area);

//using .length  //always recommended
const dishes=['biriyani','brinjal']

dishes.length=0;
console.log(dishes);

//3.using splice method
let chairs=[1,2,34,56,]
 let  c9=chairs.splice(0,chairs.length);
console.log(c9);
console.log(chairs);

