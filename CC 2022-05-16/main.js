/*Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, 
containing distinct letters -  
each taken only once - coming from s1 or s2.*/
//make new set object
//using set because of the unique values
//sort the array and join the array back together

function longest(s1, s2) {
    [...new Set(s1+s2)].sort().join('')
  }

