const values = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
  }

const numerals = Object.keys(values)

function fromRoman(string) {
    let input = string
    let accumulator = 0
    for (let i= 0; i < input.length; i ++) {
        if (input.substring(i, i + 2).match(/(CM|CD|XC|XL|IX|IV)/)) {
            accumulator += values[input.substring(i, i + 2)]
            i ++
        }
        else {
            accumulator += values[input[i]]
        }
    }
    return accumulator
}

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

const numberValidator = (string) => Number(string) > 0 && Number(string) <= 1000000
const romanValidator = (string) => String(string).match(/^M*(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/)

function twoWayConverter(input) {
    if (numberValidator(input)) {
        return convertToRoman(input)
    }

    if (romanValidator(input)) {
        return fromRoman(input)
    }

    return "Please enter a valid number up to one million, or a roman numeral"

}

function doubleConvert() {
    let input = document.getElementById('inputField').value
    document.getElementById("answer").innerHTML = twoWayConverter(input)
    console.log("doubleConvert activated")
    console.log(document.getElementById('inputField').value)
    console.log(twoWayConverter(input))
}
