// Create a function that takes 3 arguments and returns the sum of the these arguments.
function calcTheSum(a, b, c) {
    return a + b + c;
}

console.log(calcTheSum(1, 2, 5));

// Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
function colorCar(color) {
    console.log(`This is a ${color} color`)
}

colorCar('red');

// Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
anObject = {
    a: 'This is first fake text',
    b: 'This is second fake text',
    c: 'This is third fake text'
};

function getObjectValue(myObject) {
    for (let obj in myObject) {
        console.log(`This property '${obj}' has this value '${myObject[obj]}'`);
    }
}

getObjectValue(anObject)

// Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

function vehicleType(color, code) {
    if (code === 1) {
        console.log(`a ${color} car`)
    } else if (code === 2) {
        console.log(`a ${color} motorbike`)
    }
}

vehicleType('blue', 2);

// Can you write the following without the if statement, but with just as a single line with console.log(...);?

console.log((3 === 3) ? 'yes' : 'no');

// Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color, code, age) {
    if (code === 1) {
        console.log(`a ${color} car with age ${age}`)
    } else if (code === 2) {
        console.log(`a ${color} motorbike with age ${age}`)
    }
}

vehicle('red', 1, 5);

// Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let listVehicles = ['motorbike', 'caravan', 'bike', 'cars'];
// How do you get the third element from that list?
console.log(`This is the third element ${listVehicles[2]}`);

// Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
//

let value = '';
for (let obj of listVehicles.slice(0, -1)) {
    value += obj + ', '
}
value = value.replace(/,\s*$/, "");
console.log(`Amazing Joe's Garage, we service ${value} and ${listVehicles.slice(-1)[0]}`);

// What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

let newValue = '';
listVehicles.push('Polo');
for (let obj of listVehicles.slice(0, -1)) {
    newValue += obj + ', '
}
newValue = newValue.replace(/,\s*$/, "");
console.log(`Amazing Joe's Garage, we service ${newValue} and ${listVehicles.slice(-1)[0]}`);

// 12. Create an empty object.
let myObj = {};

// Create an object that contains the teachers that you have had so far for the different modules.
let newObj = {
    Html: 'Sander',
    Css: 'Josja',
    Bash: 'Umlesh',
    JS: 'Nouran'
};

// Add a property to the object you just created that contains the languages that they have taught you.
let langObj = {
    Html: 'Sander',
    Css: 'Josja',
    Bash: 'Umlesh',
    JS: 'Nouran',
    languages: ['Html', 'Css', 'JS', 'CLI']
};

// Write some code to test two arrays for equality using == and ===. Test the following:
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y) // false;
console.log(x === y) // false;
console.log(z === y) // true;
console.log(z == y) // true;
console.log(z == x) // false;
console.log(z === x) // false;

// Take a look at the following code:
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

console.log( o1 === o2 ); // false
console.log( o1 === o3 ); // false
console.log( o2 === o3 ); // true

//  What does the following code return? (And why?)
let bar = 42;
console.log(typeof(typeof(bar))); // => string














