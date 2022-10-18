/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).*/

//P: just an array of intergers 
//P: return the integer that appeared an odd number of times in the array
//E:[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd)
//P: use a for of loop to go through array and find the one element that is in it an odd number of times
//basically need to figure out how many times an integer is in the array then evaluate it for whether that count is odd or not
//double loop?

function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }

