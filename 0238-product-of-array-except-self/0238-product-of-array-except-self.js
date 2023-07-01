/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let sumResults = {}
    let productsExceptSelf = [] 
    productsExceptSelf = nums.map((num, index) => {
        if (num in sumResults) {
            return sumResults[num]
        } else {
            const ans = nums.filter((num, i) => i !== index).reduce((a,b) => a*b, 1)
            sumResults[num] = ans
            return ans
        }
    }
    )
    return productsExceptSelf    
};

