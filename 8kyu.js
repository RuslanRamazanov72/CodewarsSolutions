
// Simple Palindrome
function isPaKlindrome(line) {

    for (let i = 0; i < line.length/2; i++) {
        if (line[i] !== line[line.length - 1 - i]) {
            return false;
        } return true;
    }
}

// Counting sheep
function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            count++;
        }
    }
    return count
}
