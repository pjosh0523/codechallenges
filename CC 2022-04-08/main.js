//Write a function called repeatStr which repeats the given string string exactly n times.
//first need a function that takes in two paramaters 1 for the amount the string will be repeated and the other for the string
//how would i repeat the same thing? Use a loop!
function repeatStr (n, s) {
    let answer = null
    for (i = 1; i <= n; i++) {
        answer += s 
    }
    let newAnswer = answer.slice(4)
    return newAnswer
  }
  repeatStr(6,'I')