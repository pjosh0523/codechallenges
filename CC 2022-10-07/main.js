/*Challenge:

Given a string, return a copy of the string with the vowels' case swapped.

For this kata, assume that vowels are in the set "aeouiAEOUI".

Example: Given a string "C is alive!", your function should return "C Is AlIvE!"

Addendum: Your solution is only required to work for the ASCII character set.

Please make sure you only swap cases for the vowels.*/
//P: parameters ar just the 1 string 
//R: must return the string with the vowles cases swtiched and only the vowel cases
//E:Example: Given a string "C is alive!", your function should return "C Is AlIvE!"
//P: split the string into an array using split then loop over it changing the cases with toupper/lowercase
//make a for loop that goes the strings length
//add some conditionals that ask if the char is a vowel or uppercase then if char is vowel or lowercase make into the opposite one


function swapVowelCase(str) {
    let split = str.split('')
    let vowels = 'AEIOUaeiou'
    let arr = []
    for (let i = 0; i < split.length; i++) {
        if (vowels.includes(split[i]) && split[i] === split[i].toLowerCase()) {
            //console.log(split[i])
            split[i] = split[i].toUpperCase()
            arr.push(split[i])
        } else if (vowels.includes(split[i]) && split[i] === split[i].toUpperCase()) {
            split[i] = split[i].toLowerCase()
            arr.push(split[i])
        } else {
            arr.push(split[i])
        }
    }
    return arr.join('')
  }

  console.log(swapVowelCase('C is alive!'))