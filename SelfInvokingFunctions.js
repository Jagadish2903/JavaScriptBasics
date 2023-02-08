//Instead of manually calling a function \
//which has actions to be completed it can be done by making it as self invoking using like below 


let x=10;
let y=20;

const addNumbers = (function(){
console.log(x+y);
})();