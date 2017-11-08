// const person = {
//     name: 'Alexandru',
//     age: 25,
//     location : {
//         city: 'Brasov',
//         temperatur: 10
//     }
// };

// const {name, age} = person;

// console.log(`${name} is ${age}.`);

// 

const address = ['Strada Turnului', 'Brasov', 'Brasov', '500170'];
const[street, , county, postcode] = address;

console.log(`The county is: ${county} and the post code is: ${postcode}`)