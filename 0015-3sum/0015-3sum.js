/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Returns indexes of matching target in array, for efficiency will only return max of three
// since we can't have duplicate triplets, so we can only use a max of three 
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let indexes = [];

  while (left <= right && indexes.length < 3) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      if (indexes.length === 0 || !indexes.includes(mid)) {
        indexes.push(mid);
      }

      // Check for other instances to the left
      let i = mid - 1;
      while (i >= 0 && array[i] === target && indexes.length < 3 && !indexes.includes(i)) {
        indexes.push(i);
        i--;
      }

      // Check for other instances to the right
      i = mid + 1;
      while (i < array.length && array[i] === target && indexes.length < 3 && !indexes.includes(i)) {
        indexes.push(i);
        i++;
      }
    }

    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (indexes.length > 0) {
    return indexes;
  } else {
    return -1;
  }
}





// function binarySearch(array, target) {
//   let left = 0;
//   let right = array.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (array[mid] === target) {
//       return mid;
//     } else if (array[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }

var threeSum = function(nums) {
    nums.sort((a,b) => a - b)
    //console.log(nums)
    
    let triplets = {}
    let newTriplet = []
    let i = 0
    let j = 0

    // if the ith value is positive, there's no way we could get a triplet, since j and k must be > i, hence cant sum to 0
    while(nums[i] <= 0) {
        j = i + 1

        // if i+j > 0, we can no longer find a triplet, since k must also be positive, hence triplet cant sum to 0
        while(nums[i] + nums[j] <= 0) {
            target = -nums[i] - nums[j]

            // Check if theres a valid triplet (does the target exist in nums?)
            // Issue: if nums[i] or nums[j] is the target, then binarySearch will find this and return it
            // and think we've got a valid triplet
            // it would only be valid if theres multiple vals
            // otherwise not
            // whats the simple way to address this issue?
            // could slice but that would be O(n) time? as it needs to copy the array
            // could modify binarySearch so it returns all indexes
            // if target = nums[i] and/nums[j] check theres multiple matches 
            // numsReduced = nums.slice(nums.length - j)
            
            // numsReduced = nums.slice(j + 1)
            
            //console.log('nums:',nums)
            //console.log('numsReduced:',numsReduced)

            //let targetIndex = binarySearch(numsReduced, target)
            let targetIndex = binarySearch(nums, target)

            let tripletIsValid = targetIndex !== -1
            if (tripletIsValid) {
                
                // Using this now more generally, so consider renaming from uniqueArray to validArray or somehthing
                let uniqueArray = true
                
                // If the target is nums[i] or nums[j] we need to be careful that we dont count nums[i] or nums[j] as a match
                // So need at least two items if one matches, e.g. the triplet -4 + 2 + 2 = 0 
                // or three if both match, e.g. the triplet 0 + 0 = 0
                if (target === nums[i] && target === nums[j]) {
                    //console.log('A', targetIndex)
                    if (targetIndex.length < 3) {
                        //console.log('B')
                        uniqueArray = false
                    }
                } else if (target === nums[i] || target === nums[j]) {
                        //console.log('C', targetIndex, targetIndex.length)
                    if (targetIndex.length < 2) {
                        //console.log('D')
                        uniqueArray = false
                    }
                }

                newTriplet = [nums[i], nums[j], target].sort((a,b) => a - b)
                //console.log('triplet valid', newTriplet)
                
                // Checks if triplet array already exists
                if (triplets[newTriplet[2]]) {
                    for (let triplet of triplets[newTriplet[2]]) {
                        if (triplet[0] === newTriplet[0] && triplet[1] === newTriplet[1]) {
                            uniqueArray = false
                            //console.log('array exists')
                            break
                        } 
                    }   
                }
                // If unique, add it to triplets
                if (uniqueArray) {
                    if (triplets[newTriplet[2]]) {
                        triplets[newTriplet[2]].push(newTriplet)
                    } else {
                        triplets[newTriplet[2]] = [newTriplet]
                    }
                }
            }
            // Increment j to continue checking for more triplets
            j++
        }
        // Then once all j are exhausted, increment i and start checking again from that point
        i++
    }
    return Object.values(triplets).flat()
};

// How to reduce time complexity?
// Why do we loop through checking all the possible sums
// Why not set target = i + j, and then just find target k (where k = -i - j). if k exists (we dont care where), return an array [i, j, target] and then move on. to next j iteration. since nums is sorted we should be able to use binary search here. 

// This code uses vars defined below, need to refactor to work this in
// Logic is diff now, before you would check triplets to see if unique
// Now you know you want get duplicates based on the 3rd digit (k) repeating 
// But could still get duplicates from i, j duplicates
    
// Are there scenarios where target (k) could be before i,j ? no, because k must be more than i, j