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


// Misc notes
 // create n empty arrays (is this constant time? i think so)
    // step through num by num, if current num put 1, else put the num
    // cant pass through and multiple though as that wouldnt be consnt
    // why cant you just maintain a running product
    //
    // [x1 x2 x3 x4 x5]
    // x1*=1 x2*=4 x3*=4 x4*=4
    // x2*=3 x2*=1 x3*=3 x4*=4
    // then return... isn't that still constant time? no because you're going through each item
    // can we multiply the array in one go? no - you still have to do n operations o

    // other ideas...look at ratios? but this would involve division..
    // could modulus help? dont see how..
    // how can we use space...e.g. create a new copy every time, something like that 
    // an object we can just multiple the ones not including
    // can sorting help
    // can handling duplicate numbers help? ans is same
    // can have max 60 numbers, whereas nums length can be 100000
    // if not in the object, compute its sum and add it 
    // else just take the sum we already have and push it to array
    // so its basicaly mapping nums, using the values in this object
    // so max we have to look up 60 vals 
    // maybe we can be clever as we know negative nums are just minus sign
    // so can we check abs value and then check if negative and do that to save another sweep through 
    // key insight look at the constrants
    // look at the test data 