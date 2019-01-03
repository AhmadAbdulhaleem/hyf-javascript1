// 1-
console.log('?????'); // Arabic
console.log('Hello'); // English
console.log('goedendag'); // dutch

// 2-
console.log('I\'m awesome');

// 3-
var x;
console.log("the value of my variable x will be: " + x);

x = 26;
console.log("the value of my variable x will be: " + x);

// 4-
var y = 'Hello world';
console.log('The first sentence which you will learn in the programming will be ' + y);

y = 'Hello JavaScript';
console.log('I can say ' + y);

// 5-
var z = 7.25;
console.log(z);

var a = z;
console.log(Math.round(a))

console.log(Math.max(a, z));

// 6-
var animals = ['Forge', 'Elephant', 'Dog', 'Tiger'];
console.log('These are the animals which I saw them in the zoo ' + animals);

animals.push('baby pig');
console.log(animals);

// 7-
let myString = "this is a test";
console.log(myString);
console.log(myString.length);

// 8-
var txtValue = 'this is just test value';
console.log(txtValue)
var inteValue = 2018;
console.log(inteValue)
var arrValue = ['Ahmad', false, 26];
console.log(arrValue)
var symValue = Symbol('Symbol');
console.log(symValue)

console.log(typeof arrValue, typeof txtValue, typeof inteValue, typeof symValue); // object string number symbol
console.log(typeof txtValue === typeof inteValue ? 'The types are same' : 'the types are not same');
console.log(typeof arrValue === typeof symValue ? 'The types are same' : 'the types are not same');

// 9-
var x = 9;
console.log(x = x % 3); // the output will be (0)
var y = 5;
console.log(y = y % 3); // the output will be (2)
var z = 13;
console.log(z = z % 3); // the output will be (1)

// 10-
var multiValues = ['testValue', true, 2018];
console.log(multiValues); // (3) ["testValue", true, 2018]

console.log(6/0 === 10/0); // (6/0 = infinite === 10/0 = infinite) => true
