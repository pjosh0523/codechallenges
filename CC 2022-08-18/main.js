/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.*/

//take the number and divide it by 3 or 5 and see if it is a whole number 
//need to loop through and do that for every number up and including that number

function solution(number){
  let sum = 0
  if (number < 0) {
    return 0
  }
  for (let i = 1; i < number; i++) {
    if ( Number.isInteger(i/3) || Number.isInteger(i/5)) {
        sum += i
    }
  }
  return sum
}
console.log(solution(-10))