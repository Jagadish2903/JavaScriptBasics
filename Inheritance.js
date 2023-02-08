//mechanism that allows us to create new classes from the existing class.
// With Inheritance we can reuse the existing code
//main adv is Code Reusability.
//Using Prototype and Function Constructor we can achieve Inheritance.
//eg.


const Housedetails = function (no,name,location,noOfRooms) {
this.no=no;
this.name = name;
this.location = location;
this.noOfRooms = noOfRooms;
}

//creating a proptype property since when we write this inside the constructor function all objects/class 
//using the property of address function will be same so to change and achive inheritance we are using the 
//prototype property of address function
Housedetails.prototype.address=function(){
    console.log('The address is '+' '+this.no+' '+this.name+' '+this.location)
    }



//Creating 1st object and inhering the properties of housedetails constructor function
let house1=new Housedetails(20,'Jagan','walaja',3)
console.log(house1);

//house 1 can inherit the properties of protype property of the constructor function as well 
house1.address()


//Creating 2nd object and inhering the properties of housedetails constructor function
let house2=new Housedetails(21,'Lavanya','chennai',5)
console.log(house2);

//house 2 can inherit the properties of protype property of the constructor function as well 
house2.address()


//N:B Every new Object is the instance  of Object Object and it can access the prototype property of Object 
//eg.
let flag=Housedetails.hasOwnProperty('name');
console.log(flag);
    
//hasOwnProperty method is the prototype property of Object
//Object Prototype properties are as 
//1.hasOwnProperty(), 2.isPrototypeOf(),3.ToString ..etc


//In case of Array 
let color=['red','green','blue']

//here color is the color Object and is the instance of Array Object and can be used to access the 
//prototype property methods such as 
//.shift() .push() , .pop() , .splice() , etc

console.log(typeof(color))

