/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let remainder = num
    let romanNumber = ""
    const symbols = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    for (let symbol in symbols) {
        let count = remainder / symbols[symbol] 
        // console.log('remainder: ', remainder)
        // console.log('symbols[symbol]: ', symbols[symbol])
        // console.log('symbol: ', symbol)
        // console.log('count: ', count)
        // console.log('roman: ', romanNumber)
        if (count >= 1) {
            for (let i = 1; i <= count; i++) {
                romanNumber += symbol
            }
            remainder = remainder - (symbols[symbol] * Math.floor(count))
        }
    }
    return romanNumber
}