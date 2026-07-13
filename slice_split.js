const str1 = "he is good student and honest person in our good school";
//slice() method use
const slice1=str1.slice(1,8);// 1 is start index and 8 is end(7,n-1) before index
console.log(slice1); 
console.log(str1.length);
console.log(str1.includes("good"));// check the word is exist in string or not
console.log(str1.indexOf("good"));// find the index of word in string
console.log(str1.lastIndexOf("good"));// find the last index of word in string as like work array
console.log(str1[3]);// we can access string value as like array

//"he is good student and honest person in our good school"
console.log(str1.split(" ")); // split the string into array by space
const split_1=str1.split("o")// split the string into array by "o" that means remove "o" and split the string into array
console.log(split_1,split_1.length); // answer ,array size now 10

console.log("join method use ");
// join() method use
const string1="rony,mony,tony";
const array2=string1.split(","); //string to array convert
console.log(array2);
const join1=array2.join(" ");// join the array into string by space
console.log(join1);
const join2=array2.join("-");// join the array into string by "-" or usd "|" or any symbol that you want
console.log(join2);