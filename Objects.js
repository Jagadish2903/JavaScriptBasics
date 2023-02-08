//Objects is the entity which holds different properties

const house = {
    name: 'Usha Illam',
    totalhouse: 1,
    location: 'Walaja',
    IsAvailable: 'true',
    sqFeet: {
        height: 200,
        width: 400
    },
   address : function () {
console.log('Hi this is walaja house address')
    }
}

console.log(house)
console.log(house.sqFeet);
console.log(house.address); 

//the problem with this approach is that eg. we can not get the total house change every time so we need to have a parameter
//to pass through so we can go for Factory functions


