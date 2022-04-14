//Given an integral number, determine if it's a square number.
//going to have a conditional one wil return false the other true 
//how does one check to see if a number is a perfect square?
//use math.sqr? have that and ask whether it is an interger?
//ex. 0 is a perfect square as is 4 as is 25 as is 9
let isSquare = function(n){
    if (Number.isInteger(Math.sqrt(n))) {
        return true
    }else{
        return false
    }
}