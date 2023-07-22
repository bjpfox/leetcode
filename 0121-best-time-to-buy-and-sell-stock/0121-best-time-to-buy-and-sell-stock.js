/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // Second approach - optimise - only check if we find a new min, otherwise dont bother as it can only be better to delay if we can get it cheaper by doing so 

    // Reduce length of prices by removing days where it would have been cheaper to buy the following day
    while (prices[1] < prices[0]) {
        prices.shift()
    }

    // Do similar thing but from other end - remove cases from end where price only declined, hence these data points are irrelevant and can be removed 
    while (prices[prices.length - 1] <= prices[prices.length - 2]) {
        prices.pop()
    }

    let maxProfit = 0
    let minPrice = prices[0]
    // Else scan through per approach 1 but only check if we find a new min
    for (let i = 0; i < prices.length; i++) {
        
        // If current price is higher than our min, we can skip it
        // It can never be more profitable to buy at a higher price
        if (i === 0 || (prices[i] < minPrice)) {

            maxPrice = Math.max(...prices.slice(i + 1))

            // Check if this is our most profitable trade
            if (maxPrice - prices[i] > maxProfit) {
                minPrice = prices[i]
                maxProfit = maxPrice - minPrice
            }
        }
    }
    return maxProfit
};


    // First approach - Start with a simple O(n2) brute force solution
    // Problem - too inefficient, fails test case #206
    // let maxProfit = 0
    // for (let i = 0; i < prices.length; i++) {
    //     for (let j = i + 1; j < prices.length; j++) {
    //         if (prices[j] - prices[i] > maxProfit) {
    //             maxProfit = prices[j] - prices[i]
    //         }
    //     }
    // }
    // return maxProfit

        
    // Check cheapest price occured prior to highest
    // If so this must be the best time to buy
    // maxIndex = prices.indexOf(Math.max(...prices))
    // minIndex = prices.indexOf(Math.min(...prices))
    // if (minIndex < maxIndex) {
    //     if (prices[maxIndex] - prices[minIndex] > maxProfit) {
    //         maxProfit = prices[maxIndex] - prices[minIndex]
    //         return maxProfit
    //     }
    // }