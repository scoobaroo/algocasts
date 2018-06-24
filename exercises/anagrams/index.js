// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    stringA.replace(/[^\w]/g,"").toUpperCase();
    stringB.replace(/[^\w]/g,"").toUpperCase();
    let object1 = {}, object2 ={};
    for(let char of stringA){
        if(!object1[char]){
            object1[char]= 0;
        } else{
            object1[char]++;
        }
    }
    for(let char of stringB){
        if(!object2[char]){
            object2[char]= 0;
        } else{
            object2[char]++;
        }
    }
    console.log(object1);
    console.log(object2);
    return isEquivalent(object1,object2);
}


function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}
module.exports = anagrams;
