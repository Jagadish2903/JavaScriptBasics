//similar to Function constructor and Prototype inheritance
//class can be declared by two types
//1.using declarion
// class person{
// } 

//2.using class expression
// let person=class {    
// }

class Person {
    constructor(name, location, age) {
        this.name = name;
        this.location = location;
        this.age = age;
        // this.calAge=function(){
        //     console.log(new Date().getFullYear()-age);
        //}
    }
    calAge() {
        console.log(new Date().getFullYear() - age);
    }
}
//we can add the prototype property as well 
Person.prototype.greet=function(){
console.log("Hi There!" + this.name);
}
let john = new Person('john', 'Chennai', '20');
console.log(john);
john.greet();

