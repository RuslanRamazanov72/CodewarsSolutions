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

[Can we divide it?](https://www.codewars.com/kata/5a2b703dc5e2845c0900005a)

```javascript
function isDivideBy(number, a, b) {
  if (number % a === 0 && number % b === 0) {
  return true;
  } else return false;
}
```

[Numerical Palindrome #5](https://www.codewars.com/kata/58e26b5d92d04c7a4f00020a)

```javascript
function palindrome(num) { 
  if(typeof num !== 'number' || num < 0) return 'Not valid';
  if (num < 10) return false;
  num = num.toString().split('').sort();
  let count = 0;
    for (let i = 0; i < num.length - 1; i){
      if(num[i] === num[i + 1]){
        count = count + 2;
        i = i + 2;
      } else {i++};
    }
  if (num.length === count || num.length === count + 1) {
    return true;
  } else return false;
}
```

[Find the missing element between two arrays](https://www.codewars.com/kata/5a5915b8d39ec5aa18000030)

```javascript
function findMissing(arr1, arr2) {
  let misEl;
  let a1 = arr1.sort((a,b) => a - b);
  let a2 = arr2.sort((a,b) => a - b);
  
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      misEl = a1[i]
      return misEl;
    }
  }
}
```

[Numerical Palindrome #1.5](https://www.codewars.com/kata/58e09234ca6895c7b300008c)

```javascript
function palindrome(num,s) { 
  if (typeof num !== 'number' || typeof s !== 'number' || num < 0) {
    return 'Not valid';
  }
  
  let array = [];
  if (num < 10) {
    num = 10;
  }
  for (let i = num; array.length < s; i++) {
    if (i == i.toString().split('').reverse().join('')) {
      array.push(i);
    }
  }
  return array;
}
```

[Sleigh Authentication](https://www.codewars.com/kata/52adc142b2651f25a8000643)

```javascript
function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  let login = 'Santa Claus';
  let password1 = 'Ho Ho Ho!';
    if (name === login && password === password1) {
      return true
    } else return false
};
```

[Who likes it?](https://www.codewars.com/kata/5266876b8f4bf2da9b000362/solutions/javascript) /*6 kyu/*

```javascript
function likes(names) {
  let l = names.length;
  if (l === 0) return "no one likes this";
  if (l === 1) return `${names} likes this`;
  if (l === 2) return `${names[0]} and ${names[1]} like this`;
  if (l === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (l > 3) return `${names[0]}, ${names[1]} and ${l - 2} others like this`;
} 
```

[Rock Paper Scissors!](https://www.codewars.com/kata/5672a98bdbdd995fad00000f/solutions/javascript)

```javascript
const rps = (p1, p2) => {
  const getMsg = n => `Player ${n} won!`;

  if(p1 === 'scissors' && p2 === 'paper') return getMsg(1);
  if(p1 === 'paper' && p2 === 'scissors') return getMsg(2);
  
  if(p1 === 'paper' && p2 === 'rock') return getMsg(1);
  if(p1 === 'rock' && p2 === 'paper') return getMsg(2);
  
  if(p1 === 'rock' && p2 === 'scissors') return getMsg(1);
  if(p1 === 'scissors' && p2 === 'rock') return getMsg(2);
 
   if(p1 === p2) return 'Draw!';
};
```