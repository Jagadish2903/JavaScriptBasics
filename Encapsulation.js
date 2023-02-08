//Getters and setters

let houseDetails={
    name:'John',
    age:33,
    location:'Chennai',

    get getName(){
        return this.name;
    },

    get getAge() {
        return this.age;
    },

    set setName(value) {
    this.name = value;
    }


}

console.log(houseDetails.getName)
houseDetails.setName='Jagadish';
console.log(houseDetails.getName);


//Using Class

class Colors{
    constructor(colorName,colorCode,isActive) {
this.colorName=colorName;
this.colorCode=colorCode;
this.isActive=isActive;

}

get getColorName(){
    return this.colorName;
}

get getColorCode(){

return this.colorCode;
}


set setColorCode(value) {
    if(this.colorCode >100){
        this.colorCode=value;
    }else{
        console.log('Hi There');
    }



}

 
}
let co1=new Colors('red', 20,true)
console.log(co1);

co1.setColorCode=200;
console.log(co1);