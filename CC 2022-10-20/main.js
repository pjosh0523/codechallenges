/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"*/

//P: a string of words all strings will be only letters and spaces
//R: the same string but if a word has 5 or more letters it must be reversed
/*E: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"*/
//P: turn string into array using split by the word then map over array and if length is 5 or over reverse it if not return the elem then join them together again into a string
function spinWords(string){
    let split = string.split(' ')
    let arr = split.map(elem => {
        if (elem.length >= 5) {
            return elem.split('').reverse().join('')
        } else {
            return elem
        }
    })
    return arr.join(' ')
  }
  console.log(spinWords("This is a test"))