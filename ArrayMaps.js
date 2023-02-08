//Mapping in javascript is used to maintain our own mapping of given array

const members=[
    {id:2,firstName:'jagan',lastName:'terror'},
    {id:3,firstName:'Lavanya',lastName:'terrorist'},
    {id:4,firstName:'Usha',lastName:'mostWanted'}
]
 

let details=members.map(function(value){
let fullName=value.firstName+" "+ value.lastName
let obj={id:value.id,fullName:fullName}
return obj;

})

console.log(details);