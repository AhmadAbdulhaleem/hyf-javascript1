let myString = "hello,this,is,a,difficult,to,read,sentence";
// 1.2 Log the length of myString.
console.log(myString.length);
// 1.3 Find a way to remove the commas from the string and replace them with spaces.
const newString = myString.replace(/,/g, ' ');
// 1.4 Log myString to see if you succeeded.
console.log(newString);