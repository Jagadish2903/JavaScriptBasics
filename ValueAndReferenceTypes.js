//Value type 

let x=10;
y=x;
x=20;
console.log(x);// It will print 20
console.log(y); //it will still point to 10


//reference Types
//Objects 
let p={
    value:25
};
let q=p;
p.value=30;
console.log(p.value);//it will print 30);
console.log(q.value);//it will print 30); since the reference is pointing to p