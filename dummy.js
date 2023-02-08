//to the occurance
let string = "Hello Jagadish welcome to the javaScript";

let charOccurance = "a";
let count = 0;
let value = string.indexOf(charOccurance);

while (value !== -1) {
  count++;
  value = string.indexOf(charOccurance, value + 1);
}

console.log(count);

//2. Method 

let str ="Hi this is Jagadish";

 let result=[...str].reduce(function(a,b){
a[b]=a[b]?a[b]+1:1;

return a; 
 },{}
 )

 console.log(result)


