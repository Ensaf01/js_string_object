const str1 = "he is good student and honest person in our good school";
//slice() method use
const slice1=str1.slice(1,8);// 1 is start index and 8 is end before index 
console.log(str1.length);
console.log(str1.includes("good"));// check the word is exist in string or not
console.log(str1.indexOf("good"));// find the index of word in string
console.log(str1.lastIndexOf("good"));// find the last index of word in string as like work array
console.log(str1[3]);// we can access string value as like array
console.log(slice1);

console.log(str1.split(" ")); // split the string into array by space
console.log(str1.split("o")); // split the string into array by "o" that means remove "o" and split the string into array

console.log("\njoin method use \n");
// join() method use
const array1="rony,mony,tony";
const array2=array1.split(",");
console.log(array2);
const join1=array2.join(" ");// join the array into string by space
console.log(join1);
const join2=array2.join("-");// join the array into string by "-" or usd "|" or any symbol that you want
console.log(join2);