/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let potentialPalindrome = x.toString().split('')

    // For odd numbers don't need to check the middle digit
    let digitsToCheck = Math.floor(potentialPalindrome.length / 2)
    
    for (let i = 0; i < digitsToCheck; i++) {
        if (potentialPalindrome[i] !== potentialPalindrome[potentialPalindrome.length - i - 1]) {
            return false
        }
    }
    return true
};