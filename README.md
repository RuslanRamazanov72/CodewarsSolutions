## Hello, here I will be add my CW solutions 

[Remove exclamation marks] (https://www.codewars.com/kata/remove-exclamation-marks/train/javascript)
```javascript
function removeExclamationMarks(s) {
  return s.replace(/!/g,'');
}
```

[Switch it Up!] (https://www.codewars.com/kata/5808dcb8f0ed42ae34000031)

```javascript
function switchItUp(number){
  let arr = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
  return arr[number];
}
```

[Student's Final Grade] (https://www.codewars.com/kata/5ad0d8356165e63c140014d4)

```javascript
function finalGrade (exam, projects) {
  if (exam > 90 || projects >10) return 100;
  if (exam > 75 && projects >= 5) return 90;
  if (exam > 50 && projects >= 2) return 75
  return 0;  
}
```