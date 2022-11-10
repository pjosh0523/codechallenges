/*Your mission is to implement a function that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;*/


function htmlspecialchars(formData) {
    // Insert your code here
    let harmfulCharactersResult = '';
    for (let i = 0; i < formData.length ; i++){
      if (formData[i] === '<'){
        harmfulCharactersResult += '&lt;'
      } else if (formData[i] === '>'){
        harmfulCharactersResult += '&gt;'
      } else if (formData[i] === '"'){
        harmfulCharactersResult += '&quot;'
      } else if (formData[i] === '&'){
        harmfulCharactersResult += '&amp;' 
      } else {
        harmfulCharactersResult += formData[i]
      }
    }
    return harmfulCharactersResult;
  }
  htmlspecialchars("<h2>Hello World</h2>")