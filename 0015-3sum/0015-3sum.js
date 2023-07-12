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

var threeSum = function(nums) {
    let triplets = {}
    let newTriplet = []
    let i = 0
    let j = 0

    // sort is O(n log n), this is OK since solution will end up being O(n^2) at best
    nums.sort((a,b) => a - b)


    // if the ith value is positive, there's no way we could get a triplet, since j and k must be > i, hence cant sum to 0
    while(nums[i] <= 0) {
        j = i + 1

        // if i+j > 0, we can no longer find a triplet, since k must also be positive, hence triplet cant sum to 0
        while(nums[i] + nums[j] <= 0) {
            target = -nums[i] - nums[j]
            let targetIndex = binarySearch(nums, target)

            let tripletIsValid = targetIndex !== -1
            if (tripletIsValid) {
                
                // Using this now more generally, so consider renaming from uniqueArray to validArray or somehthing
                let uniqueArray = true
                
                // If the target is nums[i] or nums[j] we need to be careful that we dont count nums[i] or nums[j] as a match
                // So need at least two items if one matches, e.g. the triplet -4 + 2 + 2 = 0 
                // or three if both match, e.g. the triplet 0 + 0 = 0
                if (target === nums[i] && target === nums[j]) {
                    if (targetIndex.length < 3) {
                        uniqueArray = false
                    }
                } else if (target === nums[i] || target === nums[j]) {
                    if (targetIndex.length < 2) {
                        uniqueArray = false
                    }
                }
                newTriplet = [nums[i], nums[j], target].sort((a,b) => a - b)
                
                // Checks if triplet array already exists
                if (triplets[newTriplet[2]]) {
                    for (let triplet of triplets[newTriplet[2]]) {
                        if (triplet[0] === newTriplet[0] && triplet[1] === newTriplet[1]) {
                            uniqueArray = false
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
        // Once all j are exhausted, increment i and start checking again from that point
        i++
    }
    return Object.values(triplets).flat()
};
