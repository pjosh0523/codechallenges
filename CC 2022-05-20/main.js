/*The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form 
that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; 
the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. 
Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

EX..

input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]*/
//need to ask if age is over 55 and if handicap is greater than 7 
//go through the array and for each element grab the first element and evaluate it for over 55 and then the second must be greater than 7

function openOrSenior(data) {
    let newArr = data.map(elem => {
        if (elem[0] >= 55 && elem[1] > 7) {
            return 'Senior'
        }
        else{
            return 'Open'
        }
    })
    return newArr
}

let arr = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
console.log(openOrSenior(arr))