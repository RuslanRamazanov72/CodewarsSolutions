
// [Simple Palindrome]
function isPaKlindrome(line) {

    for (let i = 0; i < line.length/2; i++) {
        if (line[i] !== line[line.length - 1 - i]) {
            return false;
        } return true;
    }
}

// [Counting sheep]
function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            count++;
        }
    }
    return count
}

// [Squash the bugs]
function findLongest(str) {

    let spl = str.split(" ");
    let longest = 0;

    for (let i = 0; i < spl.length; i++) {
        if (spl[i].length > longest) {
            longest = spl[i].length;
        }
    };
    return longest;
}

//Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
    if (bool === true) return 'Yes';
    if (bool === false) return 'No';
};

// Get the mean of an array
function getAverage(marks){
    let sum = 0;
    let count = 0;
    for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
        count++;
    }
    let res = sum/count;
    return Math.floor(res);
}