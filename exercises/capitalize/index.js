// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let wordArray = str.split(" ");
    let newArray = []
    for(word of wordArray){
        let newWord = word[0].toUpperCase();
        let remainder = word.slice(1);
        newArray.push(newWord+remainder);
    }
    return newArray.join(" ");
}

module.exports = capitalize;
