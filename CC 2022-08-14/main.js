/*Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)*/

//have three parameters 1 saying where to start then the other where it ends and the the increments youll take 
//set a counter that starts at parameter begin
//make a simple loop that ends when you get to end
//increment by the step

const sequenceSum = (begin, end, step) => {
    let sum = 0
    for (let i = begin; i <= end; i+=step) {
        sum += i
    }
    return sum
  };
  console.log(sequenceSum(2,6,2))