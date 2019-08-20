
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

// Fibonacci

function Fibonacci (fib) {

    let f1 = 0;
    let f2 = 1;
    let cf = 1;
        for (let i = 1; i < n; i++) {
            cf = f1 + f2;
            f1 = f2;
            f2 = cf;
        }
        return cf;
}

let arr = [10, 2, -4, 10, 6, -4, 98];
// [10, 2, -4, 6, 98]

function unique(arr){
    let a = [];

    for (let i = 0; i < arr.length; i++) {
        if (!a.includes(arr[i])) {
            a.push(arr[i]);
        }
    }

    return a;
}

