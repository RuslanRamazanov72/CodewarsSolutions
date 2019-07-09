## Hello, here I will be add my CW solutions 

[Remove exclamation marks](https://www.codewars.com/kata/remove-exclamation-marks/train/javascript) /*Method .replace/*
```javascript
function removeExclamationMarks(s) {
  return s.replace(/!/g,'');
}
```

[Switch it Up!](https://www.codewars.com/kata/5808dcb8f0ed42ae34000031) */Method .switch/*

```javascript
function switchItUp(number){
  let arr = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
  return arr[number];
}
```

[Student's Final Grade](https://www.codewars.com/kata/5ad0d8356165e63c140014d4) /*boolean/*

```javascript
function finalGrade (exam, projects) {
  if (exam > 90 || projects >10) return 100;
  if (exam > 75 && projects >= 5) return 90;
  if (exam > 50 && projects >= 2) return 75
  return 0;  
}
```

[Beginner - Lost Without a Map](https://www.codewars.com/kata/57f781872e3d8ca2a000007e) /*Loop/*

```javascript
function maps(x){
let arr=[];
  for(let i=0; i<x.length; i++){
    
    arr[i] = x[i]*2;
    
  }
  return arr;
}
```

[Return the day](https://www.codewars.com/kata/return-the-day/javascript) /*Boolean/*

```javascript
function whatday(num) { 
  let error = 'Wrong, please enter a number between 1 and 7';
  let b = {
1: 'Sunday',
2: 'Monday',
3: 'Tuesday',
4: 'Wednesday',
5: 'Thursday',
6: 'Friday',
7: 'Saturday',
8: 'Sunday',
};
  if (num >= 8 || num <= 0) {
    return error;
  } else return b[num];
}
```

[Super Duper Easy](https://www.codewars.com/kata/55a5bfaa756cfede78000026) /*Boolean/*

```javascript
function problem(x){
  if (typeof x === 'number') {
  return x = (x * 50) + 6;
  } else (typeof x === 'string') 
  return 'Error';
}
```

[Capitalization and Mutability](https://www.codewars.com/kata/595970246c9b8fa0a8000086) /*Loop/*

```javascript
function capitalizeWord(word) {
  let newWord = word[0].toUpperCase();
  let str = '';
    for (let i  = 1; i < word.length; i++) {
     newWord += word[i];
     }
  return newWord;
}
```

[Basic Mathematical Operations](https://www.codewars.com/kata/57356c55867b9b7a60000bd7)

```javascript
function basicOp(operation, value1, value2)
{
  return eval(value1 + operation + value2);
}
```

[Counting sheep...](https://www.codewars.com/kata/54edbc7200b811e956000556) /*Loop/*

```javascript
function countSheeps(arrayOfSheep) {
let count = 0;
for(let i = 0; i < arrayOfSheep.length; i++){
  if(arrayOfSheep[i] === true){
    count++;
    }
  }
  return count;
}
```

[Get list sum recursively](https://www.codewars.com/kata/57a84137cf1fa5f9f80000d6) /*7 kyu/*

```javascript
function sumR(x) {
  if (x.length === 0){
    return 0;
  } else {
    return x.shift() + sumR(x);
  }
}
```
[Reversed Words](https://www.codewars.com/kata/reversed-words/javascript) /*Methods/*

```javascript
function reverseWords(str){
 let a = str.split(' ')
 
   let b = a.reverse();
 
  let c = b.join(' ');
  return c
}
```

[Palindrome Strings](https://www.codewars.com/kata/palindrome-strings/train/javascript) /*Palindrome/*

```javascript
function isPalindrome(line) {

  for (let i = 0; i < line.length/2; i++) {
    if (line[i] !== line[line.length - 1 - i]) {
    return false;
    } return true;
  }
}
```

[Minimize Sum Of Array (Array Series #1)](https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/solutions/javascript/me/best_practice) /*Boolean/*

```javascript
function minSum(arr) {
  let cnt = 0;
  arr = arr.sort((a,b) => b - a);
  for (let i = 0; i < arr.length / 2; i++) {
    cnt += arr[i] * arr[arr.length - 1 - i];
  }
  return cnt;
}
```

[Do I get a bonus?](https://www.codewars.com/kata/56f6ad906b88de513f000d96/solutions/javascript)

```javascript
function bonusTime(salary, bonus) {
console.log()
  if (bonus === true) {
    salary = salary * 10;
    salary = '£' + salary;
  return salary;
  } 
  if (bonus === false) {
    salary = '£' + salary;
    return salary;
  }
}
```