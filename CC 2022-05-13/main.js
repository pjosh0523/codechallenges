/*Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.*/
//use sort to sort the array and make it ascending
//then return the first and second elements in the array summed

function sumTwoSmallestNumbers(numbers) {  
    //Code here
    let sort = numbers.sort( (a,b) => a-b )
    return sort[0] + sort[1]
  }
  console.log(sumTwoSmallestNumbers([1,11,3,10]))