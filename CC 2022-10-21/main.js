/*Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.*/

//P: parameters are just the non negative interger n 
//R: must return the the "digital root" of that number by adding up all the digits and if that digit number is greater than 9 reduce it further until it is jsut a single digit
/*E:16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6*/
//P: convert the number to string then split string then use the reduce function
//how to tell function to keep running until the reduce value is less than 10

function digitalRoot(n) {
    if (n < 10) return n;
    
    return digitalRoot(
      n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
  }
  digitalRoot(12345)