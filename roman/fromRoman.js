function fromRoman(string) {
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

console.log(fromRoman("CDLVIII"))