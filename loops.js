const mobile={
    brand:'apple',
    model:'iphone 16 pro max',
    price:12000,
    color:'white',
    features:{
        camera:'48MP',
        battery:'5000mAh'
    }
}

//for in loop to access object properties
//for of loop to access array elements

//for in loop
for (let prop in mobile){
    //console.log(prop);
    //console.log(prop,'->',mobile[prop],'->',prop); // to access property value using property name
}


// for of loop to access array elements
const xyz=Object.keys(mobile);
//console.log(xyz); // to get an array of object keys

for (let ky of xyz){
    console.log(ky,'::',mobile[ky]); // to access property value using property name
    console.log("key:",ky,'|',"type:",typeof mobile[ky]); // key name and its value type

}

// for of loop to access object values
const values=Object.values(mobile);
//console.log(values); // to get an array of object values

for (let val of values){
    //console.log(val); // to access property values
}

// total number of properties in an object

let sum=0;
for(let x in mobile){
    sum++;
}
console.log(sum);