//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//convert string to a one with just empty numbers using replaceall method
//use math.max and min to find the numbers
function highAndLow(numbers){
    let str = numbers.replaceAll(' ', '')
    let split = str.split('')
    let maps = split.map(elem => Number(elem))
    let max = Math.max(...maps)
    let min = Math.min(...maps)
    let strMax = max.toString()
    let strMin = min.toString()
    let answer = `${strMax} ${strMin}`
    return answer
  }