//Constructor Functions used to create Objects 
//Constructor functions always uses Pascal notation

function housedetails(name) {
    this.name='Usha'+name,
    this.address=name+ '27 strreet',
    this.location=function() {
        console.log('This is my address',name);
    }
 
}

const c2= new housedetails('jagan'); //to call the constructor function we need to use new keyword

console.log(c2)
console.log(c2.address);
console.log(c2.name);
c2.location();
