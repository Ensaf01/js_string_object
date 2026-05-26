const person={
    name:'hero',
    age:30,
    ismarried:true,
    address:'dinajpur',
    phoneNumber:10221212,
    'favorite color':['red','blue','green'],
    'full name':{
        firstName:'hero',
        lastName:'alam'
    }
}
// must be use [] when the property name has space or special character
const fullName=person['full name'];
console.log(fullName);
console.log(person['favorite color']);


// normal way to access object property
/*console.log(person.name);
console.log(person.age);
const year=person.age;
console.log(year);
const address=person.address;
console.log(address);
// another way to access object property
console.log(person['name']);
const boyos=person['age'];
console.log(boyos);

*/

 