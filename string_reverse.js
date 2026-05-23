const string1="i am a hero to zero. ";
//sortcut reverse string

// const reversedStringx=string1.split("").reverse(); //without join() method we can not reverse string because reverse() method return array and we want string so we need to use join() method to convert array to string
// console.log(reversedStringx);

const reversedString=string1.split("").reverse().join("");
console.log(reversedString);

// normal reverse string
let reversedString2="";
for(let i=string1.length-1;i>=0;i--){
    reversedString2+=string1[i];
}
console.log(reversedString2);

//normal reverse string use for loop
let reversedString3="";
for(let i=0;i<string1.length;i++){
    reversedString3=string1[i]+reversedString3;
}
console.log(reversedString3);