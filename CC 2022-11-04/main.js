/*Write function RemoveExclamationMarks which removes all exclamation marks from a given string.*/

//P: parameters are just a string 
//R: return the string without ! marks
//E: "Hello World!!" => "Hello World"
//P: split string into array then filter through array for characters that are not ! then join them together


function removeExclamationMarks(s) {
    let split = s.split('')
    let newArr = split.filter( elem => {
        if (elem != '!') {
            return elem
        }
    })
    return newArr.join('')
  }

console.log(removeExclamationMarks("Hello World!!"))