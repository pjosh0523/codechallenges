/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/
//first break apart string into characters using split method
//then go through array and grab the ones that are vowels
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }