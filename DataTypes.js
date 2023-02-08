//datatypes
let name="jagadish";
let age =25;
console.log(name + " " + age);

let fName='Jaga'; //String
let num=30; //number
let num2=20.222; //number
let flag=true; //boolean
let price; //undefined
let wheels=null; //object
let price2=undefined; //undefined


//dynamic typing   

let d='Cypress';
d=30;  //when we use the type of d it will show as number since it is changed whereas in java it wont allow to change from string to number


//Object datatype:
let user ={
name2:"Buvan",
age:30

};

console.log(user);
//we can access these properties by following methods
//1. Using dot notation
console.log(user.name2)
console.log(user.age)
console.log(user.name2 + " " + user.age)

//using bracket notation
user['name']='Vikram';
console.log(user.name)



//Arrays 
// Arrays are list of Object and are always dynamic and stores dissimialr data types as well in javascript 

let language = ['javascript','java','python',10];
console.log(language);
// To know the length of array 
console.log(language.length);
//to find the index 
console.log(language[2]);
console.log(language[5]); // it will throw as undefined where as in java it will throw as index out of bound exception



//functions:

//zero parameter function:
function getName(){
    console.log('Hello Cypress Automation');
}

//to call the function we have to use as below 
getName(); // This will call the function


//parameter based function
function getName(name3){
    console.log('Hello Cypress Automation ' + name3);
}

//to call the function we have to use as below 
getName('JagadishKumar'); // This will call the function


// return from the function

function add(num1,num2){

    return num1 + num2;
}

let sum= add(7,8);
console.log(sum);