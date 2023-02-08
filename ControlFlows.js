//if else 
let time =19;

if(time>=6 && time<12){
 console.log('Good Morning')
}
else if(time >=12 && time <=18){
    console.log('Good Afternoon');

}
else{
    console.log('Good Evening');
}

//switch case

let role;
role='Vendor'

switch(role.toLowerCase()){
case 'guest':
    console.log('Guest User');
break;
case 'admin':
    console.log('Admin User');
break;
case 'vendor':
    console.log('vendor User');
break;
default:
    console.log('Please select a role or correct role');

 
}
