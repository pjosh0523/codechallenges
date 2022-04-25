/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/
//turn string into array with split
//then use for each and see if the elem is a vowel
function getCount(str) {
    let vowelsCount = []
    str = str.split('')
    str.forEach( elem => {
        if ((elem === 'a') || (elem === 'e') || (elem === 'i') || (elem === 'o') || (elem === 'u')) {
            vowelsCount.push(elem)
        }
    })
    return vowelsCount.length;
  }
