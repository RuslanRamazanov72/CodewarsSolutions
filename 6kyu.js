
// [Simple reversed parenthesis]
function solve(s){
    if (s.length % 2) return -1;
    while (/\(\)/g.test(s)) s = s.replace(/\(\)/g, "");
    let cnt = 0;
    for (let i = 0; i < s.length -1; i += 2) {
        s[i] !== s[i + 1] ? cnt+=2 : cnt++;
    }
    return cnt;
}

// Sort odd and even numbers in different order
function sortArray(arr) {
    let odd = arr.filter((el)=> el % 2 === 1).sort((a,b)=> a - b);
    let even = arr.filter((el) => el % 2 === 0).sort((a,b)=> b - a);
    if (arr.length === 0){
        return arr;
    }
    let arr2 = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            arr2.push(odd.shift());
        }else if(arr[i] % 2 === 0){
            arr2.push(even.shift());
        }
    }
    return arr2;
}
