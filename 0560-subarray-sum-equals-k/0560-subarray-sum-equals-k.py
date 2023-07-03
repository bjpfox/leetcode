class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        countDict = {}
        counter = 0
        sum = 0
        for i in nums:
            # Add cumulative sums from 0 to n, i.e. sum(A[:i])
            sum += i
            if sum == k:
                counter += 1
            if (sum - k) in countDict:
                counter += countDict[sum - k]
            if sum not in countDict:
                countDict[sum] = 1
            else:
                countDict[sum] += 1
        return counter


# Logic 
# For each index i of array A we store cumulative sums sum(A[:i]) in a hash table
# We know that sum(A[:j]) = sum(A[:i]) + sum(A[i:j]) for some j > i
# If we assume that there is some contiguous subarray A[i:j] which sum is equal to k: sum(A[i:j]) == k
# If sum(A[i:j]) == k, then we can rewrite the above equality as:
# sum(A[:j]) = sum(A[:i]) + k 
# sum(A[:j]) - k = sum(A[:i])

# Problem: given the above, how to ensure I'm only adding where j > i ? 
# Solution: you just check as you go. since countDict contains the results from 0 to i-1, that way, at step i we're only checking our i'th sum A[:j] against sums that are less than position i, i.e. where j > i