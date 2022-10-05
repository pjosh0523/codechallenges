/*You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

You cannot use the following:

"Hello, World!"
'Hello, World!'
`Hello, World!`*/
//P: no real parameters set 
//R: return the string hello world without using raw strings
//E: maybe use the actual UTF16 code units for the string
//P: i would see first if the String.fromCharCode method works and then go from there.

const helloWorld = () => String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33)

