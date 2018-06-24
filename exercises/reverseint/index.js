// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let str = n.toString();
    let sign = Math.sign(n);
    str.replace("0","");
    let reversed = str.split('').reverse().join("");
    return sign * parseInt(reversed);
}

module.exports = reverseInt;
