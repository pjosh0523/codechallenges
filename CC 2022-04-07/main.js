/*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?*/
//need to know if num is already negative or 0
//if so, just return num
//if not return the number with a negative version of it 
function makeNegative(num) {
  if (num <= 0) {
      return num
  }
  return -num
}