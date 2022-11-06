/*Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

Your function should return true if all elements in the array are square numbers and false if not.

An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

Examples:

isSquare([1, 4, 9, 16]) --> true

isSquare([3, 4, 7, 9]) --> false

isSquare([]) --> undefined
is_square([1, 4, 9, 16]) --> True

is_square([3, 4, 7, 9]) --> False

is_square([]) --> None*/

//P: parameter is an array of postive integers
//R: return needs to be either true or false depending on if every element is a square or not
/*isSquare([1, 4, 9, 16]) --> true

isSquare([3, 4, 7, 9]) --> false*/
//P: use the find function to see if any element is not a perfect square
//we can test if it is a perfect square by using the math sqrt function and seeing if that value is a integer with Number.isInteger

 function isSquare(arr){
    if (arr.length == 0) {
        return undefined
    }
    let ans = arr.find( elem => {
        if (!Number.isInteger(Math.sqrt(elem))) {
            return elem
        }
    })
    if (ans != undefined) {
        return false
    } else {
        return true
    }
  }

  console.log(isSquare([]))