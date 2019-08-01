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

[Reverse every other word in the string](https://www.codewars.com/kata/reverse-every-other-word-in-the-string/train/javascript)

```javascript
function reverse(str){
  return str
  .trim()
  .split(' ')
  .map((el, i) => {
    if(i % 2) {
      return el.split('').reverse().join('');
    }
    return el;
  })
  .join(' ');
} 
```

[You Can't Code Under Pressure #1](https://www.codewars.com/kata/53ee5429ba190077850011d4)

```javascript
function doubleInteger(i) {
  i = i * 2
  return i;
}
```
[Power](https://www.codewars.com/kata/562926c855ca9fdc4800005b/solutions/javascript/me/best_practice)

```javascript
function numberToPower(number, power){
   let sum = 1;
   let i = 1;
 while (i <= power) {
   sum = number * sum;
   i++;
 } 
  return sum
}
```

[For Twins: 2. Math operations](https://www.codewars.com/kata/for-twins-2-math-operations/train/javascript)

```javascript
function iceBrickVolume(radius, bottleLength, rimLength) {
    let s = ((radius ** 2) * (bottleLength - rimLength)) * 2;
  return s;
}
```

[Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()](https://www.codewars.com/users/RuslanR/completed_solutions)

```javascript
function infiniteLoop(arr,d,n){
   for (let i = 1; i <= n; i++){
  if (d === "left"){
    arr[2].push(arr[0].shift());
    arr[1].push(arr[2].shift());
    arr[0].push(arr[1].shift());
  }
  if (d === "right"){
    arr[0].unshift(arr[2].pop());
    arr[1].unshift(arr[0].pop());
    arr[2].unshift(arr[1].pop());
  }
  }
  return arr;
}
```

[Miles per gallon to kilometers per liter](https://www.codewars.com/users/RuslanR/completed_solutions)

```jac=vascript
function converter (mpg) {
  let a = mpg * 1.609344;
	  let b = a / 4.54609188
    c = b.toFixed(2);

    return Number(c);

}
```

[Leonardo Dicaprio and Oscars](https://www.codewars.com/users/RuslanR/completed_solutions)

```javascript
function leo(oscar){
  if (oscar === 88) return 'Leo finally won the oscar! Leo is happy';
  if (oscar === 86) return 'Not even for Wolf of wallstreet?!';
  if (oscar < 88) return 'When will you give Leo an Oscar?';
  if (oscar > 88) return "Leo got one already!";
}
```

[I love you, a little , a lot, passionately ... not at all](https://www.codewars.com/kata/57f24e6a18e9fad8eb000296)

```javascript
function howMuchILoveYou(nbPetals) {
    const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ]
  const phrasesLimit = phrases.length - 1
  const takedOut = []
  let j = 0
  for (let i = 0; i < nbPetals; i++) {
    takedOut.push(phrases[j])
    if (j >= phrasesLimit) {
      j = 0
      continue
    }
    j++
  }
  const lastPetal = takedOut[takedOut.length - 1]
  return lastPetal
}
```

[For Twins: 2. Math operations](https://www.codewars.com/kata/59c287b16bddd291c700009a)

```javascript
function iceBrickVolume(radius, bottleLength, rimLength) {
    let s = ((radius ** 2) * (bottleLength - rimLength)) * 2;
  return s;
}
```

[Jaden Casing Strings](https://www.codewars.com/kata/5390bac347d09b7da40006f6/solutions/javascript)

```javascript
String.prototype.toJadenCase = function () {
  let arr = this.split(' ');
  let res = [];
     for (let i = 0; i < arr.length; i++) {
       res.push(arr[i][0].toUpperCase() + arr[i].slice(1));
     }
  let res1 = res.join(" ");
    return res1;
};
```

[Squash the bugs](https://www.codewars.com/kata/56f173a35b91399a05000cb7)

```javascript
function findLongest(str) {
  
  let spl = str.split(" ");
  let longest = 0;
  
  for (let i = 0; i < spl.length; i++){
    if (spl[i].length > longest){
      longest = spl[i].length;
    }
  }
  return longest;
};
```

[Sum of Array Averages](https://www.codewars.com/kata/56d5166ec87df55dbe000063/solutions/javascript/me/best_practice)
```javascript
const sumAverage = (arr) => {
  let res = 0;
  for(let i = 0; i < arr.length; i++){
    let sum = 0;
    for(let j = 0; j < arr[i].length; j++){
      sum += arr[i][j];
      console.log(sum)
    }
    res += sum/arr[i].length;
    console.log(res);
  }
  return Math.floor(res);
}
```

[Number of People in the Bus](https://www.codewars.com/kata/5648b12ce68d9daa6b000099/solutions/javascript)

```javascript
let number = function(busStops) {
  return busStops.reduce((sum, [a, b]) => {
    return sum + a - b;
  }, 0)
}
```

[Sort odd and even numbers in different order](https://www.codewars.com/kata/5a1cb5406975987dd9000028)
```javascript
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
  };
```

[Convert boolean values to strings 'Yes' or 'No'.](https://www.codewars.com/kata/53369039d7ab3ac506000467)
```jvascript
function boolToWord( bool ){
   if (bool === true) return 'Yes';
   if (bool === false) return 'No';
};
```
