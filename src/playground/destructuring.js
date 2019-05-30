// object destructuring

// const person = {
//    name: 'alex',
//     age: 44,
//     location: {
//         city: 'Riga',
//         temp: 24
//     }
// };


// const { name: firstname = 'Anonymous', age } = person;
// console.log(`${firstname} is ${age}`);

// const { city, temp: temperature } = person.location;
// console.log(`${temperature} in ${city}`);


// array destructuring

const address = [];


const [, , state = 'UK'] = address;

console.log(`you are in ${state}`)