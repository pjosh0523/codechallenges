/*Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, 
containing distinct letters - each taken only once - coming from s1 or s2. 
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"*/
//use set because the unique values 
//concat
//sort and join

function longest(s1, s2) {
    const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
  }
  longest('hi','hello')