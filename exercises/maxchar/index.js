// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let object = {};
    for(let char of str){
        if(!object[char]){
            object[char] = 1;
        } else {
            object[char]++;
        }
    }
    console.log(Object.keys(object));
    return Object.keys(object).reduce(function(a, b){ return object[a] > object[b] ? a : b });
}

module.exports = maxChar;
