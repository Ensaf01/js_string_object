
// normal string compare

console.log("normal string compare");

const str0 = "hello";
const str01 = "hello";

if (str0 === str01) {
    console.log("The strings are equal.");
} else {
    console.log("The strings are not equal.");
}

console.log("both string are same but space is different: use trim() method");
// both string are same but space is different
// for remove space we can use trim() method,just remove 1st and last space not middle space remove a sentence
const str1 = "hello";
const str2 = "   hello";
if(str1.trim()===str2.trim()){
    console.log("same string");
}
else{
    console.log("are not same string");
}


console.log("upper case and lower case string compare");
// upper case and lower case string compare
const str3 = "Hello";
const str4 = "hello";
if(str3.toLowerCase()===str4.toLowerCase()){

    console.log("same string");
}
else{
    console.log("they are not same string");
}