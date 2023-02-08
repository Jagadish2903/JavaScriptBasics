//Enumrating the objects is getting the properties of the object

//Using for in loop
let colors = {
    color1: 'red',
    color2: 'green',
    color3: 'blue'
}

for(key in colors) {
    console.log(key,colors[key])
}

let guests = ['siva','harish','vikram']

for(key in guests) {
    console.log(key, guests[key])
}

console.log('=============================================');

//Using For of we can use only for Arrays. so we are rearranging to object.keys

for(key of Object.keys(colors)){
    console.log(key);
}//color1
//color2
//color3

for(keys of guests){
    console.log(keys);
}

 
//to get the Keys as well we need to pass Obect.entries 
for(key of Object.entries(colors)){
    console.log(key);
}

//Using in Operator

if('color1' in colors){
    console.log('Yes it is available');
}else{
    console.log('No it is not available');
}