//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function objectValues(object) {
    //should take an object and return its values in an array
    //create new array
    var arr = [];
    //for in loop to access values
    for (var key in object) {
        arr.push(object[key])
    }//return array
    return arr

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //take object and return all keys in string separated with spaces
    //array variable
    var arr = [];
    //for in loop to access keys
    for (var key in object) {
        //push into array
        arr.push(key)
    }//array method to join all elements into string separated by space
    return arr.join(' ')

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {//takes object and returns all STRING values as string separated by space
    //hokai. create array to push values into
    var arr = [];
    //for in loop to access le values. THEN fire ze missiles. 
    for (var key in object){
        //ONLY IF they are STRANGZ
        if (typeof object[key] === 'string')
        //push them vals into array!
        arr.push(object[key]);
    }//array method to take them values out and join as string with spaces
    return arr.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //takes argument and returns 'array' if it's an array and 'object' if it's an object
    if (Array.isArray(collection)) {
        //then return array
        return 'array'
    } else if (typeof collection === 'object') {
        return 'object'
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //take string of one word and return it with first letter capitalized
    //use to upper case on the 0 index of string and concat that with the rest of the string sliced
    return string[0].toUpperCase() + string.slice(1, string.length)
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //first, split this string into an array
    var arr = string.split(' ');
    //declare second array
    var secondArray = [];
    //now access each item in the array with a for loop
    for (var i = 0; i < arr.length; i++){
        //uppercase each iterm
        secondArray.push(arr[i][0].toUpperCase() + arr[i].slice(1));
    }// now join that array back into a string
    return secondArray.join(' ');
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //takes object with name property and returns Welcome name!
    //name var to capitalize that name
    var name = object.name[0].toUpperCase() + object.name.slice(1);
    //concat for message
    return 'Welcome ' + name + '!'

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //takes object with name and species and returns Name is a Species
    //capital name variable
    var name = object.name[0].toUpperCase() + object.name.slice(1)
    //capital species variable
    var species = object.species[0].toUpperCase() + object.species.slice(1)
    // concat into return sentence
    return name + ' is a ' + species

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //if object has noises array, return as string separated by spaces; if no array or if empty, return there are no noises
    if (object.noises && object.noises.length > 0) {
        //join into string separated by spaces
        return object.noises.join(' ')

    } else return 'there are no noises'
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //takes string and word, return true if word is in string, otherwise return false
    //create new array for later
    var arr = [];
    //change stringe into array of words
    var wordsArray = string.split(' ');
    //for loop to access values in words array
    for (let i = 0; i < wordsArray.length; i++) {
        //determine if element matches word
        if (wordsArray[i] === word) {
            //then return true
            return true
        }
    }
    
//else return false
return false
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //should take name and object, add name to object's friends array and return object
    object.friends.push(name);
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {    
    //first determine if friends array exists at all
    if (object.friends) {
        //for loop to access values in object's friends array
        for (let i = 0; i < object.friends.length; i++) {

            //determine if name matches elements in array
            if (object.friends[i] === name) {
                //return true
                return true
            }
        }
    }//otherwise return false
return false
}



//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //takes name and array, returns list of all names that name is not friends with
    //create return array
    var arr = [];
    var allNames = [];

    //for loop to access the different people objects in the main array
    for (let i = 0; i < array.length; i++) {
      allNames.push(array[i].name);
      //if name matches the name property of the object
      if (array[i].name === name) {
        //for loop to access this objects friends
        for (let a = 0; a < array[i].friends.length; a++){
          //determine if already there
          if (array[i].friends[a] !== array[i].name){
            //then push into new array
            arr.push(array[i].name)
          }
        }
      
      }
    } return arr;
  
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //takes object, key and value. update property key on object with value. if key does not exist on object, create it
    object[key] = value
    return object

};

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var key in object) {
      //takes object and array of strings. takes away any properties on object that are listed in array
      //for loop to access values in array
      for (let i = 0; i < array.length; i++) {
          //if element is equal to a property name of object
          if (array[i] === key) {
            delete object[key]
          }
 }
  
    } return object
  
  }

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //takes and array and returns new array with all duplicates removed
    //new array variable
    var arr = [...new Set(array)];

return arr
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}