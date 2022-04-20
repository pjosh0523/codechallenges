//The parameter of accum is a string which includes only letters from a..z and A..Z.
/*accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"*/
//what is happening to our string?
//first letter is converted to uppercase, every letter after that is also first in uppercase and then repeated
//the repeat adds one more letter the further the character is in the string
//convert string into an array
//need to loop trhough array and replace elements so need .map
//need two parameters for map one for elem and the other for index

function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }