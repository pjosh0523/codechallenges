/*You are to write an function that takes a string as it's first paramter. This string will be a string of words.

You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.

Example

modifyMultiply ("This is a string",3,5) 
Should return

"string-string-string-string-string"

Since the 3rd word is 'string'(starting from 0 remember) and the third paramater indicates that it should be repeated 5 times.

Simple. Good luck.*/

//first parameter is the string itself, second is the word of the string, and the third is how many times it ought to be repeated
//split string uisng space as delimiter
//grab the word that is indexed at location 
//

function modifyMultiply (str,loc,num) {
    let arr = str.split(' ')
    let index = arr[loc]
    let ans = []
    for (let i = 0; i < num; i++) {
        
        ans.push(ans[i] = index)
    }
    ans.pop()
    return ans.join('-')
    } 
console.log(modifyMultiply("I am the best ever", 3,5))