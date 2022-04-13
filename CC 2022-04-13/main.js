/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.*/
//get the length of str
//make a conditional that will execute if word is odd or even
//how do i tell the word to print only the middle character?**
function getMiddle(s) {
    let middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
  }