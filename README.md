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

<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
```
=======
```
=======



[Thinkful - Logic Drills: Traffic light](https://www.codewars.com/kata/thinkful-logic-drills-traffic-light/train/javascript) /*Boolean/*

```javascript
function updateLight(current) {
  let go = 'green';
  let ready = 'yellow';
  let stop = 'red';
  if (current === go) return ready
  if (current === ready) return stop
  if (current === stop) return go
}
```