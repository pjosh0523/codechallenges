/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]*/

//P: parameters are two arrays
//R: return the first array minus any values that are also in the second array
/*E: arrayDiff([1,2],[1]) == [2]
arrayDiff([1,2,2,2,3],[2]) == [1,3]*/
//P: go through the first array and see if any values are in b if in b they need to be removed then return the mutated array

function arrayDiff(a, b) {
  let newArr = []
  for (i = 0; i < a.length; i++) {
    if(!b.includes(a[i])) {
        newArr.push(a[i])
    }
  }
  return newArr
}
console.log(arrayDiff([1,2,2,2,3],[2]))