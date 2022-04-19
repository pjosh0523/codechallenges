/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.*/
//take in argument and put them into an array using split
//then sort that array using sort
//convert the array back into any number of digit 
//return number
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }