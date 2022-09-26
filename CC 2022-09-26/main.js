/*Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.*/

//what are the parameters? just one it will be an array of strings of numbers that need to be changed to actual numbers 
//what needs to be returned? the new array that is an array of actual numbers
//maybe use the map function and change the strings with parseint function

/*function toNumberArray(stringarray){
    let newArr = stringarray.map(elem => Number(elem))
    return newArr
}*/
function toNumberArray(stringarray) {
    let newArr = []
    for (let i = 0; i < stringarray.length;i++) {
        stringarr
    }
}

console.log(toNumberArray(["1.1","2.2","3.3"]))