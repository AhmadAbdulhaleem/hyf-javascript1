let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
// 2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
favoriteAnimals.push('turtle');
// 2.2 Log your new array!
console.log(favoriteAnimals);
// 2.3 Now add Jim's favorite animal to the array
favoriteAnimals.splice(1, 0, 'meerkat');
// 2.4 Write a console.log statement that explains in words you think the new value of the array is.
console.log(`The new value of the array is ${favoriteAnimals[1]}`);
// 2.5 Log your new array!
console.log(favoriteAnimals);
// 2.6 Log the length of the array
console.log(`The array has a length of ${favoriteAnimals.length}`);
// 2.7 Jason does not like 'giraffe', delete this animal from the array.
favoriteAnimals.splice(-2, 1);
// 2.8 Again log your new array.
console.log(favoriteAnimals);
// 2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array,
function removeItem(name) {
    for (let i in favoriteAnimals) {
        if (favoriteAnimals[i] === name) {
            //  Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).
            console.log(`The item you are looking for is at index: ${favoriteAnimals[i]}`)
            favoriteAnimals.splice(i, 1)
            break;
        }
    }
    console.log(favoriteAnimals)
}
removeItem('meerkat')
