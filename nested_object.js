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
console.log("print 1->" +person.events); 
person.events[2]='updated event3';
console.log("print 2->" +person.events[2]);
// console.log(person['full name'].firstName);
console.log("print 3->" +person['full name'].specialName.Nm);

// delete object property
delete person.isMarried;
console.log( person);

//delete keys values
delete person['full name'].specialName.ag;
console.log(person);
console.log(person['full name'].specialName.ag); // undefined because ag does not exist in object

// nested object