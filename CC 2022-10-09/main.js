/*You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'*/
//P: str that is going to be a string of words
//R: must return the string with the letters inside out if the length is odd dont change the middle letter
//E: 'taxi' would become 'atix' 'taxis' would become 'atxsi'
//P split the string by the words with split then if the indexofthecaracter is even add 1 to the index of the element if odd minus 1 from the index of the element

/*function insideOut(x){
    let split = x.split(' ')
    console.log(split)
    
    let newArr = split.map((elem, index) => {
        console.log(elem)
        if (elem.length % 2 == 0) {
            if (split.indexOf(elem) % 2 == 0) {
                index = index + 1
            } else {
                index = index - 1
            }
        }
        
    })
    console.log(newArr)
    return newArr.join('')
}*/
const insideOut = (str) => {  
    return str.split(' ').map(x => {    
      let left = x.substring(0, Math.floor(x.length / 2)).split('').reverse().join('')
      //console.log(left)
      let right = x.substring(Math.ceil(x.length / 2)).split('').reverse().join('')
      //console.log(right)
      let middle = x[Math.floor(x.length / 2)]
      //console.log(middle)    
      return x.length % 2 ? left + middle + right : left + right
    }).join(' ')
  }

console.log(insideOut('man i need a taxi up to ubud'))