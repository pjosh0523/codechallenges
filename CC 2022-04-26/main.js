/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer*/
//make num into string
//split num into array
//square everyt element
//join them together with join 
//make join a num
function squareDigits(num){
    let str = num.toString().split('')
    let str2 = str.map(x => x * x)
    return Number(str2.join(''))
  }
  console.log(squareDigits(2332))