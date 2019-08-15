
// [Balanced Number (Special Numbers Series #1 )]
function balancedNum(number){

    let numArr = number.toString().split('').map((d) => +d);
    let sumF = 0, sumB = 0;
    if(numArr.length <= 2) return 'Balanced';
    console.log(numArr, Math.floor(numArr.length / 2));

    if(numArr.length%2 === 0){
        for(let i = 0; i < Math.floor(numArr.length / 2) - 1; i++){
            sumF += numArr[i];
            sumB += numArr[numArr.length-1-i];
            console.log(sumF, sumB);
        }
    } else {
        for(let i = 0; i < Math.floor(numArr.length / 2); i++){
            sumF += numArr[i];
            sumB += numArr[numArr.length-1-i];
            console.log(sumF, sumB);
        }
    }

    return (sumF === sumB) ? 'Balanced' : 'Not Balanced';
}

//test
