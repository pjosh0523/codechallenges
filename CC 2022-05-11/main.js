/*In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.*/
//go through each elem and ask if type is number
function filter_list(l) {
    return l.filter(v => typeof v == "number")
   }