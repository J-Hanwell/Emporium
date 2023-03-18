const { values } = require("./values")

function fromRoman(string) {
    let input = string.toUpperCase()
    console.log(input)
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



module.exports = { fromRoman }