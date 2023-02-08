//Object Cloning 

const car1={
    color:'red',
    numberOfWheels:4,
    isRunning:false,
    trip(){

    }
}

const car2={
};


//1.Using for in loops
for(key in car1){
    car2[key] = car1[key];
}
console.log(car2);


console.log('=================================')


//2. Using Object.assign and clonning to blank object
const car3=Object.assign({}, car1);
console.log(car3);
car3.isServiced = true;
console.log(car3);



console.log('================================')

//Using Object.assign and clonning to Object with some property
const car4=Object.assign({
    windshield:true,
}, car1);

console.log(car4);

console.log('================================');


//3.Using ...spread Operator

const car5={...car1}
console.log(car5);

