//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.
//turn string into an array of words
//sort array and find shortest word
function findShort(s){
    let split = s.split(' ')
    let sort = split.sort((a,b) => a.length - b.length)
    return sort[0].length
}
