//Functional Declaration and Function Expression

//1.Functional Declaration 
//no need semicolon at the end of function declarations

let x=10;
let y=10;

function addNumbers(){
console.log(x+y);
}

addNumbers();

//Function Expression
//need to end the statement at the end of function Expression.
//two types 
    //Function Named Expression
    //Anonymized Function Expression 

//function Named Expression since function name a is on both sides 
const a=function a(){
    console.log(x+y);
};
a();
//Anonymized Function Expression
const b=function (){
console.log(x+y);
}
b();

