function house(name) {
    const details = {
        location: 'House of' + name,
        isAvailable: false,
        noOfRooms: {
            Bedrooms: 1,
            Bathrooms: 2,
            Balcony: 1
        },
    }
    return details;
}
//or we can write it as 
// function house(name) {
//     return {
//         location: 'House of' + name,
//         isAvailable: false,
//         noOfRooms: {
//             Bedrooms: 1,
//             Bathrooms: 2,
//             Balcony: 1
//         },
//     }
    
// }

// The above code has different object properties and we have the name parameter as well 


const c1=house('jagan');
console.log(c1);

