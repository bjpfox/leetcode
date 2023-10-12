/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let word = ""
    let wordHasEnded = false
    for (let char of s) {
        if (char === " ") {
            wordHasEnded = true
        } else {
            if (!wordHasEnded) {
                word += char
            } else {
                word = char
            }
            wordHasEnded = false  
        }
    }
    return word.length
};