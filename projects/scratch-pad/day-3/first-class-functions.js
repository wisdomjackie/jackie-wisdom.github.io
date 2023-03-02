// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value) {
       return value > base
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value) {
        return value < base
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */



function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //console log parameter to test
    console.log('This is startsWith',startsWith);
    //return another function with given string as parameter
    return function(string) {
        //console log parameter to test
      console.log('This is string',string)
        //if the first index of given string is not equal to startsWith
         if (string[0].toLowerCase() !== startsWith.toLowerCase()) {
           //then false
            return false
         } else return true
        }

    // YOUR CODE ABOVE HERE //
}


/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //return a function that takes given string as paramter
    return function(string) {
        //that returns boolean value comparing final character of given string to endswith
        return string[string.length - 1].toLowerCase() == endsWith.toLowerCase()
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}


/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //create storage array for later!
    var newArray = [];
    //create loop to access each string in strings array
    for (var i = 0; i < strings.length; i++) {
      // create modified string variable that equals each value of strings array modified by modify function
        var modifiedStrings = modify(strings[i]);
      // push modified string values into new array
      newArray.push(modifiedStrings)
    } return newArray

    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //for loop to access each value in strings
    for (var i = 0; i < strings.length; i++) {
        // if all tested indexes of strings do not equal true
        if (test(strings[i]) === false) {
          //then results are false
           var results = false
          //return them
          return results
        } else results = true

    }
    return results;
 
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
    }
