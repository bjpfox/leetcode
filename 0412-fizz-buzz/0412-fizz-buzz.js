/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = []
    for (let i = 1; i <= n; i++) {
        let answerString = ""
        if (i % 3 === 0) {
            answerString += "Fizz"
        }
        if (i % 5 === 0) {
            answerString += "Buzz"
        }
        if (!answerString) {
            answerString = i.toString()
        }
        answer.push(answerString)
    }
    return answer
};


// Other ways:
// initialise answerString to the int, and then just use
// answerString = "Fizz" or ="Buzz" or ="FizzBuzz", rather than +=
// slightly less efficient but possibly more straightforward to understand 