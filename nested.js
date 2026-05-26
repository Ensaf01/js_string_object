const person={
    name:'hero',
    age:30,
    isMarried:true,
    address:'dinajpur',
    phoneNumber:10221212,
    'favorite color':['red','blue','green'],
    events:['event1', 'event2', 'event3', 'event4'],
    'full name':{
        firstName:'hero',
        lastName:'alam',
        specialName:{
            Nm:'Bijoy',
            ag:"50"
        }
    }
}
person.events.push('event5');
person.events[2]='updated event3';
console.log(person.events[2]);
// console.log(person['full name'].firstName);
console.log(person['full name'].specialName.Nm);

// delete object property
delete person.isMarried;
console.log(person);

//delete keys values
delete person['full name'].specialName.ag;
console.log(person);
console.log(person['full name'].specialName.ag);

// nested object