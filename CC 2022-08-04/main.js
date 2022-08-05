/*Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
productArray ({1,5,2}) ==> return {10,2,5}
Explanation:
The first element 10 is the product of all array's elements except the first element 1

The second element 2 is the product of all array's elements except the second element 5

The Third element 5 is the product of all array's elements except the Third element 2.
*/
//iterate trough the array using map then use reduce and have it be divided by that element 


function productArray(numbers){
    return numbers.map(x => numbers.reduce((a,b) => a * b) / x)
  }
