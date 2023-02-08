//Operators:

//1.Arithmetic Operators:

let x = 10;
let y = 20;

console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x * y);
console.log(y / x);

// we have further divided into increment and decrement operator

//Increment Operation
//Post increment
let p = 1;
console.log(p++); //prints 1
console.log(p); //prints 2 since it gets post incremented

let m = 1;
let n = m++;
console.log(m); //prints 2
console.log(n); //prints 1


//post decrement
let a = 1;
console.log(a--); //prints 1
console.log(a); //prints 0 since it gets post decremented

let b = 1;
let c = b--;
console.log('b value is ' + b); //prints 0
console.log('c value is '+ c); //prints 1

//pre increment

let d = 1;
console.log(++d); //prints 2 since it gets pre incremented
console.log(d); //prints 2 since it gets pre incremented

let e = 1;
let f = ++e;
console.log(e); //prints 2 since it gets pre incremented
console.log(f); //prints 2 since it gets pre incremented

//pre decrement

let g = 1;
console.log(--g); //prints 0 since it gets pre decrement
console.log(g); //prints 0 since it gets pre decrement

let h = 1;
let i = --h;
console.log(h); //prints 0 since it gets pre decrement
console.log(i); //prints 0 since it gets pre decrement

//Assignemnt Operator:

let o= 10;
o+= 20;
console.log(o) //prints 30 

//Comparison Operator:(<,>,==,=,<=,>=)
//=== is Strict quality it will check both the type and value 
//gives boolean 
// == is loose equality and it will check the value only
let r=10;
console.log(r>1) 

//loose equality
console.log('1'==1); //prints true

//strict equality
console.log('1'===1); //prints false


//Ternary Operator
let points =100;
let type = points >110 ? 'GoldCard ': 'SilverCard';
console.log(type); //if points is greater it will print gold else silver 

//Logical Operators
//And Operators
console.log('true' && 'false');

//or Operator
console.log('true' || 'false');

//Not Operator
let isActive = false;
console.log(!isActive);

//Logical operatopr with Non boolean operators
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(false || 'nav'); //nav
console.log(false || 10); // 10
console.log(false || null);// null
console.log(false || undefined);// undefined
console.log(true || 'naveen');// true
console.log(true || null);// true
//above cases first check the first value if true it will print true if false it will print next non boolean if present 
// practical use case 

let userColor='';
let defaultColor='blue';

console.log(userColor || defaultColor);

//Operator Precedence:
console.log(2+5*2) //gives 12
console.log((2+5)*2) // gives 14

//Swap value 
let s=10;
let t=20;
let u= s;
  s=t;
  t=u;

console.log(s); 
console.log(t);

//introduce the new variable u





