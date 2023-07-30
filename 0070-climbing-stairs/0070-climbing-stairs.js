/**
 * @param {number} n
 * @return {number}
 */

// Strategy:
// We know that either the final step involves taking either a double step or a single step
// To finish with a double step, we must have been two steps back, hence the number of ways is just however many ways there were to get to the (i-2)th step 
// Similarly, to finish with a single step, the number of ways is however many ways there were to get to the (i-1)th step. Hence we can say that:
// # of ways to get to ith step = # of ways to get to i-1th step + # of ways to get to i-2th step

// Plan: 
// use stepCounter object to track (i-1th) and (i-2)th step counts
// Loop through to our n-th step, adding counts for i-1 and i-2, as per the formula above
// Return the overall count when we reach i=n

const climbStairs = function(n) {
    // For n = 2, we have 2 ways (1-1, 2). For n = 1, we have 1 way (1)
    if (n <= 2) {
        return n
    } else {
        // Initialise for n = 1, n = 2, per above
        let stepCounter = {
            oneStepBack: 2, 
            twoStepsBack: 1 
        }
        let currentStepCount = stepCounter.oneStepBack + stepCounter.twoStepsBack

        for (let i = 3; i <= n; i++) {
            currentStepCount = stepCounter.oneStepBack + stepCounter.twoStepsBack
            stepCounter.twoStepsBack = stepCounter.oneStepBack
            stepCounter.oneStepBack = currentStepCount
        }
        return currentStepCount
    }
};



