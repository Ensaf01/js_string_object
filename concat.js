const str1="my";
const str2="name";
const str3="is";
const str4="rony";
// concat() method use
const result=str1.concat(" ",str2," ",str3,"",str4);
const result2=str1+ " "+str2+" "+str3+" "+str4; // we can also use + operator to concat string
const result3=str1.concat(' ').concat(str2).concat(' ').concat(str3).concat(' ').concat(str4); // we can also use concat method multiple time to concat string 
console.log(result);
console.log(result2);
console.log(result3);