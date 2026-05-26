const country="bangla desh aa best";
const desh='china';
const earth=`melysiya`;
const addres=new String("dhaka mirpur");

//string count without space,trim remove space from start and end of string not remove space from middle of string
//const countryCount=country.trim().length;
//console.log(countryCount);


// use /\s/g flag to count all the word in string

/*const countryCount=country.replace(/\s/g,"").length;
console.log("total characters (excluding spaces):", countryCount);
*/

//use split() method to split the string into array by space and then count the length of array

/*const countryCount2=country.split(" ").length;
console.log(countryCount2);
*/


// count the total 'a' in country string
/*let sum=0;
for(let i=0;i<country.length;i++){
    if(country[i]==="a"){
        sum++;
    } 
}
console.log("total 'a' in country string:",sum);

*/



// console.log(typeof country)
// console.log(typeof desh)
// console.log(typeof earth)
// console.log(typeof addres)

//string is immutable -> no changeable any value like arry
// array is mutable -> we can change the value use index

console.log(country.length) //count space not just litter
console.log(country[2]) // we can acces string value as like array
console.log(country[0]) // we can acces string value as like array
console.log(country[10]) // we can acces string value as like array
console.log(desh[20]) // we can acces string value as like array