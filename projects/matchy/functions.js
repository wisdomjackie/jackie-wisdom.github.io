/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//implement a function declaration called search that takes a parameter representing an array of animals, and string of its name
function search(arr, str) {
    //look through the animals array and return the object if an animal with that name exists
    // result var
    var result;
    //in order to look through the different objects in the array, use a for loop
    for (var i = 0; i < arr.length; i++) {
        //now set if condition for if that name exists
        if (arr[i].name === str) {
            //now return that whole object
            result = arr[i]
        } 
    } if (result) {return result}
    else return null
    //returns null if no animal with that name exists
}

console.log(search(animals, 'Landon'),9)

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//declare a function replace that takes 3 parameters: an array of animals, string for animal name, object for replacement
function replace(array, string, object) {
    //if an animal with that name exists in the array, replace it with the object
    //for loop to access each animal in the array
    for (i = 0; i < array.length; i++){
        //determine if the name value exists in array[i]
        if (array[i].name === string) {
            //now replace whole object with new object
            //OMG use splice. sick
            array.splice(array[i], 1, object)
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare function remove which takes 2 parameters: array of animals and name of animal
function remove(array, string) {
    //access animals in the array
    for (var i = 0; i < array.length; i++) {
        //determine if animal with that name exists
        if (array[i].name === string) {
            //then remove from array
            array.splice(array[i],1)
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//declare function add with 2 parameters: array of animals and object to be added
function add(array, object) {
    //first, determine if array already has input object. use for loop
    for (var i = 0; i <array.length; i++) {
        //if array already containts input object by it's name
        if (array[i].name === object.name) {
            //then return null
            return null
        }
    }
        //else if name length is greater than zero and species length is greater than 0
    if (object.name.length > 0 && object.species.length > 0) {
        //then add the object to array
        array.push(object)
    } 
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
