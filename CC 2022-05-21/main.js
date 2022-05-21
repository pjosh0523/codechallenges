/*Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.*/
//split str into an array
//use a for loop to change the value of every i except the last 4
//join together the strings
function maskify(cc) {
    cc = cc.split("");
    for(let i = 0; i < cc.length - 4; i++){
      cc[i] = "#";
  }
  
  cc = cc.join("");
  return cc
  }