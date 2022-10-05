/*Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal*/

//P: given two paramters that are both stirngs could contain characters that are not letters or strings could be empty must account for that with solution
//R: needs to return either true or false that the strings are = or !=
//E: 'AD', 'BC' should equal each other but something like 'kl' and 'lz' shouldnt
//P: need to use the === operator to compare strings also need to have conditions in place in the event the string has non letters or is empty

function compare(s1, s2) {
    if (/^\D+$/gi.test(s1) && /^\D+$/gi.test(s2))
      return s1.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b) === 
             s2.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b);
    return true;
  }
console.log(compare('AD','BC'))