/*Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'*/

//split string into array
//loop through array asking if value at that index is a or b switch them if not then keep it 
// use the map array method will make this easier

function switcheroo(x){
    const split = x.split('')
    let newArr = split.map(elem => {
        if (elem == 'a') {
            return split.elem = 'b'
        } else if(elem == 'b') {
            return split.elem = 'a'
        } else {
            return split.elem = 'c'
        }
    })
    const ans = newArr.join('')
    return ans
}

console.log(switcheroo('aacbbc'))