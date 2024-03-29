/*This kata is the first of a sequence of four about "Squared Strings".

You are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
 hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
or printed:

vertical mirror   |horizontal mirror   
abcd --> dcba     |abcd --> mnop 
efgh     hgfe     |efgh     ijkl 
ijkl     lkji     |ijkl     efgh 
mnop     ponm     |mnop     abcd 
Task:
Write these two functions
and

high-order function oper(fct, s) where

fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

Examples:
s = "abcd\nefgh\nijkl\nmnop"
oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"
Note:
The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Sample Tests".*/
//P: parameters is going to be a string with n lines and for the higher order function a function and a string
//R: needs to return the string augmented with the first two fucntions and then the string with the higher order function
//E: Examples:
/*s = "abcd\nefgh\nijkl\nmnop"
oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"*/
//P: for vertMirror split string and then use the map array method and reverse it them join them together for the Horizontal mirror simply split it with '' as the delimiter and then join it at the newline


function vertMirror(strng) {
    let split = strng.split('\n')
    let newArr = split.map(elem => {
        return elem.split('').reverse().join('')
    })
    return newArr.join('\n')
}
function horMirror(strng) {
    let split = strng.split('\n')
    return split.reverse().join('\n')
}
function oper(fct, s) {
    return fct(s)
}
console.log(oper(vertMirror,"abcd\nefgh\nijkl\nmnop"))