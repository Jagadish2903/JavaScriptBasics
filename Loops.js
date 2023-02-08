//for loop 
for(let i = 0;i<10;i++) {
    console.log(i)
        if(i%2===0){
            console.log('Correct number of arguments');
        }
    
}

//while loop

let i=9;
while(i<10){

console.log(i)
i++; //if i++ is not written then it will keep on printing
}


console.log('======================================')
//do while loop

let j=0;
do{
    console.log('Hi there'+ j);
    j++;
}
while(j<10){
console.log(j)
j++; 
}

console.log('======================================')


//for in 
//similar to for each in java 
let person = {
    name : 'John',
    age:25

}

//calling the object property using for in 
for(let key in person){
    console.log(key,person[key])//dot notation wont work coz key is representing the whole name:'John' thats why using bracket notation
}


let colors =['red','blue','green','yellow',15]
for(let index in colors){
console.log(index,colors[index])
}

console.log('=======================================================');


//for of loop
//mainly used for arrays
//while using for of no need to use any notation like dot or bracket notation 

let games=['fifa','wwe','cricket','GOT']
for(let index of games){
console.log(index); 
}
