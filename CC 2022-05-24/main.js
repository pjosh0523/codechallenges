const binaryArrayToNumber = arr => {
    return arr.reduce((acc, val) => {
        return (acc << 1) | val;
     });
  };
  console.log(binaryArrayToNumber([0,0,0,1]))