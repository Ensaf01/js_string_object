const person={
    name:'hero',
    age:30,
    ismarried:true,
    address:'dinajpur',
    phoneNumber:10221212,
    profession:'student',
    country:'Bangladesh',
    'favorite color':['red','blue','green']
}
console.log(person);

// update object property value
person.name='ensaf hossian';
person.age=35;
//person['favorite color']=['yellow','purple'];
person['favorite color'].push('yellow');

// change object property value using variable
const proName='profession';
person[proName]='web developer';

console.log(person);

console.log(person['favorite color']);
