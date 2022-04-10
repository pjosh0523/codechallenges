/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer*/
//convert num to string
//need to pars the string into each number using split
//take the array and loop through each element squaring it
//join them together using the join method
function squareDigits(num){
    let emptyArr = []
    let str = num.toString()
    let split = str.split('')
    split.forEach(element => {
        emptyArr.push(element * element)
    });
    let finalAnswer = emptyArr.join('')
    return Number(finalAnswer)
  }