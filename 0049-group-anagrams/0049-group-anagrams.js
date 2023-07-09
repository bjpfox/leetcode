/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function doesWordFreqDataMatch(freqDataFirstWord, freqDataSecondWord) {
    if (Object.keys(freqDataFirstWord).length < 1) {
        return false
    }
    for (let data in freqDataFirstWord) {
        // if (!data in freqDataSecondWord) {
        //     return false
        // }
        if (freqDataFirstWord[data] !== freqDataSecondWord[data]) {
            return false
        }
    }
    return true
}

var groupAnagrams = function(strs) {
    let word_letter_counts = []
    let letter_freq = {}
    let wordCaptured = false

    // For each word.. 
    for (let word of strs) {
        // 1) Calculate its letter freq
        wordCaptured = false
        letter_freq = {}
        for (let letter of word) {
            if (letter in letter_freq) {
                letter_freq[letter]++
            } else {
                letter_freq[letter] = 1
            }
        }

        // 2) Loop through each item in word_letter_counts
        for (let i = 0; i < word_letter_counts.length; i++) {
            // To be an anagram word length must equal
            if (!wordCaptured && ((word_letter_counts[i]['words'][0]).length === word.length)) {
                // Captures the edge case where we're comparing two empty strings "" and ""
                if ((Object.keys(word_letter_counts[i]['counts']).length === 0) && (word.length === 0)) {
                    word_letter_counts[i]['words'].push(word)
                    wordCaptured = true
                    break
                }

                // If freqData is same as curent word (i.e. they are anagrams), just add the word to the current object
                else if (doesWordFreqDataMatch(word_letter_counts[i]['counts'], letter_freq)) {
                    word_letter_counts[i]['words'].push(word)
                    wordCaptured = true
                    break
                }
            }
        }
        // Else, create a new object with the word and the freqData
        if (!wordCaptured) {
            const newFreqData = {
                counts: letter_freq, 
                words: [word]
            }
            word_letter_counts.push(newFreqData)
        }
    //console.log(word_letter_counts)
    }
    return word_letter_counts.map((item) => item['words'])
};

// Plan
// for each word, derive its letter frequency letter_freq = {H: 1, E: 1, L: 2, O: 1}
// return words with the word letter frequency
