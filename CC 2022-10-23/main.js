/*Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]*/

//P: an array of non negative integers 
//R: return the array with 1 added to the array
/*E: [4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]*/
//P: turn array into string then turn the string into a number add 1 to the number turn the number back into string then split it into an array



function upArray(arr){
    if(arr.length < 1) return null;
    for(let item of arr) if(item < 0 || item > 9) return null
  
    for(let i = arr.length - 1; i >= 0; i--) {
      arr[i]++;
      if(arr[i] < 10) break;
      else arr[i] = 0;
      
      if(i == 0) arr.unshift(1);
    }
    
    return arr;
  }
  console.log(upArray([4, 3, 2, 5]))