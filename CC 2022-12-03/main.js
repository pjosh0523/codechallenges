/*Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:

its digit sum, s = 1 + 7 + 2 + 9 = 19
reversing s = 91
and 19 * 91 = 1729 --> the number that we started with.
Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.*/

//P: parameters are just the positive integer
//R: return true if the integer is a harshad number and it meets the above requiremnts otherwise return false 
/*E: its digit sum, s = 1 + 7 + 2 + 9 = 19
reversing s = 91
and 19 * 91 = 1729*/
//P: split number into integers then add integers then reverse that number once you have added th numbers and see if the sum of the digits and the reverse of that number add up to n


function numberJoy(n) {
    let s = n.toString().split('').reduce((s,v) => s + +v, 0);
    let sr = +s.toString().split('').reverse().join('');
    return s * sr == n;
  }
numberJoy(1729)