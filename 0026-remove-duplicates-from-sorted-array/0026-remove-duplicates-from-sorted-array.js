/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length) {
            break
        }
        while (nums[i] === nums[i-1]) {
            nums.splice(i,1)
        }
    }
    return nums.length
};