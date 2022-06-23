/*Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.*/
//make an array 
//loop through the string 
//if the the value of the character at that index is equal to that value uppercase add it to the empty array 
//return array
let capitals = function (word) {
    let caps = [];
    for(let i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  };
 console.log(capitals('IamACoolP'))