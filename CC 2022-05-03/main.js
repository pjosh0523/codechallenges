/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. 
If the two numbers are equal return a or b.

Note: a and b are not ordered!*/
//use for loop

    function getSum( a,b ) {
        let total = 0
        if (a < b) {
            for (let i = a; i <= b; i++) {
                total += i
              } 
        } else if (a > b) {
            for (let i = b; i <= a; i++) {
                total += i
              }
        }else {
            return a
        }  
       return total 
      }

getSum(1,3)
