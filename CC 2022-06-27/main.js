/*Write a simple converter for vowels.

      Romaji:    a/A e/E i/I u/U o/O
      Hiragana:  あ  え   い  う   お 
      Katakana:  ア  エ   イ  ウ   オ
Expect the above characters as input. There won't be invalid input.

Rules:

If there is no input return an empty string. 
Do not change romaji. (a->a, A->A ... NOT A->a )
Change Kana to lower case romaji. (あ->a ... NOT あ->A)
Input can be mixed, but output should be consistent. (aAあア -> aAaa, for "romaji")
Example 1:

Input: "aeiou" 
Output:"hiragana"

Expected output: "あえいおう"
Example 2:

Input: "AえイOう"
Output:"romaji"

Expected output: "AeiOu"*/
//

const dicts = {
    romaji: "aeiou",
    romajiDictUp: "AEIOU",
    hiragana: "あえいおう",
    katakana: "アエイオウ"
  }
  const dictAll = 'aeiouAEIOUあえいおうアエイオウ'
  const getIndex = (char) => dictAll.indexOf(char) % 5
  
  function vowels(input, output) {
    if (!input) return ''
    
    const dict = dicts[output]
    return input.replace(/./g, (char) => dict.includes(char.toLowerCase()) ? char : dict[getIndex(char)])
  }