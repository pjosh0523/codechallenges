/*In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. 
DNA strand is never empty or there is no DNA at all (again, except for Haskell).*/
//split string into array
//use foreach with a conditional asking if elem is A T G or C
function DNAStrand(dna){
    let split = dna.split('')
    let newarr = []
    split.forEach(elem => {
        if (elem === 'A') {
            newarr.push('T')
        } else if (elem === 'T') {
            newarr.push('A')
        }else if (elem === "G") {
            newarr.push('C')
        }else if (elem === 'C') {
            newarr.push('G')
        }
    })
    return newarr.join('')
  }
  DNAStrand('ATCG')