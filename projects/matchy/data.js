/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create an object name animal and assign it to an empty object
var animal = {};

//using dot notation, give the object animal a key of species with a value of any animal species
animal.species = 'cat';

//using bracket notation, give your object animal a property of name and assign it the name of your animal
animal['name'] = 'Landon';

//using either notation, give animal a property of noises with a value of an empty array
animal.noises = [];

//print your animal log to the consol
console.log(animal); 




//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable named noises and assign it to an empty array
var noises = [];
//use bracket notation to give noises it's first element: a string representing a noise your animal might make
noises[0] = 'meow'; 
//using an array function, add another noise to the END of noises
noises.push('ekekek');
//add an element to the beginning of noises using an array function
noises.unshift('purr');
//using bracket syntax again, add an element to the end of noises and do not hard code for the end
noises[noises.length] = 'hiss';
//console log the length of noises
console.log(noises.length); 
//console log the last element in noises without hard coding the index
console.log(noises[noises.length - 1]);
//console log the whole array
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//use bracket syntax to assign the noises property on animal to our new noises array
animal['noises'] = noises; 
//using any syntax add another noise to the noises property on animal 
animal.noises.push('growl'); 
//console log animal
console.log(animal); 


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * You can access properties on objects using either bracket notation or dot notation. In order to use dot notation on
 * objects, you must know the exact name of the property/key. Otherwise, you must use bracket notation.
 * 2. What are the different ways of accessing elements on arrays?
 * You can access elements on arrays using bracket notation only.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable named animals and assign it to an empty array
var animals = [];
//push animal into animals
animals.push(animal); 
//console log animals
console.log(animals); 
//it looks like an array containing one object
//create a variable called duck and assign it to the given data
var duck = {
  species: 'duck',
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh']
}; 
//push duck variable into animals array
animals.push(duck); 
//console log animals
console.log(animals); 
//it looks like an array containing two objects
//create two more animal objects each with a species, a name, and at least two sounds sounds and add them to animals
//create animal object dog named mal with sounds bark and woof
var dog = {
  species: 'dog', 
  name: 'Mal', 
  noises: ['bark', 'woof']
};

//create animal object momo, winged lemur who chirps and chitters
var wingedLemur = {
  species: 'winged lemur', 
  name: 'Momo', 
  noises: ['chirp', 'chitter']
}
//add each of these to animals
animals.push(dog); 
animals.push(wingedLemur); 
//console log animals and console log the length of animals
console.log(animals); 
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//choose a data structure for this list of friends and comment why
//i choose an array to hold a list of friends because it is a collection of like elements
//create a variable called friends and assign to chosen data structure
var friends = [];
//write a function called getRandom, that takes our animals array and returns a random index of input array, using math.random
function getRandom(arr) {
return arr[Math.floor(Math.random())]

}
getRandom(animals); 

//using the random interger that you just created, get random animal and add it's name to friends
//invoke getRandom with animals
var randomAnimal = getRandom(animals,9);

console.log(randomAnimal.name,7);

//add that name to friends
friends.push(randomAnimal.name);

//add friends list as a property also named friends on one of the animals in the animals array
duck.friends = friends; 



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}