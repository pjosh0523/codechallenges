/*Determine the total number of digits in the integer (n>=0) given as input to the function. 
For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.*/

//take input and turn it into string and then get the number of digits using length

function digits(n) {
    // code goes here
    const str =  n.toString()
    const ans = str.length
    return ans
  }
  console.log(digits(1234567))

