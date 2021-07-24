//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

 

//Example 1:

//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//Output: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function(nums, target) {
    var result = [];//create a result to push in the two indices and return
    let map = new Map();// create a map to store element and use to find the number that adds up to the target
    
    for (let i=0; i<nums.length; i++){//loop
        var dif = target - nums[i];//for every loop minus the target from the current number
        if(!map.has(dif)){//check if the map contains that number
            map.set(nums[i], i);//if not just add that number with its index to the map
            
        }
        else{
            result.push(map.get(dif), i);//if it has, just push to the result
            break;//then break out of the loop
        }
    }
    return result;//return the result
    //we dont care if the result is empty or not, if the result is empty we dont have the values basically
    
    
};

//Time complexity: O(N)
//Space Complexity: O(N)