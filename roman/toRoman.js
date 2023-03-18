const { values, numerals } = require("./values")


function convertToRoman(num) {
    let output = ""
    
  
  for (let i = 0; i < numerals.length; i++) {
    while (values[numerals[i]] <= num) {
      output += numerals[i]
      num -= values[numerals[i]]
    }
  }
   return output;
  }  

  exports.convertToRoman = convertToRoman