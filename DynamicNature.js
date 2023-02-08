//During Runtime we can  add or delete the properties of the object

const circle={
radius:2,
height:4,
isAvailable:false,
size(){
    console.log('This is the radius of the'+ this.radius)
}
}

//adding the properties of the object
circle.width=100;
circle.isActive=true;
circle.draw=function(){}; //adding the function

console.log(circle);

console.log('=================================================================');
//delete the properties of the object

delete circle.draw; //deleting the function
delete circle.isAvailable;
console.log(circle);
