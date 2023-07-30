/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

 // Approach: loop through nums1 and nums2. insert the nums2 value if its lower, or if the nums1 value is a 0 (which means we've reached the end of nums1 actual values). Otherwise insert the nums1 value.
const merge = function(nums1, m, nums2, n) {
    let nums1Count = 0
    let nums2Count = 0
    let allNums1ValuesAreMerged = false
    
    while (nums1Count < m || nums2Count < n) {
        if (nums1Count >= m) {
            allNums1ValuesAreMerged = true
        } 
        if (allNums1ValuesAreMerged || nums2[nums2Count] < nums1[nums1Count + nums2Count]) {
            nums1.splice(nums1Count + nums2Count, 0, nums2[nums2Count])
            nums1.pop()
            nums2Count++
        } else {
            nums1Count++
        }
    }
}