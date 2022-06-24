/*You are given a list of unique integers arr, and two integers a and b. 
Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value 
(True if a and b are consecutive, False otherwise).
It is guaranteed that a and b are both present in arr.*/
//find the index where a and b are
//write conditional that asks if the difference in the indexes of a and b are 1 or -1 then return true otherwise false

function consecutive(arr, a, b) {
    let indexOfA = arr.indexOf(a)
    let indexOfB = arr.indexOf(b)
    if (indexOfA - indexOfB === -1 || indexOfA - indexOfB === 1) {
        return true
    } else {
        return false
    }
  }
  console.log(consecutive([0,1,2,3,4,5],0,4))
