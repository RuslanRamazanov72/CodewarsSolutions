
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
