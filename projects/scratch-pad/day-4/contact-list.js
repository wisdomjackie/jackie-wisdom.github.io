// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    var object = {};
    object.id = id,
    object.nameFirst = nameFirst,
    object.nameLast = nameLast;
 return object
} 



function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        }, 
        //implement addContact
        addContact: function(contact) {
          //return contacts array with contact pushed into it
            return contacts.push(contact)
        }, 
      
      //implement fullName function
      findContact: function(fullName) {
        //return contact object if found in contact list
        //first a for loop to access each object in array
        for (var i = 0; i < contacts.length; i++) {
          //if first name index plus last name index matches fullName parameter
          if (contacts[i].nameFirst + ' ' + contacts[i].nameLast === fullName) {
            //then return the contact object
            return contacts[i]
            //if not, return undefined
          } else return undefined
        }

      }, 
      
      //implement remove contact function
      removeContact: function(contact) {
        //that takes a contact object to be removed from the contact-list-- but does it REMOVE it though?? and how
        //for loop to access each object in the contacts array
        for (var i = 0; i < contacts.length; i++) {
          //if the object at the index matches the parameter, which could be first name, last name, or ID
          if (contacts[i].nameFirst === contact.nameFirst && contacts[i].nameLast === contact.nameLast && contacts[i].id === contact.id) {
            //then remove that contact object using splice, beginning at index i, removing one, adding nothing
            contacts.splice(contacts[i], 1);
          }
        }//it doesn't say to return anything right? just take object to be removed
      },
      
      //add a printAllContactNames() function
      printAllContactNames: function() {
        //return a String formated with all the full-names of the list separated with a line break
        //try defining the variable up here
        var fullNameList = '';
      //for loop to access each object in the array. Can I use i again or will that mess it up???
        for (var i = 0; i < contacts.length; i++) {
          //now pull the firstname and lastname values out of each object at each index and return that with line breaks after all EXCEPT the mf last one 
          // if its NOT the final object in the string
          if (i !== contacts.length - 1) {
          fullNameList += contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n'}
            //concatenate the final value at the end
            else fullNameList += contacts[contacts.length - 1].nameFirst + ' ' + contacts[contacts.length - 1].nameLast
           //return that full name list
        
          
        } return fullNameList
      }
    }
}





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
