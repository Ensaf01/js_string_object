// primitive data type
let name = 'hero' // string literal
let age = 30 // number literal
let isMarried = false // boolean literal
let address = null // null literal
let phoneNumber = undefined // undefined literal

// object data type
let person = {
    name: 'hero',
    age: 30,
    isMarried: false,
    address: null,
    phoneNumber: undefined
};

const country = {
    name: 'Bangladesh',
    capital: 'Dhaka',
    population: 160000000,      
}
console.log(typeof name); // string
console.log(typeof country); // object
console.log(typeof person); // object

const bottle={
    color:'red',
    price:100,
    isCleaned:true,
    capacity:'1 liter',
    material:'plastic',
    brands: {
        name:'hero',
        owner:'hero',
        address:'dhaka'

    }

}

console.log(bottle);