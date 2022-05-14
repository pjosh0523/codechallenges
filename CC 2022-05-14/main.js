/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.*/
// split string into an array
//iterate through array using filter 
//filter for just x X and o O 
//grab the lengths for both and compare them

const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }