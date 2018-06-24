// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let vowelCount =0;
    for (char of str){
        char = char.toUpperCase();
        if ( char =="A" || char == 'E' || char=='I' || char == 'O' || char =="U" ){
            vowelCount++;
        }
    }
    return vowelCount;
}

module.exports = vowels;
