class Person{

constructor(name,age,location){
this.name = name;
this.age = age;
this.location = location;
}

address(){
console.log("Hi there this is my address");
}

//creating a static method inside the class 
static greet(){
    console.log("Hello How are you?");
} 


}


//static method can be called by using the class name 
Person.greet()

let c1=new Person('jaga',34,'chennai')
console.log(c1);







